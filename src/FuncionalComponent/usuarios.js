import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './usuarios.css';

export default function Lista(){

  // --------------------------SETANDO AS VARIÁVEIS---------------------------

  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // --------------------------CONSUMINDO API---------------------------
  
  const getUsuarios = async () => {
    axios
      .get('https://gist.githubusercontent.com/alencarlucas/4cd794e2e44bbe926ea4ab28da2fa3e7/raw/2c304035b03c3c5e2e708e4e82c49a42899e47ed/fiter.json')
      .then(response => {
        setResults(response.data)

        // --------------------TESTE COM MAIS CARDS------------------------

        // setResults([
        //   {nome:"Jessica", cargo:"Dev", telefone:"82998000944"},
        //   {nome:"Valter", cargo:"Dev", telefone:"82996875791"},
        //   {nome:"Duda", cargo:"Dev", telefone:"82996875454"}
        // ])
      })
  }

  // --------------------------RODANDO---------------------------

  useEffect(() =>  {
    
    getUsuarios();
    
  }, [])

  // --------------------------SUGESTÃO DA PESQUISA---------------------------

  const onSuggestHandler = (text) => {

    let filtro =[]

    if (text.length > 0){
      console.log(results)
      filtro = results.filter(item => {
        const regex = new RegExp(`${text}`, "gi");
        return item.nome.match(regex)
        
      })
      
    }
    setSuggestions(filtro)
    setResults(filtro);
    setSuggestions([]);
  }

  // --------------------------FILTRO---------------------------

  const onChangeHandler = (text) => {
  
    let filtro = []
    
    if (text.length > 0){
      filtro = results.filter(item => {
        const regex = new RegExp(`${text}`, "gi");
        return item.nome.match(regex)
      })
    }

    else{
      getUsuarios()
    }
    console.log('filtro', filtro)
    setSuggestions(filtro)
  }

  // --------------------------JSX---------------------------

  return(

    <div className='container1'>
      
      <div className='container2'>
        <label htmlFor='nome' className='pesquisa'>Pesquisar nome</label>

        <div className='suggestion'>
          <input type="text" 
            className='input'
            maxLength="50"
            onChange={e=>onChangeHandler(e.target.value)}
            onBlur={() =>{
              setTimeout(() =>{
                setSuggestions([])
              }, 100);
            }}
          />

          <div className="suggestion"  id='scroll'>
            {suggestions.map((suggestion, i) =>
              <div key={i} className="suggestion" 
                onClick={()=>onSuggestHandler(suggestion.nome)}>
                {suggestion.nome}
              </div>
            )}
          </div>

        </div>

      </div>

      <div className='card'>

        {results.map((item) => 
          
          <div  key={item.telefone}>
            <div className='etiqueta'>
              <button className='b-foto'>
                <img className='foto' src={item.foto || '/img/foto.png'} alt="foto do usuario"/>
              </button>
            </div>

            <div className='container3'>
              <div className='container4'>
                <div className='form'>

                  <div className='descricao'>
                    <img className='icones' src="/img/nome2.png" alt="nome"/>
                    <img className='icones' src="/img/cargo.png" alt="cargo"/>
                    <img className='icones' src="/img/telefone.png" alt="telefone"/>
                  </div>

                  <div className='resultado'>
                    <p className='resultado'>{item.nome}</p>
                    <p className='resultado'>{item.cargo}</p>
                    <p className='resultado'>{item.telefone}</p>
                  </div>

                </div>
              </div> 
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
