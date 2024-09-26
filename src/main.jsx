import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import globalReducer from "./core/reducers/index.js";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: globalReducer
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
)
