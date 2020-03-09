import React from "react";
import SectionWrapper from "../../../global/SectionWrapper";
import SectionTitle from "../../../global/SectionTitle"
import Button from '../../../global/Button'


import Image5 from "../../../Backgrounds/5.jpg"

class PortfolioSection extends React.Component {
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
                functionality={this.setSectionActive}
                idSet="portfolio-section"
                className="section-wrapper"
                backgroundImage={Image5}
                transitionColor="#ff4242" color='black'
            >
                <SectionTitle color="white">Portfolio</SectionTitle>
                <Button borderColor="white" labelColor="white" transitionColor="#ff4242">Example</Button>

            </SectionWrapper>


        )
    }
}

export default PortfolioSection;
