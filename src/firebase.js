import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5kqeM0e5vx40utinqT5pjnUB31t-oBQ4",
    authDomain: "dk-blog-7fd0a.firebaseapp.com",
    projectId: "dk-blog-7fd0a",
    storageBucket: "dk-blog-7fd0a.appspot.com",
    messagingSenderId: "503359642278",
    appId: "1:503359642278:web:397bf2e5bd7b46f723f267"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();