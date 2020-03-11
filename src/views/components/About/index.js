import React from "react";
import SectionWrapper from "../../../global/SectionWrapper";
import SectionTitle from "../../../global/SectionTitle"
import Button from '../../../global/Button'

import SkillSlider from "./components/SkillSlider"

import Image11 from "../../../Backgrounds/11.jpg"

class AboutSection extends React.Component {
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

        const { sectionActive } = this.state
        return (


            <SectionWrapper
                idSet="about-section"
                className="section-wrapper about"
                functionality={this.setSectionActive}
                backgroundImage={Image11} transitionColor="#ffb619" color="black">

                <SectionTitle direction='translate(0, 20px)' visibility={sectionActive} color="white" >About</SectionTitle>


                <div className="about-section-content-grid">
                    <div className='about-image-carousel-column'>
                        <div className='about-image-carousel'></div>
                    </div>
                    <div className="about-skills-column">
                        <SkillSlider visibility={sectionActive}
                            backdropcolor="#161616"
                            width="90%"
                            themeColor="#ffb619"
                            color='white' >React</SkillSlider>

                        <SkillSlider visibility={sectionActive}
                            backdropcolor="#161616"
                            width="80%"
                            themeColor="#ffb619"
                            color='white' >CSS</SkillSlider>

                        <SkillSlider visibility={sectionActive}
                            backdropcolor="#161616"
                            width="82%"
                            themeColor="#ffb619"
                            color='white' >JavaScript</SkillSlider>

                        <SkillSlider visibility={sectionActive}
                            backdropcolor="#161616"
                            width="65%"
                            themeColor="#ffb619"
                            color='white' >Node.JS</SkillSlider>

                        <SkillSlider visibility={sectionActive}
                            backdropcolor="#161616"
                            width="75%"
                            themeColor="#ffb619"
                            color='white' >C#/.NET</SkillSlider>

                        <SkillSlider visibility={sectionActive}
                            backdropcolor="#161616"
                            width="50%"
                            themeColor="#ffb619"
                            color='white' >MySQL</SkillSlider>

                        <SkillSlider visibility={sectionActive}
                            backdropcolor="#161616"
                            width="53%"
                            themeColor="#ffb619"
                            color='white' >AWS Services</SkillSlider>



                    </div>

                </div>

                <Button borderColor="white" labelColor="white" transitionColor="#ffb619">Example</Button>


                {this.props.children}
            </SectionWrapper>



        )
    }
}

export default AboutSection;
