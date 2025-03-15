import { Routes, Route } from 'react-router'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import CreateGame from './components/create-game/CreateGame'
import CatalogGame from './components/catalog-game/CatalogGame'
import DetailsGame from './components/details-game/DetailsGame'
import EditGame from './components/edit-game/EditGame'
import './App.css'

function App() {
    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/games/" element={<CatalogGame />} />
                    <Route path="/games/create" element={<CreateGame />} />
                    <Route path="/games/:gameId/edit-game" element={<EditGame />} />
                    <Route path="/games/:gameId/details" element={<DetailsGame />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
               </Routes>
             </main>
        </div>
    )
}

export default App
