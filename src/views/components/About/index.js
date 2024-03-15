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

                    <ImageCarousel visibility={sectionActive} id='about-carousel'>
                        <div id="slide-1">
                            Testing Slide 1
                        </div>
                        <div id="slide-2">
                            Maybe a little bit about my music
                        </div>
                        <div id="slide-3">

                            <img className="carousel-img" alt="Erik Irgens, enlarged and in black and white." src="https://lh3.googleusercontent.com/hnoqcRWbwhX2R_G43WUrzH3I8IkaaKqL1sRe8O-E9SgTWvh1LrM9OUK7DKJRhFC-hUIGKNNUEX5Opzl4SNreTlz4caQxzMb369QBqk0DOUs_dx_c9XqgRcclfCeyXcFMl0u4TsU5OlCoWcX2e4bLtBGPkNgTFaAG6s5GjIUmPNDEGV3u4XV2W91eKbx1ehtY5jwpKMjinIA_FPguUNhg08vdLUN7t7AgGzlUrrvkl11TBzlX-OwQCYv5AGif6SR-np5dgoQlCp5ph97NehbUjnUGS-hShZxIYKMAkPXQT4sVSMmJw3q9k0Fwc4gwIO_8E_7LvdH8CXWYfKaV5WGcRZfhHJAOF7VpAn3JZVwWYp_83ewHrzeXecuVwPnK-UzLepZuokDu8Ux1Zns0FkaF8Ds3FYYdIWVHc1u0bU3fLR4wzw3evrI1PW0JQuhOK1B7QERe1sUybrc9CbjyNKdWOIG3n6rK2BKoxjRjaVwVWEN6ny4SSb_KRxVmnp6PzpmWkeUkp43iPrvvLxwtJgqeL_45M0myXpfBfWCfZUpMdpKMtBpDfjlksOd44_JpAUMGq4k_582nkoGVEdxuOdpgB1AWiTHaPzBGel_8Rgun258mGaSWSWVEMAvbNW08SAO29IgRVuk5A6knOk1h0T756qhs0MGSAjt6LJ8z4hGm2gbDD3Wtejfwzbe4Sbkzdtw1AT93nDCFlYr-lczNV1pErq4IphQRP_Ife69_oomeUpFJxUxLNg=w723-h963-no"></img>
                        </div>
                        <div id="slide-4">
                            4
                        </div>
                        <div id="slide-5">
                            5
                        </div>
                    </ImageCarousel>

                    <div className="about-skills-column">
                        <SkillSlider animationlength={.1} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="90%"
                            themeColor="#ffb619"
                            color='white' >React</SkillSlider>

                        <SkillSlider animationlength={.1} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="80%"
                            themeColor="#ffb619"
                            color='white' >CSS</SkillSlider>

                        <SkillSlider animationlength={.1} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="82%"
                            themeColor="#ffb619"
                            color='white' >JavaScript</SkillSlider>

                        <SkillSlider animationlength={.1} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="65%"
                            themeColor="#ffb619"
                            color='white' >Node.JS</SkillSlider>

                        <SkillSlider animationlength={.1} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="75%"
                            themeColor="#ffb619"
                            color='white' >C#/.NET</SkillSlider>

                        <SkillSlider animationlength={.1} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="50%"
                            themeColor="#ffb619"
                            color='white' >MySQL</SkillSlider>

                        <SkillSlider animationlength={.1} visibility={sectionActive}
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
