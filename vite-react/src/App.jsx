import Header from "./components/Header"
import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"
import Scan from "./components/Scan"

export default function App() {
    return (
        <div className="box">
            <div className="app--container"> 
                <Header />
                <About />
                <Scan />
                <Contact />
            </div>
        </div>
    )
}