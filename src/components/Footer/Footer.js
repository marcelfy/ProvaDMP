import React from 'react'
import Styles from './Footer.module.css'
import {useNavigate} from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

  return (
    <nav className={Styles.navbar}>
            <ul className={Styles.list} style={{ marginBottom: 'none' }}>
               
            </ul>
        </nav>
  )
}

export default Header