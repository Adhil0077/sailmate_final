import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {Provider} from 'react-redux'
import { store,persistor } from "./redux/store.js";
import {PersistGate} from 'redux-persist/integration/react'
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
  <GoogleOAuthProvider clientId="27772096305-5ucb7nnn0e75dhjc5smtl5s5on4a4ijl.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
  </PersistGate>
  </Provider>
);
