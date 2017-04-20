exports.config = {
    apiKey: "AIzaSyCcOrUunR4JOkX4Vb20nwJHca1PWigWDtg",
    authDomain: "internship-c73b7.firebaseapp.com",
    databaseURL: "https://internship-c73b7.firebaseio.com",
    projectId: "internship-c73b7",
    storageBucket: "internship-c73b7.appspot.com",
    messagingSenderId: "271263045742"
  };
 exports.firebase = require('firebase');
 exports.firebase.initializeApp(this.config);
