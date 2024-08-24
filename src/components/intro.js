
import "./intro.css"

export default function Intro() {

    return (
        <div id="introContainer">
            <div id="intro">
                <h2> Contact</h2>
                <ul>
                    <li><h3>Email</h3></li>
                    <li> - luka.koens@gmail.com</li>
                    <li><h3>Phone</h3></li>
                    <li> - 0279072766</li>
                </ul>
                <h2> Introduction </h2>
                <p>
                    I am a recent Computer Science graduate from the University of Auckland, 
                    passionate about 3D printing, design, machine learning, and drones.
                </p>
            </div>
            <iframe
                title="Geospatial Introduction"
                id="map"
                src="https://ion.cesium.com/stories/viewer/?id=d3ada2d2-9849-485b-a6e8-7d849bdd3d71"
                allowFullScreen={false}
                mozallowfullscreen="false"
                webkitallowfullscreen="false"
            ></iframe>
        </div>
    );
}

