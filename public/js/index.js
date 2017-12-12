var socket = io();

socket.on("connect", function () {
    console.log("Connected to server");
})

socket.on("welcomeMessage", function(message) {
    console.log(message.text)
})

socket.on("disconnect", function () {
    console.log("Disconnect from the server!");
})

socket.on("newMessage", function (message) {
    console.log("New message!", message)
})