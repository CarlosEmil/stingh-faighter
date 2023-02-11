var firebaseConfig = {
    apiKey: "AIzaSyBrxRyU6jAfPI7WvT4lYSRF1ZduSi-4IFQ",
    authDomain: "proyectostinghfaiter.firebaseapp.com",
    databaseURL: "https://proyectostinghfaiter-default-rtdb.firebaseio.com",
    projectId: "proyectostinghfaiter",
    storageBucket: "proyectostinghfaiter.appspot.com",
    messagingSenderId: "19858882436",
    appId: "1:19858882436:web:e6e84d044ce8f77129e7d1"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function añadir_usuario(){
    var user_name=document.getElementById("user_name").value
    localStorage.setItem("usuario",user_name)

    window.location="room.html"
}