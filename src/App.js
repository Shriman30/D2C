import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/LandingPage";
import UpcomingEventsPage from "./pages/UpcomingEvents/UpcomingEventsPage";
import Navbar from "./components/Navbar/Navbar";
import upcomingEventsList from "./upcomingEventsData";
import SpecificEventInfoPage from "./pages/SpecificEventInfo/SpecificEventInfoPage";
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  path="/*" element={<Landing />} />
          <Route path="/AllUpcomingEvents" element={<UpcomingEventsPage />} />
          {upcomingEventsList.map(upcomingEvent =>{
            return(<Route key={upcomingEvent.id} path = {`/${upcomingEvent.link}`} element={<SpecificEventInfoPage title = {upcomingEvent.title}/>}/>)
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
