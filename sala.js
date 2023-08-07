// Adicionar os seus links do Firebase 
const firebaseConfig = {
  apiKey: "AIzaSyAtCYX9Mn3W5F0Nj8AT7iuLsKHn5TuEN3k",
  authDomain: "chatfriends-c8f88.firebaseapp.com",
  databaseURL: "https://chatfriends-c8f88-default-rtdb.firebaseio.com",
  projectId: "chatfriends-c8f88",
  storageBucket: "chatfriends-c8f88.appspot.com",
  messagingSenderId: "342417486750",
  appId: "1:342417486750:web:456393c13854b968c0dc8f"
};

firebase.initializeApp(firebaseConfig);


// Adicionar salas
nomeUsuario = localStorage.getItem("nomeUsuario");
document.getElementById("nomeUsuario").innerHTML = "Bem vindo(a)"

function addRoom(){
  roomName = document.getElementById("roomName").value;
  firebase.database().ref("/").child(roomName).update({purpose: "Adicionando nome da sala"});
  localStorage.setItem("roomName", roomName);
  window.location = "mensagem.html";
}

// Obter os nomes das salas já gravadas no Firebase: 
function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { 
      childKey  = childSnapshot.key;
      roomName = childKey;
      console.log("Nome da sala: " + roomName);
      row = "<div class='roomName' id="+ roomName+" onclick='redirectToRoomName(this.id)' >#"+ roomName +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData(); 

// Redirecionar para a sala escolhida 
function redirectToRoomName(name){
  console.log(name)
  localStorage.setItem("roomNamw", name);
  window.location = "mensagem.html";
}

// Fazer o logout 
function logout(){
  localStorage.removeItem("nomeUsuario");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}