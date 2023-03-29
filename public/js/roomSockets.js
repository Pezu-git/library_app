const roomName = location.pathname.split("/").pop();
var socket = io.connect("/", { query: `roomName=${roomName}` });
console.log(roomName);
const boxList = document.querySelector("#list");
const inputUsername = document.querySelector("#username");
const inputText = document.querySelector("#text");
const sendAll = document.querySelector("#send-all");
const sendMe = document.querySelector("#send-me");
const sendRoom = document.querySelector("#send-room");

const getTmp = (msg) => {
  return `
                <div class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <small>${msg.username}</small>
                    </div>
                    <p class="mb-1">${msg.text}</p>
                </div>
        `;
};

// socket.on("message-to-me", (msg) => {
//   const div = getTmp(msg);
//   boxList.insertAdjacentHTML("beforeend", div);
// });

// sendMe.addEventListener("click", () => {
//   socket.emit("message-to-me", {
//     username: inputUsername.value,
//     text: inputText.value,
//   });
// });

// socket.on("message-to-all", (msg) => {
//   const div = getTmp(msg);
//   boxList.insertAdjacentHTML("beforeend", div);
// });

// sendAll.addEventListener("click", () => {
//   socket.emit("message-to-all", {
//     username: inputUsername.value,
//     text: inputText.value,
//   });
// });

socket.on("message-to-room", (msg) => {
  const div = getTmp(msg);
  boxList.insertAdjacentHTML("beforeend", div);
});

sendRoom.addEventListener("click", () => {
  fetch("/chat/create/", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      room: roomName,
      sender: inputUsername.value,
      message: inputText.value,
    }),
    method: "post",
  });

  socket.emit("message-to-room", {
    username: inputUsername.value,
    text: inputText.value,
  });
});
