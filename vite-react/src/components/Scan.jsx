import qrCode from "../assets/frame.png"

export default function Scan() {
    return (
        <div className="qr-code--contact">
            <img src={qrCode} width="100px"></img>
        </div>
    )
}