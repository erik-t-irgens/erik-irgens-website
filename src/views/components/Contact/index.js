import React from "react";
import SectionWrapper from "../../../global/SectionWrapper";
import SectionTitle from "../../../global/SectionTitle"
import Button from '../../../global/Button'

import Image3 from "../../../Backgrounds/3.jpg"

class ContactSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionActive: false
        };
    }

    setSectionActive = () => {
        this.setState({ sectionActive: true })
    }

    render() {
        return (


            <SectionWrapper
                idSet="contact-section"
                functionality={this.setSectionActive}
                className="section-wrapper test-last-section"
                backgroundImage={Image3}
                transitionColor="#80ffa2" color='black'
            >
                <SectionTitle color="white">Contact</SectionTitle>
                <Button borderColor="white" labelColor="white" transitionColor="#80ffa2">Example</Button>

            </SectionWrapper>


        )
    }
}

export default ContactSection;
