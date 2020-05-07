export function WebsocketAdd(that, msgType, roomNumber) {

    console.log("ws passed room number " + roomNumber)
    console.log("type message " + msgType)

    var socket = new WebSocket('ws://localhost:8081/api/socketAdd');

    // on websocket error
    socket.addEventListener('error', function (event) {
        console.log("error")
        console.log(event);
    });

    // Connection opened
    socket.addEventListener('open', function (event) {
        console.log("connected")
        var msg = { "type": msgType, "RoomID": parseInt(roomNumber), "data": that.state.input }

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