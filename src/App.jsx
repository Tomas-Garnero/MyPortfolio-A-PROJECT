import { BrowserRouter } from "react-router-dom";
import Theme from "./styles/Theme";
import Home from "./pages/Home";

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

export default App;
