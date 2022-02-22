import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './usuarios.css';

export default function Lista(){

  const [nome, setNome] = useState('');
  // const [cargo, setCargo] = useState('');
  
  
  useEffect(() =>  {

    axios
      .get('https://gist.githubusercontent.com/alencarlucas/4cd794e2e44bbe926ea4ab28da2fa3e7/raw/2c304035b03c3c5e2e708e4e82c49a42899e47ed/fiter.json')
      .then(response => {
        console.log(response.data)
        // setUsers(response.data)
      })

  })

  return(

    <div className='container'>

      <button className='b-foto'>
        <img className='foto' src="/img/foto.png"/>
      </button>

      <form className='form'>
        <label className='descricao'>Nome</label>
        <p className='nome' required value={nome}>aqui</p>
        <label className='descricao'>Cargo</label>
        <p className='cargo'>aqui</p>
        <label className='descricao'>Telefone</label>
        <p className='tel'>aqui</p>
      </form>

    </div>
  );
}