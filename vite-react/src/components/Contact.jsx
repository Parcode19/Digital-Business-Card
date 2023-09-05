import github from "../assets/github (3).png"
import linkedin from "../assets/linkedin (2).png"
import mail from "../assets/gmail (1).png"
import call from "../assets/emergency-call.png"
import insta from "../assets/instagram (1).png"

export default function Contact() {
    const githubLink = "https://github.com/Parcode19";
    const linkedinLink = "https://linkedin.com/in/parth-patel-433703266";
    const instagram = "https://www.instagram.com/";
    const number = "+1 (236) 995-2972";
    const gmail = "parthrp15@gmail.com"

    return (
        <div className="contact--container"> 
            <div className="contact--content">
                <a href={githubLink} className="github-icon">
                    <img src={github} width="25px"></img>
                </a> 
            </div>
            <div className="contact--content">
                <a href={linkedinLink}  className="linkedin-icon">
                    <img src={linkedin} width="25px"></img>
                </a> 
            </div>
            <div className="contact--content">
                <a href={gmail}  className="mail-icon">
                    <img src={mail} width="25px"></img>
                </a> 
            </div>
            <div className="contact--content">
                <a href={number}  className="call-icon">
                    <img src={call} width="25px"></img>
                </a> 
            </div>
            <div className="contact--content">
                <a href={instagram}  className="insta-icon">
                    <img src={insta} width="25px"></img> 
                </a> 
            </div>
        </div>
    )
}