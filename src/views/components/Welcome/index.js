import React from "react";
import SectionWrapper from "../../../global/SectionWrapper";
import SectionTitle from "../../../global/SectionTitle"
import ScrollTo from 'react-scroll-into-view'
import Button from '../../../global/Button'

import Image10 from "../../../Backgrounds/10.jpg"

class WelcomeSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionActive: false,
            spanStyle: {
                color: 'white',
                opacity: 0,
                // transform: 'translate(0, 100px)',
                textShadow: '2px 2px 2px black'

            },
            paragraphStyle: {
                color: 'black',
                position: 'relative',
                marginTop: '20vh',
                marginBottom: '40px',
                opacity: 0,
                // transform: 'translate(0, 100px)',
                transition: 'all 2s ease-in-out',

            },
            buttonStyle: {
                opacity: 0,
                transform: 'translate(0, 50px)',
                transition: 'all 2s ease-in-out',
            }


        };
    }


    componentWillReceiveProps = () => {
        if (this.props.currentPos <= this.props.minRange && this.props.currentPos < this.props.maxRange) {
            this.setSectionActive()
            console.log("ACTIVATED")
        }

    }

    setSectionActive = () => {
        this.setState({ sectionActive: true })

        setTimeout(() => {
            this.setState({
                paragraphStyle: {
                    ...this.state.paragraphStyle,
                    opacity: 1,
                    // transform: 'translate(0%, 0%)',
                    color: 'white'
                },
                spanStyle: {
                    ...this.state.spanStyle,
                    opacity: 1,
                    transform: 'translate(0, 0)',
                    color: "#42f5d1"
                }
            })
        }, 1000)


        setTimeout(() => {
            this.setState({
                buttonStyle: {
                    ...this.state.buttonStyle,

                    opacity: 1,
                    transform: 'translate(0, 0)',
                }
            })
        }, 2000)

    }



    render() {

        const { paragraphStyle, sectionActive, spanStyle, buttonStyle } = this.state
        return (


            <SectionWrapper
                sectionActive={this.state.sectionActive}
                className="section-wrapper welcome"
                idSet="welcome-section"
                functionality={this.setSectionActive}
                backgroundImage={Image10} transitionColor="#42f5d1" color="black" >
                <SectionTitle direction='translate(0, -20px)' visibility={sectionActive} color='white'>Welcome</SectionTitle>

                <div style={paragraphStyle} className="welcome-statement" >
                    Hi. I'm <span style={spanStyle}>Erik Irgens</span>, and I'm a front-end engineer.
</div>
                <div style={buttonStyle}>
                    <ScrollTo alignToTop selector={`#about-section`}>
                        <Button borderColor="white" labelColor="white" transitionColor="#42f5d1">Learn More</Button>
                    </ScrollTo>
                </div>
            </SectionWrapper>

        )
    }
}

export default WelcomeSection;
