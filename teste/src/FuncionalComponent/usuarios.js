import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './usuarios.css';

export default function Lista(){

  const [nome, setNome] = useState([]);
  const [text, setText] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  
  
  useEffect(() =>  {

    const usuarios = async () => {
    
      axios
        .get('https://gist.githubusercontent.com/alencarlucas/4cd794e2e44bbe926ea4ab28da2fa3e7/raw/2c304035b03c3c5e2e708e4e82c49a42899e47ed/fiter.json')
        .then(response => {
          setNome(response.data)
        })
    }
    usuarios();

  }, [])

  const onSuggestHandler = (text) => {

    let filtro =[]

    if (text.length > 0){
      console.log(nome)
      filtro = nome.filter(nome1 => {
        const regex = new RegExp(`${text}`, "gi");
        return nome1.nome.match(regex)
      })
    }

    setSuggestions(filtro)
    setText(text);
    setSuggestions([]);
  }

  const onChangeHandler = (text) => {
  
    let filtro = []
    
    if (text.length > 0){
      filtro = nome.filter(nome1 => {
        const regex = new RegExp(`${text}`, "gi");
        return nome1.nome.match(regex)
      })
    }

    console.log('filtro', filtro)
    setSuggestions(filtro)
    // setText(text);
  }


  return(

    <div className='container1'>
      
      <div>
        <label htmlFor='nome'>Pesquisar</label>
        <input type="text" 
          className='input'
          placeholder='Pesquise o funcionário aqui ...'
          maxLength="40"
          onChange={e=>onChangeHandler(e.target.value)}
          onBlur={() =>{
            setTimeout(() =>{
              setSuggestions([])
            }, 100);
          }}
        />

        <div>
          {suggestions.map((suggestion, i) =>
            <div key={i} className="suggestion" 
              onClick={()=>onSuggestHandler(suggestion.nome)}>
              {suggestion.nome}
            </div>
          )}
        </div>

      </div>

      <div className='container2'>

        <div className='capa'>
        </div>

        <div className='container3'>
          <button className='b-foto'>
            <img className='foto' src="/img/foto.png"/>
          </button>

          <form className='form'>
            <label className='descricao'>Nome</label>

            <input className='nome'/>{text}

            <label className='descricao'>Cargo</label>

            <input className='cargo'/>

            <label className='descricao'>Telefone</label>

            <input className='tel'/>
          </form>

        </div>
        
      </div>

    </div>
  );
}