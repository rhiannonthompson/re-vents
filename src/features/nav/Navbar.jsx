import React from "react";
import { Container, Menu, Button} from "semantic-ui-react";

export default function Navbar({setFormOpen}) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="assets/logo.png" alt="logo" style={{marginRight: 15} }/>
        </Menu.Item>
        <Menu name="Events" />
        <Menu.Item>
          <Button onClick={() => setFormOpen(true)} positive inverted content="Create Event"/>
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login"/>
          <Button basic inverted content="Login" style={{marginLeft: "0.5em"}}/>
        </Menu.Item>
      </Container>
    </Menu>
  )
}