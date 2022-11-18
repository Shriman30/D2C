import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/LandingPage";
import UpcomingEventsPage from "./pages/AllUpcomingEvents/UpcomingEventsPage";
import Navbar from "./components/Navbar/Navbar";
import upcomingEventsList from "./upcomingEventsData";
import SpecificEventInfoPage from "./pages/SpecificEventInfo/SpecificEventInfoPage";
import FilteredUpcomingEventsPage from "./pages/FilteredUpcomingEvents/FilteredUpcomingEventsPage";
import { useState } from "react";

function App() {
  const [userSelection, setUserSelection] = useState('');
  const callbackFunction = (userInput)=>{
    setUserSelection(userInput);
  }
  const filteredUpcomingEventsList = upcomingEventsList.filter(upcomingEvent =>{
    return upcomingEvent.location ===userSelection;
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Landing parentCallback={callbackFunction} />} />
          <Route
            path="/AllUpcomingEvents/*"
            element={<UpcomingEventsPage data={upcomingEventsList}/>}
          />
          <Route
            path="/UpcomingEventsByLocation/*"
            element={<FilteredUpcomingEventsPage data={filteredUpcomingEventsList} />}
          />
          {upcomingEventsList.map((upcomingEvent) => {
            return (
              <Route
                key={upcomingEvent.id}
                path={`/${upcomingEvent.link}/*`}
                element={
                  <SpecificEventInfoPage
                    title={upcomingEvent.title}
                    description={upcomingEvent.description}
                    location={upcomingEvent.location}
                    price={upcomingEvent.price}
                    exactLocation = {upcomingEvent.exactLocation}
                  />
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
