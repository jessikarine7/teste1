import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import usuarios from './FuncionalComponent/usuarios.js';


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={usuarios}/>
      </Switch>
    </BrowserRouter>
  );
}