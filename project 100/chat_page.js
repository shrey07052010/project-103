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

user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");


function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}