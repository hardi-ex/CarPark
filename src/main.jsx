import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <App />
          <Toaster position="top-center" reverseOrder={false} />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
