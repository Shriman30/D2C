import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing/LandingPage';
import UpcomingEventsPage from './pages/UpcomingEvents/UpcomingEventsPage'
import Navbar from'./components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ="/" element = {<Landing/>}/>
        <Route path="/UpcomingEvents/*" element = {<UpcomingEventsPage/>}/> 
        {/* doing something similar to line 12 will allow us to implement more specific routes */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
