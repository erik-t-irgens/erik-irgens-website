import React from "react";
import SectionWrapper from "../../../global/SectionWrapper";
import SectionTitle from "../../../global/SectionTitle"
import Button from '../../../global/Button'

import SkillSlider from "./components/SkillSlider"
import ScrollTo from 'react-scroll-into-view'

import Image11 from "../../../Backgrounds/11.jpg"
import ImageCarousel from "./components/ImageCarousel";

class AboutSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionActive: false
        };
    }

    componentWillReceiveProps = () => {
        if (this.props.currentPos >= this.props.minRange && this.props.currentPos < this.props.maxRange && !this.state.sectionActive) {
            this.setSectionActive()
            console.log("ACTIVATED ABOUT")
        }

    }

    setSectionActive = () => {
        this.setState({ sectionActive: true })
    }

    render() {

        const { sectionActive } = this.state
        return (


            <SectionWrapper
                sectionActive={this.state.sectionActive}
                idSet="about-section"
                className="section-wrapper about"
                functionality={this.setSectionActive}
                backgroundImage={Image11} transitionColor="#ffb619" color="black">

                <SectionTitle direction='translate(0, 20px)' visibility={sectionActive} color="white" >About</SectionTitle>


                <div className="about-section-content-grid">

                    <ImageCarousel visibility={sectionActive}></ImageCarousel>

                    <div className="about-skills-column">
                        <SkillSlider animationlength={.9} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="90%"
                            themeColor="#ffb619"
                            color='white' >React</SkillSlider>

                        <SkillSlider animationlength={.8} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="80%"
                            themeColor="#ffb619"
                            color='white' >CSS</SkillSlider>

                        <SkillSlider animationlength={.7} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="82%"
                            themeColor="#ffb619"
                            color='white' >JavaScript</SkillSlider>

                        <SkillSlider animationlength={.6} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="65%"
                            themeColor="#ffb619"
                            color='white' >Node.JS</SkillSlider>

                        <SkillSlider animationlength={.7} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="75%"
                            themeColor="#ffb619"
                            color='white' >C#/.NET</SkillSlider>

                        <SkillSlider animationlength={.8} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="50%"
                            themeColor="#ffb619"
                            color='white' >MySQL</SkillSlider>

                        <SkillSlider animationlength={.9} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="53%"
                            themeColor="#ffb619"
                            color='white' >AWS</SkillSlider>



                    </div>

                </div>

                <ScrollTo alignToTop selector={`#portfolio-section`}>
                    <Button borderColor="white" labelColor="white" transitionColor="#ffb619">See my Portfolio</Button></ScrollTo>


                {this.props.children}
            </SectionWrapper>



        )
    }
}

export default AboutSection;
