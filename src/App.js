import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Websocket } from './socket/Websocket'


class App extends Component {

  state = {
    listView: [],
    input: ""
  }

  componentDidMount() {
    Websocket(this, "hello")
  }

  handleAddUser(that, input) {
    console.log("ok" + that.state.input)
    Websocket(that, "addPlayer")
  }

  handleEnterRoom(that, input) {

  }

  handleCreateRoom(that, input) {

  }

  updateInput(that, evt) {
    console.log("event " + evt.target.value)
    that.setState({
      input: evt.target.value
    })
    console.log(this.state.input)
  }

  render() {

    return (
      <div>
        {this.state.listView ? (
          <div className="App" >
            <InputGroup className="mb-3" onChange={(e) => this.updateInput(this, e)}>

              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={(e) => this.handleCreateRoom(this, e)}>Create Room</Button>
              </InputGroup.Append>
            </InputGroup>

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



          </div >
        ) : <div />}
      </div>
    )
  }
}

export default App;
