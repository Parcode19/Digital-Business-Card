import Header from "./components/Header"
import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"

export default function App() {
    return (
        <div className="box">
            <div className="app--container"> 
                <Header />
                <About />
                <Contact />
            </div>
        </div>
    )
}