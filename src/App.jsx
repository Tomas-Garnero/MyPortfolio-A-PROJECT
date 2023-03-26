import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "./styles/Theme";
import { Header, Footer } from "./components";
import Home from "./pages/Home";
import './App.css'

function App() {

    return (
        <Theme>
            <BrowserRouter>
                <div className="App">
                    <Home />
                </div>
            </BrowserRouter>
        </Theme>
    )
}

export default App
