import React from "react";
import SectionWrapper from "../../../global/SectionWrapper";
import SectionTitle from "../../../global/SectionTitle"
import Button from '../../../global/Button'
import SocialButton from "./components/SocialButton"

import facebook from "../../../Icons/facebook.svg"
import github from "../../../Icons/github.svg"
import instagram from "../../../Icons/instagram.svg"
import linkedin from "../../../Icons/linkedin.svg"

import Image3 from "../../../Backgrounds/3.jpg"

class ContactSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionActive: false,
            socialButtonGridStyle: {
                position: 'absolute', bottom: '50px', opacity: 0, left: '50%', transform: 'translate(-50%, -50%)', transition: 'all 2s ease-in-out',
            }
        };
    }

    componentWillReceiveProps = () => {
        if (this.props.currentPos >= this.props.minRange && this.props.currentPos < this.props.maxRange && !this.state.sectionActive) {
            this.setSectionActive()
            console.log("ACTIVATED CONTACT")
        }

    }

    setSectionActive = () => {
        this.setState({
            sectionActive: true, socialButtonGridStyle: {
                ...this.state.socialButtonGridStyle,
                opacity: 1,
                transform: 'translate(-50%, 0%)',
            },
        })
    }

    render() {

        const { sectionActive, socialButtonGridStyle } = this.state
        return (


            <SectionWrapper
                sectionActive={this.state.sectionActive}
                idSet="contact-section"
                functionality={this.setSectionActive}
                className="section-wrapper test-last-section"
                backgroundImage={Image3}
                transitionColor="#80ffa2" color='black'
            >
                <SectionTitle direction='translate(0, 100px)' visibility={sectionActive} color="white">Contact</SectionTitle>
                <Button borderColor="white" labelColor="white" transitionColor="#80ffa2">Example</Button>



                <div className="social-button-section" style={socialButtonGridStyle}>
                    <SocialButton
                        functionality={'https://www.facebook.com/erik.irgens'}
                        borderColor="white" labelColor="white" transitionColor="#80ffa2"><img className="social-icon-image" style={{ width: '25px', color: 'white' }} src={facebook} alt="Link to facebook"></img></SocialButton>
                    <SocialButton
                        functionality={'https://www.instagram.com/erik_irgens/'}
                        borderColor="white" labelColor="white" transitionColor="#80ffa2"><img className="social-icon-image" style={{ width: '25px', color: 'white' }} src={instagram} alt="Link to instagram"></img></SocialButton>
                    <SocialButton
                        functionality={'https://www.linkedin.com/in/erik-t-irgens/'}
                        borderColor="white" labelColor="white" transitionColor="#80ffa2"><img className="social-icon-image" style={{ width: '25px', color: 'white' }} src={linkedin} alt="Link to linkedin"></img></SocialButton>
                    <SocialButton
                        functionality={'https://www.github.com/erik-t-irgens/'}
                        borderColor="white" labelColor="white" transitionColor="#80ffa2"><img className="social-icon-image" style={{ width: '25px', color: 'white' }} src={github} alt="Link to github"></img></SocialButton>
                </div>


            </SectionWrapper>


        )
    }
}

export default ContactSection;
