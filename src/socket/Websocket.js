export function Websocket(that, msgType, roomNumber) {

    console.log("ws passed room number " + roomNumber)

    var socket = new WebSocket('ws://localhost:8081/api/ws');

    // on websocket error
    socket.addEventListener('error', function (event) {
        console.log("error")
        console.log(event);
    });

    // Connection opened
    socket.addEventListener('open', function (event) {
        console.log("connected")
        var msg = { "type": msgType, "RoomID": parseInt(roomNumber) }

        if (msgType == "hello") {
            msg["data"] = "";
        }
        else if (msgType == "addPlayer") {
            msg["data"] = that.state.input;
        } else if (msgType == "updateAvatar") {
            msg["avatarId"] = that.state.avatarId
            msg["positionX"] = that.state.positionX
            msg["positionY"] = that.state.positionY
            msg["bodyLength"] = that.state.bodyLength
            msg["direction"] = that.state.direction

        }

        console.log("in this case " + JSON.stringify(msg))

        socket.send(JSON.stringify(msg));

    });

    // Listen for messages
    socket.addEventListener('message', function (event) {
        console.log("message")
        console.log("respoonse back " + JSON.parse(JSON.stringify(event.data)))
        // that.setState({
        //     listView: JSON.parse(event.data) != null ? JSON.parse(event.data) : []
        // })
        // console.log(that.state.listView)
    });
}