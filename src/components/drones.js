import "./drones.css"
import homeImage from "../assets/DJI_0588.JPG"


export default function Drone() {
    return (
        <div id="contentContainer">

            <div id="content">
                <h2> Drone Photography</h2>
                <p>
                    After getting a DJI mini 2 SE, I have performed a number of flights over some local Northshore parks, Caputring a lot of imagery of the eco systems present. 
                </p>
                <p>
                    I have been sharing the images I've captured with a local conservation organisaiton (<a href="https://www.pfk.org.nz/"> PFK </a>), and working on developing the tools to use the images captured in GIS workflows and utilse the information captured
                </p>
            </div>
            <img src={homeImage} alt="Kauri Point" />
        </div>
    )
}
