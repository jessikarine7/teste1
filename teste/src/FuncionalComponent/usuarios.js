import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './usuarios.css';

export default function Lista(){

  const [nome, setNome] = useState('');
  // const [cargo, setCargo] = useState('');
  
  
  axios
    .get('https://gist.githubusercontent.com/alencarlucas/4cd794e2e44bbe926ea4ab28da2fa3e7/raw/2c304035b03c3c5e2e708e4e82c49a42899e47ed/fiter.json')
    .then(response => {
      console.log(response.data)
      // setNome(response.data)
      // console.log(nome)
    })
  useEffect(() =>  {


  })

  return(

    <div className='container1'>
      <div className='container'>

        <div className='capa'>
        </div>
          <button className='b-foto'>
            <img className='foto' src="/img/foto.png"/>
          </button>

        <form className='form'>
          <label className='descricao'>Nome</label>

          <input className='nome'/>

          <label className='descricao'>Cargo</label>

          <input className='cargo'/>

          <label className='descricao'>Telefone</label>

          <input className='tel'/>
        </form>

      </div>

    </div>
  );
}