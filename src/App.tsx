import React, { useState } from 'react'
import { BrowserRouter }from "react-router-dom";
import DefaultLayout from "./layouts/Default";
import Router from "./router";

const App = () => {
  return (
      <BrowserRouter>
          <DefaultLayout>
              <Router />
          </DefaultLayout>
      </BrowserRouter>
  )
}

export default App
