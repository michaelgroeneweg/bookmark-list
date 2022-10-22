import React from 'react'
import Layout from './components/Layout'
import ReactDOM from 'react-dom/client'
import './main.css'
import { BrowserRouter } from "react-router-dom";
import Router from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Layout>
            <Router />
        </Layout>
    </BrowserRouter>
);