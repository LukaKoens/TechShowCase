import "./home.css"
import homeImage from "../assets/DJI_0015.JPG"

export default function Home() {

    return (
        <div id="introContainer">
            <div id="title">
                <h1>Luka Koens</h1>
                <h2> curriculum vitae</h2>
            </div>
            <img src={homeImage} alt="My Image" />
        </div>
    );
}

