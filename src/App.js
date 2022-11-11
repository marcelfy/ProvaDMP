import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrevisaoDoTempo from './pages/PrevisaoDoTempo/PrevisaoDoTempo';
import PrevisaoDoTempoBrasil from './pages/PrevisaoDoTempoBrasil/PrevisaoDoTempoBrasil';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<PrevisaoDoTempo/>} > </Route>
          <Route path="/previsao-brasil" element={<PrevisaoDoTempoBrasil />} > </Route>
        </Routes>
        <Footer/>
    </Router >
  )
}

export default App;
