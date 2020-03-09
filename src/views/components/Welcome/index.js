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


    setSectionActive = () => {
        this.setState({ sectionActive: true })
    }
    render() {

        const { paragraphStyle, sectionActive } = this.state
        return (


            <SectionWrapper
                idSet="welcome-section"
                functionality={this.setSectionActive}
                backgroundImage={Image10} transitionColor="#42f5d1" color="black">
                <SectionTitle visibility={sectionActive} color='white'>Welcome</SectionTitle>

                <div style={paragraphStyle} className="welcome-statement" >Hi. I'm <span style={{ opacity: 1, color: "#42f5d1" }}>Erik Irgens</span>, and I'm a front-end engineer.

</div>
                {this.props.children}
            </SectionWrapper>



        )
    }
}

export default WelcomeSection;
