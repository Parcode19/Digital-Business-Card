import Header from "./components/Header"
import "./App.css"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="box">
            <div className="app--container"> 
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    )
}