from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
import requests
from flask_cors import CORS
load_dotenv()
app = Flask(__name__)
CORS(app)
google_maps_api_key = os.getenv('google_maps_api_key')
groq_api_key = os.getenv('groq_api_key')
open_meteo_url = "https://api.open-meteo.com/v1/forecast"
groq_api_url = 'https://api.groq.com/openai/v1/chat/completions'
def get_lat_lng(location):
    geo_url = f"https://maps.googleapis.com/maps/api/geocode/json?address={location}&key={google_maps_api_key}"
    geo_response = requests.get(geo_url).json()
    if 'results' not in geo_response or not geo_response['results']:
        return None, None
    return geo_response['results'][0]['geometry']['location'].values()
def get_weather(lat, lng):
    weather_url = f"{open_meteo_url}?latitude={lat}&longitude={lng}&current_weather=true"
    weather_response = requests.get(weather_url).json()
    return weather_response.get("current_weather", {})
def get_nearby_coworking_spaces(lat, lng):
    places_url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={lat},{lng}&radius=5000&type=cafe&key={google_maps_api_key}"
    places_response = requests.get(places_url).json()
    return [place['name'] for place in places_response.get("results", [])[:5]]
def get_traffic_info(origin, destination):
    traffic_url = f"https://maps.googleapis.com/maps/api/distancematrix/json?origins={origin}&destinations={destination}&key={google_maps_api_key}"
    traffic_response = requests.get(traffic_url).json()
    if 'rows' in traffic_response and traffic_response['rows'][0]['elements'][0]['status'] == 'OK':
        return traffic_response['rows'][0]['elements'][0]['duration']['text']
    return "Unknown"
def get_ai_recommendation(context):
    headers = {"Authorization": f"Bearer {groq_api_key}", "Content-Type": "application/json"}
    llm_payload = {
        "model": "llama3-70b-8192",
        "messages": [
            {"role": "system", "content": "You are an AI assistant helping hybrid workers decide where to work based on their meeting schedule, weather conditions, and traffic. In case traffic data is missing, don't mention it to the user. Consider the other parameters."},
            {"role": "user", "content": context}
        ],
        "temperature": 0.7
    }
    response = requests.post(groq_api_url, json=llm_payload, headers=headers)
    if response.status_code == 200:
        return response.json().get("choices", [{}])[0].get("message", {}).get("content", "No recommendation available.")
    return "Error: Unable to fetch recommendation."
@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    meeting_location = data.get("meeting_location")
    meeting_time = data.get("meeting_time")
    current_location = data.get("current_location")

    if meeting_location:
        lat, lng = get_lat_lng(meeting_location)
        if lat is None:
            return jsonify({"error": "Invalid meeting location"}), 400
        weather = get_weather(lat, lng)
        coworking_spaces = get_nearby_coworking_spaces(lat, lng)
        context = f"Meeting location: {meeting_location}\nMeeting time: {meeting_time}\nWeather: {weather}\nNearby coworking spaces: {coworking_spaces}\nShould I work from home or go outside?"
    elif current_location:
        lat, lng = get_lat_lng(current_location)
        if lat is None:
            return jsonify({"error": "Invalid current location"}), 400
        weather = get_weather(lat, lng)
        coworking_spaces = get_nearby_coworking_spaces(lat, lng)
        traffic_time = get_traffic_info(current_location, coworking_spaces[0] if coworking_spaces else current_location)
        context = f"Current location: {current_location}\nWeather: {weather}\nNearby coworking spaces: {coworking_spaces}\nTraffic time: {traffic_time}\nShould I work from home or go outside?"
    else:
        return jsonify({"error": "Please provide either meeting location or current location"}), 400

    recommendation = get_ai_recommendation(context)
    return jsonify({
        "lat": lat,
        "lng": lng,
        "weather": weather,
        "coworking_spaces": coworking_spaces,
        "recommendation": recommendation
    })
@app.route('/ping', methods=['GET'])
def ping():
    return jsonify({"message": "Flask app is awake!"}), 200
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
