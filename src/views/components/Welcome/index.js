import React from "react";
import SectionWrapper from "../../../global/SectionWrapper";
import SectionTitle from "../../../global/SectionTitle"
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

                <SectionWrapper transitionColor="#42f5d1" color="black">
                    <SectionTitle color="white">Welcome</SectionTitle>
                    <p style={{ color: 'white' }}>This site is currently a work in progress</p>
                    {this.props.children}
                </SectionWrapper>
            </div >


        )
    }
}

export default WelcomeSection;
