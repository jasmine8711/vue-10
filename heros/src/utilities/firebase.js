import { firebase } from '@firebase/app';
import "firebase/auth";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCbWGhca-SHYAXOXatRHwfclmecHBwFJpg",
    authDomain: "vue-10-app.firebaseapp.com",
    projectId: "vue-10-app",
    storageBucket: "vue-10-app.appspot.com",
    messagingSenderId: "412069035241",
    appId: "1:412069035241:web:8eccf41e88004eaa068478"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;
