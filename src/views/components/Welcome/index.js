import React from "react";
import SectionWrapper from "../../../global/SectionWrapper";
import SectionTitle from "../../../global/SectionTitle"



import Image10 from "../../../Backgrounds/10.jpg"
import Image11 from "../../../Backgrounds/11.jpg"

class WelcomeSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionActive: false,
            paragraphStyle: {
                color: 'white',
                position: 'relative',
                marginTop: '20%',
                marginBottom: '40px'

            }
        };
    }

    render() {

        const { paragraphStyle } = this.state
        return (
            <div>

                <SectionWrapper
                    idSet="welcome-section"
                    backgroundImage={Image10} transitionColor="#42f5d1" color="black">
                    <SectionTitle color='white'>Welcome</SectionTitle>

                    <div style={paragraphStyle} className="welcome-statement" >Hi. I'm <span style={{ opacity: 1, color: "#42f5d1" }}>Erik Irgens</span>, and I'm a front-end engineer.

</div>
                    {this.props.children}
                </SectionWrapper>
            </div >


        )
    }
}

export default WelcomeSection;
