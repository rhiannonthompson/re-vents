
import React, {useState} from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventsDashboard/EventsDashboard";
import Navbar from "../../features/nav/Navbar";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <Navbar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard setFormOpen={setFormOpen} formOpen={formOpen}/>
      </Container>
    </>
  );
}

export default App;

