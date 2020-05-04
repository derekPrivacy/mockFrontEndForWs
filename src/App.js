import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Websocket } from './socket/Websocket'

import { withRouter } from "react-router-dom";


class App extends Component {

  state = {
    listView: [],
    input: "",
    roomNumber: 0
  }

  componentDidMount() {

  }

  handleEnterRoom(that, input) {
    console.log()
    this.props.history.push(`/room/${this.state.roomNumber}`)
  }

  updateInput(that, evt) {
    console.log("event " + evt.target.value)
    that.setState({
      roomNumber: evt.target.value
    })
    console.log(this.state.roomNumber)
  }

  testCors() {
    const Http = new XMLHttpRequest();
    const url = 'http://3.14.4.184:8081/api/validateUser';
    Http.open("POST", url);
    Http.send(JSON.stringify({
      user: "dsasd",
      password: "123"
    }));

    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }
  }



  render() {

    return (
      <div>
        {this.state.listView ? (
          <div className="App" >
            {/* <InputGroup className="mb-3" onChange={(e) => this.updateInput(this, e)}>

              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={(e) => this.handleCreateRoom(this, e)}>Create Room</Button>
              </InputGroup.Append>
            </InputGroup> */}

            <InputGroup className="mb-3" onChange={(e) => this.updateInput(this, e)}>
              <FormControl
                placeholder="enter room"
                aria-label="enter room"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={(e) => this.handleEnterRoom(this, e)}>Button</Button>
              </InputGroup.Append>
            </InputGroup>

            <Button variant="outline-secondary" onClick={(e) => this.testCors()}></Button>


          </div >
        ) : <div />}
      </div>
    )
  }
}

export default withRouter(App);
