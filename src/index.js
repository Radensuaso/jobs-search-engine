import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/helpers/Loading.jsx";

ReactDOM.render(
  <Provider store={configureStore}>
    <PersistGate persistor={persistor} loading={<Loading />}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
