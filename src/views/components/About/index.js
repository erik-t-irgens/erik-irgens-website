import React from "react";
import SectionWrapper from "../../../global/SectionWrapper";
import SectionTitle from "../../../global/SectionTitle"
import Button from '../../../global/Button'

import Image11 from "../../../Backgrounds/11.jpg"

class AboutSection extends React.Component {
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
                    idSet="about-section"
                    backgroundImage={Image11} transitionColor="#ffb619" color="black">
                    <SectionTitle color="white" >About</SectionTitle>

                    <Button borderColor="white" labelColor="white" transitionColor="#ffb619">Example</Button>


                    {this.props.children}
                </SectionWrapper>
            </div >


        )
    }
}

export default AboutSection;
