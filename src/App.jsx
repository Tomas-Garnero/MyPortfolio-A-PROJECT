import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "./styles/Theme";
import { Header, Hero, MyProjects, Technologies, TimeLine, Acomplishments, Footer } from "./components";
import './App.css'

function App() {

    return (
        <Theme>
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Hero />
                    <MyProjects />
                    <Technologies />
                    <TimeLine />
                    <Acomplishments />
                    <Footer />
                </div>
            </BrowserRouter>
        </Theme>
    )
}

export default App
