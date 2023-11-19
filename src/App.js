import React from 'react';
import { BrowserRouter, Routes, Link } from "react-router-dom";
import { Nav } from "components/Nav";
import {routes} from "./components/routes"

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <header>
        <Link to="/"><h1>BOOKS</h1></Link>
        <Nav />
      </header>
      <main>
        <Routes>
          {routes}
        </Routes>
      </main>
      </BrowserRouter>
    </div>
  )
}
