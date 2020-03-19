import React from "react";
import SectionWrapper from "../../../global/SectionWrapper";
import SectionTitle from "../../../global/SectionTitle"
import Button from '../../../global/Button'

import ProjectDisplay from "./components/ProjectDisplay"
import ScrollTo from 'react-scroll-into-view'

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
                    projectImage="https://raw.githubusercontent.com/erik-t-irgens/word-visualizer/master/public/favicon.ico"

                    iframeLink='https://erikirgens.com'
                    githubLink='https://github.com/erik-t-irgens/word-visualizer'
                >
                </ProjectDisplay>
                <ProjectDisplay
                    borderColor="white"
                    labelColor="white" transitionColor="#ff4242"
                    projectName='Circles'
                    projectImage="https://lh3.googleusercontent.com/proxy/hNK1c-TViPUxCUeL5rOZLBvDjoe6Pf-zso8EP5S6B7WNFQVu3O7YL89phLpWyV6l7z2ZzgLUI1wzt4PTuaZVBYY"

                    iframeLink='https://circlesapp.azurewebsites.net'
                    githubLink='https://github.com/erik-t-irgens/CIRCLES_MVC'
                >
                </ProjectDisplay>

                <ProjectDisplay
                    borderColor="white"
                    labelColor="white" transitionColor="#ff4242"
                    projectName='Pokedex'
                    projectImage="https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-08-03/410145857620_d507b9b2cd0b86329b48_512.png"

                    iframeLink='http://erik-t-irgens.github.io/pokedex/'
                    githubLink='https://github.com/erik-t-irgens/pokedex'
                >
                </ProjectDisplay>

                <ProjectDisplay
                    borderColor="white"
                    labelColor="white" transitionColor="#ff4242"
                    projectName='Doctor Lookup'
                    projectImage="https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-08-03/410145857620_d507b9b2cd0b86329b48_512.png"

                    iframeLink='https://erik-t-irgens.github.io/doctor-lookup'
                    githubLink='https://github.com/erik-t-irgens/doctor-lookup'
                >
                </ProjectDisplay>

                <ProjectDisplay
                    borderColor="white"
                    labelColor="white" transitionColor="#ff4242"
                    projectName='Pizza Delivery'
                    projectImage="https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-08-03/410145857620_d507b9b2cd0b86329b48_512.png"

                    iframeLink='https://erik-t-irgens.github.io/pizza-delivery/'
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
