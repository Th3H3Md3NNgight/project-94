
var firebaseConfig = {
      apiKey: "AIzaSyAN3Zk9CJgJP7mRbe0O-qjVJBJOo25eZe8",
      authDomain: "lets-chat-web-app-1241d.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-1241d-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-1241d",
      storageBucket: "lets-chat-web-app-1241d.appspot.com",
      messagingSenderId: "135389330700",
      appId: "1:135389330700:web:173b3c21e36f2b31c39d29"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
