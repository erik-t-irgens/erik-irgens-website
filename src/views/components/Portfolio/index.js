import React from "react";
import SectionWrapper from "../../../global/SectionWrapper";
import SectionTitle from "../../../global/SectionTitle"
import Button from '../../../global/Button'

import ProjectDisplay from "./components/ProjectDisplay"
import ScrollTo from 'react-scroll-into-view'


import Image1 from "../../../Backgrounds/1.jpg"
import Image2 from "../../../Backgrounds/2.jpg"
import Image3 from "../../../Backgrounds/3.jpg"
import Image4 from "../../../Backgrounds/4.jpg"
import Image6 from "../../../Backgrounds/6.jpg"



import Image5 from "../../../Backgrounds/5.jpg"

class PortfolioSection extends React.Component {
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
                functionality={this.setSectionActive}
                idSet="portfolio-section"
                className="section-wrapper"
                backgroundImage={Image5}
                transitionColor="#ff4242" color='black'
            >
                <SectionTitle direction='translate(-100px, 0%)' visibility={sectionActive} color="white">Portfolio</SectionTitle>


                <ProjectDisplay
                    borderColor="white"
                    labelColor="white" transitionColor="#ff4242"
                    projectName='Word Visualizer'
                    projectImage={Image1}

                    projectDescription="An application intended to allow users to search for relevant words related to their initial search, intended to display this information with data visualization libraries and frameworks. This tool's intended audience are poets and composers, who may need a thesaurus."
                    githubLink='https://github.com/erik-t-irgens/word-visualizer'
                >
                </ProjectDisplay>
                <ProjectDisplay
                    borderColor="white"
                    labelColor="white" transitionColor="#ff4242"
                    projectName='Circles'
                    projectImage={Image2}


                    projectDescription='https://circlesapp.azurewebsites.net'
                    githubLink='https://github.com/erik-t-irgens/CIRCLES_MVC'
                >
                </ProjectDisplay>

                <ProjectDisplay
                    borderColor="white"
                    labelColor="white" transitionColor="#ff4242"
                    projectName='Pokedex'
                    projectImage={Image3}


                    projectDescription='http://erik-t-irgens.github.io/pokedex/'
                    githubLink='https://github.com/erik-t-irgens/pokedex'
                >
                </ProjectDisplay>

                <ProjectDisplay
                    borderColor="white"
                    labelColor="white" transitionColor="#ff4242"
                    projectName='Doctor Lookup'
                    projectImage={Image4}


                    projectDescription='https://erik-t-irgens.github.io/doctor-lookup'
                    githubLink='https://github.com/erik-t-irgens/doctor-lookup'
                >
                </ProjectDisplay>

                <ProjectDisplay
                    borderColor="white"
                    labelColor="white" transitionColor="#ff4242"
                    projectName='Pizza Delivery'
                    projectImage={Image6}

                    projectDescription='https://erik-t-irgens.github.io/pizza-delivery/'
                    githubLink='https://github.com/erik-t-irgens/pizza-delivery'
                >
                </ProjectDisplay>



                <ScrollTo alignToTop selector={`#blog-section`}>
                    <Button borderColor="white" labelColor="white" transitionColor="#ff4242">See My Blog</Button>
                </ScrollTo>

            </SectionWrapper>


        )
    }
}

export default PortfolioSection;
