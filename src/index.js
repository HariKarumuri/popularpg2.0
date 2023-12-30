import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Store/store";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthContext";
import { OtpProvider } from "./context/OtpContext";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <OtpProvider>
        <Provider store={store}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Provider>
      </OtpProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
