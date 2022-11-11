import React from 'react'
import Styles from './Header.module.css'
import {useNavigate} from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

  return (
    <nav className={Styles.navbar}>
            <ul className={Styles.list} style={{ marginBottom: 'none' }}>
                <li className={Styles.item}><a onClick={()=>navigate("/")}>Previsão do Tempo</a></li>
                <li className={Styles.item}><a onClick={()=>navigate("/previsao-brasil")}>Previsão do Tempo no Brasil</a></li>
            </ul>
        </nav>
  )
}

export default Footer