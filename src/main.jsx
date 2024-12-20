import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/login/login.jsx'
import Register from './pages/register/register.jsx';
import './main.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <App />
)
