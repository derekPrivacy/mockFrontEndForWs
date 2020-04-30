import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const studentList = ["student", "student"];

class Room extends Component {

    state = {
        listView: [],
        input: ""
    }

    componentDidMount() {

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
            <>
                <div>in the room number 1</div>
                <InputGroup className="mb-3" onChange={(e) => this.updateInput(this, e)}>
                    <FormControl
                        placeholder="add player"
                        aria-label="add player"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={(e) => this.handleAddUser(this, e)}>Button</Button>
                    </InputGroup.Append>
                </InputGroup>

                <ListGroup>

                    {this.state.listView.map((object, i) => <ListGroup.Item>
                        {object}

                    </ListGroup.Item>)}
                </ListGroup>
            </>
        );
    }
    nextPath(path) {
        this.props.history.push(path);
    }
}

export default withRouter(Room);