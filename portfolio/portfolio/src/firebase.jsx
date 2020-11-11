import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
     
    apiKey: "AIzaSyDpHFodvBtFgfH8fsq826oOchY370TGF-Y",
    authDomain: "react-contact-form-f5e69.firebaseapp.com",
    databaseURL: "https://react-contact-form-f5e69.firebaseio.com",
    projectId: "react-contact-form-f5e69",
    storageBucket: "react-contact-form-f5e69.appspot.com",
    messagingSenderId: "1041873112086",
    appId: "1:1041873112086:web:4c86f164e84f3d8f4cf937"
});

var db = firebaseApp.firestore();

export {db};