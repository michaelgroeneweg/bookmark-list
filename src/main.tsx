import React from 'react'
import { render } from "react-dom";
import Layout from './components/Layout'
import './main.css'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Router from './router';

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Layout>
        <Router />
    </Layout>
    </BrowserRouter>,
    rootElement
);