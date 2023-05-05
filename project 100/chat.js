// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



