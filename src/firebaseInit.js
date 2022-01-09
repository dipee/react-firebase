import firebase from "firebase/app";
import "firebase/messaging";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6FESJnWvkkZCkCuL2jL1Mi06vjylT1GI",
  authDomain: "notification-3eb8a.firebaseapp.com",
  projectId: "notification-3eb8a",
  storageBucket: "notification-3eb8a.appspot.com",
  messagingSenderId: "662637249214",
  appId: "1:662637249214:web:c831cd5c75eb2f29ab94ef",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// const { REACT_APP_VAPID_KEY } = process.env;

const publicKey =
  "BApYqL7XxDvBod4pWIgt9pVuIjkJrCEOzcYDgwZyyZBlyMzHPYWqGklH81WFdK6LRXrMSzAICz8g794SZTOkBBU";

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
