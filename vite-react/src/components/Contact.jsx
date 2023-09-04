import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

// export default function Contact() {
//     return (
//         <div className="contact--container"> 
//             <ul>
//                 <li>
//                     <span className="github-icons">
//                         <img src={github} width="25px"></img>
//                     </span> 
//                 </li>
//                 <li>
//                     <span className="linkedin-icons">
//                         <img src={linkedin} width="25px"></img>
//                     </span> 
//                 </li>
//             </ul>
//         </div>
//     )
// }

export default function Contact() {
    // Define the URLs for the respective links
    const githubLink = "https://github.com/Parcode19";
    const linkedinLink = "https://linkedin.com/in/parth-patel-433703266";

    return (
        <div className="contact--container">
            <ul>
                <li>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <span className="github-icons">
                            <img src={github} width="25px" alt="GitHub"></img>
                        </span>
                    </a>
                </li>
                <li>
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                        <span className="linkedin-icons">
                            <img src={linkedin} width="25px" alt="LinkedIn"></img>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}