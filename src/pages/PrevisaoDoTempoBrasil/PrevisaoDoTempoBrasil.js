import React, { useState}from 'react'
import CardDadosTempo from '../../components/CardDadosTempo/CardDadosTempo';
import Styles from './PrevisaoDoTempoBrasil.module.css'
import {Button} from 'antd'

const PrevisaoDoTempoBrasil = () => {

  const [cidade, setCidade] = useState()
  const [visible, setVisible] = useState(true)
  const estados = [
    { "capital": "Rio Branco" },
    { "capital": "Maceio" },
    { "capital": "Macapa" },
    { "capital": "Manaus" },
    { "capital": "Salvador" },
    { "capital": "Fortaleza	" },
    { "capital": "Brasilia" },
    { "capital": "Vitoria " },
    { "capital": "Goiânia" },
    { "capital": "Sao Luis" },
    { "capital": "Cuiaba" },
    { "capital": "Campo Grande" },
    { "capital": "Belo Horizonte" },
    { "capital": "Belem" },
    { "capital": "Joao Pessoa"},
    { "capital": "Curitiba" },
    { "capital": "Recife" },
    { "capital": "Teresina" },
    { "capital": "Rio de Janeiro" },
    { "capital": "Natal" },
    { "capital": "Porto Alegre" },
    { "capital": "Porto Velho" },
    { "capital": "Boa Vista" },
    { "capital": "Florianopolis" },
    { "capital": "Sao Paulo	" },
    { "capital": "Aracaju	" },
    { "capital": "Palmas" },
  ]

  function gerarNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function start ()  {
      setVisible(false)
      const API_KEY = '4d8fb5b93d4af21d66a2948710284366'
      const cidade = estados[gerarNumeroAleatorio(0, estados.length)].capital
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt`
      fetch(url).then((resp) => resp.json())
        .then((data) => {
          const { name, sys, weather, main, wind } = data
          const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`
          setCidade(<CardDadosTempo icon={icon} temperatura={main.temp} umidade={main.humidity} sensacaoTermica={main.feels_like} 
            pais={sys.country} cidade={name} descricao={weather[0]?.description} pressao={main.pressure} vento={wind}/>)
        })
  }

   function sortear(){
    setInterval(() => {
       start()
    }, 5000);
  }


  return (
    <div className={Styles.container}>
      <h2>Previsão do tempo Para o Brasil</h2>
      {cidade}
      {visible? <h3>Clique no botão para ver a previsão do tempo em todas as capitais do Brasil</h3>: "" }
      <Button onClick={sortear} type='primary'>Começar</Button>      
    </div>
  )
}

export default PrevisaoDoTempoBrasil