import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventsDashboard/EventsDashboard";
import Navbar from "../../features/nav/Navbar";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";

function App() {

  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <Navbar />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route
                path={["/createEvent", "/manage/id"]}
                component={EventForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
