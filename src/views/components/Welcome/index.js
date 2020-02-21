import React from "react";
import SectionWrapper from "../../../global/SectionWrapper";
import SectionTitle from "../../../global/SectionTitle"

import Image1 from "../../../Backgrounds/1.jpg"
import Image2 from "../../../Backgrounds/2.jpg"
import Image3 from "../../../Backgrounds/3.jpg"
import Image4 from "../../../Backgrounds/4.jpg"
import Image5 from "../../../Backgrounds/5.jpg"
import Image6 from "../../../Backgrounds/6.jpg"
import Image7 from "../../../Backgrounds/7.jpg"
import Image8 from "../../../Backgrounds/8.jpg"
import Image9 from "../../../Backgrounds/9.jpg"
import Image10 from "../../../Backgrounds/10.jpg"
import Image11 from "../../../Backgrounds/11.jpg"

class WelcomeSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionActive: false
        };
    }

    render() {
        return (
            <div>

                <SectionWrapper
                    idSet="welcome-section"
                    backgroundImage={Image8} transitionColor="#42f5d1" color="black">
                    <SectionTitle color="white" >Welcome</SectionTitle>
                    <div className="background-element" style={{ backgroundColor: 'black', opacity: .7, position: 'absolute', zIndex: -1, height: '80px', width: "100%" }}>

                    </div>
                    <h1 style={{ color: "white", fontFamily: "'Major Mono Display', monospace" }}>
                        I'm <span style={{ opacity: 1, color: "#42f5d1" }}>Erik Irgens</span>, and I'm a front-end engineer.

                    </h1>


                    {this.props.children}
                </SectionWrapper>
            </div >


        )
    }
}

export default WelcomeSection;
