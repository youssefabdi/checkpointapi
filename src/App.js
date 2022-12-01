// import logo from './logo.svg';
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "././App.css";
import { Card } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
function App({ users }) {
  return (
    <div className="App1">
      <br />
      {users.map((user, i) => (
        <Card className="App" key={i}>
          <Card.Body>
            <Card.Title> {user.name} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {" "}
              {user.email}{" "}
            </Card.Subtitle>
            <Card.Text> {user.phone} </Card.Text>
            <Card.Link as={Link} to={`/${user.id}`}>
              Detaills
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default App;
