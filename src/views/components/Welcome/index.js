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
            <SectionWrapper color="black">
                <SectionTitle color="white">Welcome</SectionTitle>
            </SectionWrapper>

        )
    }
}

export default WelcomeSection;
