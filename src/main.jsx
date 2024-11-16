import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Nav';
import Home from './components/Home';
import Menu from './components/Menu';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Home/>
    <Menu/>
  </StrictMode>,
)
