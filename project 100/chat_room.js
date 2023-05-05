const firebaseConfig = {
    apiKey: "AIzaSyAvOc7RZQ74ufP94zsOV6-EuB1v9hghhUw",
    authDomain: "project-100-1132a.firebaseapp.com",
    databaseURL: "https://project-100-1132a-default-rtdb.firebaseio.com",
    projectId: "project-100-1132a",
    storageBucket: "project-100-1132a.appspot.com",
    messagingSenderId: "1049613551160",
    appId: "1:1049613551160:web:09903c614e6248c953c8cd"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room names - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "chat_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
