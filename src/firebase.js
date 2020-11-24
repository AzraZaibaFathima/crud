import  firebase  from "firebase";

 var firebaseConfig = {
    apiKey: "AIzaSyBCLMF78yVONebwEUh6ZGf32x7NeA0O8ZQ",
    authDomain: "react-crud-6d225.firebaseapp.com",
    databaseURL: "https://react-crud-6d225.firebaseio.com",
    projectId: "react-crud-6d225",
    storageBucket: "react-crud-6d225.appspot.com",
    messagingSenderId: "591245276281",
    appId: "1:591245276281:web:2fa9ae84a0f0ee362610a8",
    measurementId: "G-XMGBEGG0H4"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();

