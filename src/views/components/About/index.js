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

    render() {
        return (
            <div>

                <SectionWrapper
                    idSet="about-section"
                    backgroundImage={Image11} transitionColor="#ffb619" color="black">
                    <SectionTitle color="white" >About</SectionTitle>


                    <div className="about-section-content-grid">
                        <div className="about-skills-column">
                            <SkillSlider backdropcolor="#161616" width="50%" themeColor="#ffb619" color='white' >CSS</SkillSlider>
                            <SkillSlider backdropcolor="#161616" width="20%" themeColor="#ffb619" color='white' >JavaScript</SkillSlider>
                            <SkillSlider backdropcolor="#161616" width="50%" themeColor="#ffb619" color='white' >C#/.NET</SkillSlider>
                            <SkillSlider backdropcolor="#161616" width="20%" themeColor="#ffb619" color='white' >React</SkillSlider>
                            <SkillSlider backdropcolor="#161616" width="50%" themeColor="#ffb619" color='white' >Node.JS</SkillSlider>
                            <SkillSlider backdropcolor="#161616" width="20%" themeColor="#ffb619" color='white' >JavaScript</SkillSlider>
                            <SkillSlider backdropcolor="#161616" width="50%" themeColor="#ffb619" color='white' >CSS</SkillSlider>
                            <SkillSlider backdropcolor="#161616" width="20%" themeColor="#ffb619" color='white' >JavaScript</SkillSlider>
                            <SkillSlider backdropcolor="#161616" width="50%" themeColor="#ffb619" color='white' >C#/.NET</SkillSlider>
                            <SkillSlider backdropcolor="#161616" width="20%" themeColor="#ffb619" color='white' >React</SkillSlider>
                            <SkillSlider backdropcolor="#161616" width="50%" themeColor="#ffb619" color='white' >Node.JS</SkillSlider>
                            <SkillSlider backdropcolor="#161616" width="20%" themeColor="#ffb619" color='white' >JavaScript</SkillSlider>
                        </div>

                    </div>

                    <Button borderColor="white" labelColor="white" transitionColor="#ffb619">Example</Button>


                    {this.props.children}
                </SectionWrapper>
            </div >


        )
    }
}

export default AboutSection;
