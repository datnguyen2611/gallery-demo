import * as firebase from "firebase/firebase";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZpiUkOPQkcWBAlETp-DwFOBmEsK_IHrg",
    authDomain: "gallery-demo-cnc.firebaseapp.com",
    projectId: "gallery-demo-cnc",
    storageBucket: "gallery-demo-cnc.appspot.com",
    messagingSenderId: "3073328618",
    appId: "1:3073328618:web:04243cd7b48ba971535e93"
  };

  firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
  const timestamp = firebase.firebase.FieldValue.serverTimestamp();
  
  export {projectStorage,projectFireStore,timestamp}
