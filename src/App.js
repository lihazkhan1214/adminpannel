import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import New from './pages/new/New';
import List from './pages/list/List';
import Signle from './pages/single/Signle';
import { userInputs, productInputs } from './formSource';
import "./style/dark.scss"
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {
  const {darkMode}=useContext(DarkModeContext);
  return (
    <><div className={darkMode?"dark app":"app"}>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='users' >
            <Route index element={<List />}></Route>
            <Route path=':userId' element={<Signle />}></Route>
            <Route path='new' element={<New inputs={userInputs} title="Add new User" />}></Route>
          </Route>
          <Route path='products' >
            <Route index element={<List />}></Route>
            <Route path=':productId' element={<Signle />}></Route>
            <Route path='new' element={<New inputs={productInputs} title="Add new Products" />}></Route>
          </Route>

        </Route>

      </Routes>
      </div>
    </>
  )
}

export default App