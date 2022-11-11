import React, { useState } from 'react'
import Styles from './PrevisaoDoTempo.module.css'
import { Form, message, Button, Input } from 'antd'
import CardDadosTempo from '../../components/CardDadosTempo/CardDadosTempo'

const PrevisaoDoTempo = () => {

  const [cidade, setCidade] = useState()

  const onFinish = (values) => {
    const API_KEY = '4d8fb5b93d4af21d66a2948710284366'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${values.cidade}&appid=${API_KEY}&units=metric&lang=pt`
    fetch(url).then((resp) => resp.json())
      .then((data) => {
        if(data.cod === "404"){
          message.error("Cidade não encontrada ou inválida!")
          return;
        }
        console.log(data);
        const { name, sys, weather, main, wind } = data
        console.log(data);
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`
        setCidade(<CardDadosTempo icon={icon} temperatura={main.temp} umidade={main.humidity} sensacaoTermica={main.feels_like} 
          pais={sys.country} cidade={name} descricao={weather[0]?.description} pressao={main.pressure} vento={wind}/>)
      })

  }

  const onFinishFailed = () => {
    message.error("Preencha o formulário corretamente")
  }

  return (
    <div className={Styles.container}>
      <h2>Previsão do Tempo</h2>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className={Styles.form}
      >
        <Form.Item
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          label="Cidade"
          name="cidade"
          rules={[{ required: true, message: 'Digite o nome da cidade' }]}
        >
          <Input placeholder='Digite o nome da cidade' />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Pesquisar
          </Button>
        </Form.Item>
      </Form>
      {cidade}
    </div>
  )
}

export default PrevisaoDoTempo