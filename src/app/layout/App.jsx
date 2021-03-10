import React from "react";
import { Route, useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventsDashboard/EventsDashboard";
import Navbar from "../../features/nav/Navbar";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import SandBox from "../../features/sandbox/Sandbox";
import ModalManager from "../common/modals/ModalManager";
import { ToastContainer } from "react-toastify"
import ErrorComponent from "../common/errors/ErrorComponent";
import AccountPage from "../../features/auth/AccountPage";
import { useSelector } from "react-redux";
import LoadingComponent from "./LoadingComponent";

function App() {
  const { key } = useLocation();
  const { initialized } = useSelector((state) => state.async);

  if (!initialized) return <LoadingComponent content="Loading app..."/>

  return (
    <>
      <ModalManager />
      <ToastContainer
        position="bottom-right"
        hideProgressBar
      />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <Navbar />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route exact path="/sandbox" component={SandBox} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
                key={key}
              />
              <Route path="/account" component={AccountPage}/>
              <Route path="/error" component={ErrorComponent}/>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
