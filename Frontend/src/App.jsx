import './App.css'
import Homepage from './homepage'
import { BrowserRouter as Router} from 'react-router-dom'
import Approutes from './Approutes'
function App() {

  return (
    <Router>
      <div className='Body'>
      <Approutes/>
       </div>
    </Router>
  )
}

export default App