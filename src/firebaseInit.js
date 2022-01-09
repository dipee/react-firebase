import firebase from "firebase/app";
import "firebase/messaging";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCennbAnRkBW3o2OlxkwI1HJ8p_p1ybK-A",
  authDomain: "django-project-10471.firebaseapp.com",
  projectId: "django-project-10471",
  storageBucket: "django-project-10471.appspot.com",
  messagingSenderId: "556229374549",
  appId: "1:556229374549:web:02cef70d5d60d155159adc",
  measurementId: "G-RX2DPRT8F1",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// const { REACT_APP_VAPID_KEY } = process.env;
const { REACT_APP_VAPID_KEY } =
  "BOEK9P9Imda1IDvNN-Ppxl6fZiDrdRIGPKiiOI-0Y5KlShaIQ9nm5UNYfn0NhBa-8UwBtVhR24YzTKgDxLlJwos";
const publicKey =
  "BOEK9P9Imda1IDvNN-Ppxl6fZiDrdRIGPKiiOI-0Y5KlShaIQ9nm5UNYfn0NhBa-8UwBtVhR24YzTKgDxLlJwos";

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
