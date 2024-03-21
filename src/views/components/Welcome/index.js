import React from "react";
import SectionWrapper from "../../../global/SectionWrapper";
import SectionTitle from "../../../global/SectionTitle"
import ScrollTo from 'react-scroll-into-view'
import Button from '../../../global/Button'
import erik from "../../../Backgrounds/erik.jpeg"
import erik_transparent from "../../../Backgrounds/erik_transparent.PNG"
import Image10 from "../../../Backgrounds/10.jpg"
import GitHubProject from "../Portfolio/components/GitHubProject";

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
                // position: 'relative',
                // marginTop: '20vh',
                // marginBottom: '100px',
                opacity: 0,
                // transform: 'translate(0, 100px)',
                transition: 'all 1.5s ease-in-out',

            },
            buttonStyle: {
                opacity: 0,
                // transform: 'translate(0, 5px)',
                // transition: 'all .2s ease-in-out',
            }


        };
    }

    componentDidMount = () => {
        setTimeout(() => { this.setSectionActive() }, 10);
    }



    componentWillReceiveProps = () => {
        if (this.props.currentPos >= this.props.minRange && this.props.currentPos < this.props.maxRange && !this.state.sectionActive) {
            this.setSectionActive()
            // console.log("ACTIVATED WELCOME")
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
        }, 100)


        setTimeout(() => {
            this.setState({
                buttonStyle: {
                    ...this.state.buttonStyle,

                    opacity: 1,
                    transform: 'translate(0, 0)',
                }
            })
        }, 200)

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

                <SectionTitle direction='translate(0, -20px)' visibility={sectionActive} id={"welcome-title"} color='white'>Welcome</SectionTitle>
                {/* 
                <div className="profile-picture background-profile" style={{
                    backgroundImage: `url(${erik})`, width: "20vh", height: '20vh', backgroundPosition: "",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 'cover',
                }}></div> */}

                <div style={paragraphStyle} className="erikProfileCard"><div className="welcomePhoto" style={{ backgroundImage: `url(${erik_transparent})` }}></div>
                    <h3 style={paragraphStyle} className="welcomeContributor">erik irgens</h3>
                    <h4 className="welcomeRelationship">director of teaching and curriculum at epicodus</h4></div>



                <div style={paragraphStyle} className="welcome-statement" >
                    Hi. i'm <span style={spanStyle}>erik irgens</span>. <br></br>i'm a software engineer, and composer.
                </div>
                {/* <div style={buttonStyle}> */}
                <ScrollTo alignToTop selector={`#about-section`}>
                    <Button sectionActive={sectionActive} className='button' borderColor="white" labelColor="white" transitionColor="#42f5d1">Learn More</Button>
                </ScrollTo>

            </SectionWrapper>

        )
    }
}

export default WelcomeSection;
