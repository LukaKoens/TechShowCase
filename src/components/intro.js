
import "./intro.css"

export default function Intro() {

    return (
        <div id="introContainer">
            <div id="intro">
                <h1>Luka Koens</h1>
                <h2> curriculum vitae</h2>
                <ul>
                    <li>Email - luka.koens@gmail.com</li>
                    <li>Mobile - 0279072766</li>
                </ul>
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

