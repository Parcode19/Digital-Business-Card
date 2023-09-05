import place from "../assets/placeholder.png"

export default function About() {
    return (
        <div className="about--container"> 
            <div className="about--content">
                <h1>Parth Patel</h1>
                <h3>
                    Full stack developer 
                    <span className="location-icon">
                        <img src={place} width="15px"></img> UBC 
                    </span>
                </h3>
            </div>
        </div>
    )
}