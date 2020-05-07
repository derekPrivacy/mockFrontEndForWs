import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Websocket } from '../socket/Websocket'

import { WebsocketAdd } from '../socket/WebsocketAddPlayer'



const studentList = ["student", "student"];

class Room extends Component {

    state = {
        listView: [],
        input: "",
        roomId: 0,
        //
        avatarId: "",
        positionX: "",
        positionY: "",
        bodyLength: "",
        direction: "",
        //
        foodPositionX: "",
        foodPositionY: ""
    }

    componentDidUpdate(prevProps) {
        if (this.state.roomId !== this.props.match.params.id) {
            this.setState({
                listView: [],
                roomId: this.props.match.params.id
            });
        }
    }

    componentDidMount() {
        console.log("get para number " + this.props.match.params.id)
        Websocket(this, "hello", this.props.match.params.id)
        this.setState({
            roomId: this.props.match.params.id
        })
    }

    updateInput(that, evt) {
        console.log("event " + evt.target.value)
        that.setState({
            input: evt.target.value
        })
        console.log(this.state.input)
    }

    handleAddUser(that, input) {
        console.log("ok" + that.state.input)
        WebsocketAdd(that, "addPlayer", this.props.match.params.id)
    }

    updateAvatar1(that) {
        that.setState({
            avatarId: 1,
            positionX: 123,
            positionY: 321,
            bodyLength: 6,
            direction: "left",
        })
        Websocket(that, "updateAvatar", this.props.match.params.id)
    }
    updateAvatar2(that) {
        that.setState({
            avatarId: 2,
            positionX: 123,
            positionY: 321,
            bodyLength: 6,
            direction: "right",
        })
        Websocket(that, "updateAvatar", this.props.match.params.id)
    }

    sayHello(that) {
        Websocket(that, "hello", this.props.match.params.id)
    }

    spawnFood(that) {
        that.setState({
            foodPositionX: 999,
            foodPositionY: 666
        })
        Websocket(that, "spawnFood", this.props.match.params.id)
    }

    render() {
        return (
            <>
                <div>in the room number {this.props.match.params.id}</div>
                <Button variant="outline-secondary" onClick={(e) => this.spawnFood(this)}>spawn food</Button>
                <Button variant="outline-secondary" onClick={(e) => this.updateAvatar1(this)}>updateAvatar 1</Button>
                <Button variant="outline-secondary" onClick={(e) => this.updateAvatar2(this)}>updateAvatar 2</Button>
                <Button variant="outline-secondary" onClick={(e) => this.sayHello(this)}>say hello</Button>
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