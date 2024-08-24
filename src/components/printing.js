import "./printing.css"
import GaussianViewer from "./gaussian"
import printerSplat from "../assets/Printer.splat"


export default function Printing() {

    console.log(printerSplat);
    return (
        <div id="contentContainer">
            <div id="gaussianViewerContainer">
                <GaussianViewer source={printerSplat} />
            </div>
            <div id="content">
                <h2>3D Printing & Modeling</h2>
                <p>
                    I have been teaching myself the usage and concepts needed for 3d Printing over the last couple years, 
                    having printed everything from Architectural models to a car spoiler and composite molds.
                </p>
                <p>
                    3D gaussian splats are being used to display this model of my printer, it was captured on a mid range android phone.
                </p>
            </div>
        </div>
    )
}
