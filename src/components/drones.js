import "./printing.css"
import GaussianViewer from "./gaussian"


export default function Printing() {
    return (
        <div id="contentContainer">
            <div id="gaussianViewerContainer">
                <GaussianViewer source="https://lukakoens.github.io/TechShowCase/printer_staged.splat" />
            </div>
            <div id="content">
                <h1>Drones and Geospatial Skills</h1>
                <p>
                    While working at Scion I was formally introduced to the industry standard Geospatial tools prodivded by Esri such as ArcGIS Pro.
                    

                </p>
                <p>
                    I am always interested in the hardware that operates a system and have interests in automotive electronics and other hobbyist electronics projects.
                    I have done a couple projects using arduino boards, and have taught myself the basics of using a ESP32 devkit board, and successfully implemented a simple LAN device controller.
                </p>
            </div>
        </div>
    )
}
