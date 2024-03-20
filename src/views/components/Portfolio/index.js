import React from "react";
import SectionWrapper from "../../../global/SectionWrapper";
import SectionTitle from "../../../global/SectionTitle"
import Button from '../../../global/Button'



import erikIrgensWebImage from '.././../../Backgrounds/erik-irgens-website-image.PNG'
import wordVisualizationImage from '.././../../Backgrounds/word-visualizer-image.PNG'

import ImageCarousel from "../About/components/ImageCarousel";

import ProjectDisplay from "./components/ProjectDisplay"
import ScrollTo from 'react-scroll-into-view'


// import Image1 from "../../../Backgrounds/1.jpg"
// import Image2 from "../../../Backgrounds/2.jpg"
// import Image3 from "../../../Backgrounds/3.jpg"
// import Image4 from "../../../Backgrounds/4.jpg"
// import Image6 from "../../../Backgrounds/6.jpg"



import Image5 from "../../../Backgrounds/5.jpg"
import GitHubProject from "./components/GitHubProject";

class PortfolioSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionActive: false,
            softwareActive: true,
            musicActive: false,
        };
    }

    componentWillReceiveProps = () => {
        if (this.props.currentPos >= this.props.minRange && this.props.currentPos < this.props.maxRange && !this.state.sectionActive) {
            this.setSectionActive()
            // console.log("ACTIVATED PORTFOLIO")
        }

    }

    handleClickMusic = () => {
        this.setState({
            softwareActive: false,
            musicActive: true
        })
    }
    handleClickGithub = () => {
        this.setState({
            softwareActive: true,
            musicActive: false
        })
    }

    setSectionActive = () => {
        this.setState({ sectionActive: true })
    }

    handleMusicBorder = () => {
        if (this.state.musicActive) {
            return 'button-border-active'
        } else {
            return 'button-border-disabled'
        }
    }

    handleSoftwareBorder = () => {
        if (this.state.softwareActive) {
            return 'button-border-active'
        } else {
            return 'button-border-disabled'
        }
    }

    render() {
        const { sectionActive, softwareActive, musicActive } = this.state
        return (


            <SectionWrapper
                sectionActive={this.state.sectionActive}
                functionality={this.setSectionActive}
                idSet="portfolio-section"
                className="section-wrapper"
                backgroundImage={Image5}
                transitionColor="#ff4242" color='black'
            >
                <SectionTitle direction='translate(-100px, 0%)' visibility={sectionActive} color="white">Portfolio</SectionTitle>

                <div className='button-selection-grid'>
                    <div onClick={this.handleClickGithub} className='software-portfolio-button'>
                        <SectionTitle direction='translate (-10px, 0%)' visibility={sectionActive} color='white' >Software
                            <div className={this.handleSoftwareBorder()}></div></SectionTitle>

                    </div>
                    <div onClick={this.handleClickMusic} className='music-portfolio-button'>
                        <SectionTitle direction='translate (-10px, 0%)' visibility={sectionActive} color='white' >Music
                            <div className={this.handleMusicBorder()}></div>
                        </SectionTitle>

                    </div>

                </div>

                <ImageCarousel id='portfolio-carousel' visibility={sectionActive}>

                    {/* github projects */}


                    <>
                        {/* <ProjectDisplay

                                borderColor="white"
                                labelColor="white" transitionColor="#ff4242"
                                projectName='Word Visualizer'
                                projectMedia={wordVisualizationImage}
                                mediaType='github'
                                projectDescription="The project displays pertinent information about a user-provided term. This term is compared to a respository provided by DataMuse, and then returns information about the term's synonyms, antonyms, related words, and rhymes. These terms are correlated by their 'rating', and there are various data visualizations that can be viewed about terms, categories, and definitions by clicking on nodes within the node graph. This application came after my experience working at Wheelhouse DMG as a contractor creating data visualization solutions. To practice and hone what I learned at Wheelhouse, this project utilizes technologies such as Sigma.js, React-vis, and Semantic-UI. "
                                githubLink='https://github.com/erik-t-irgens/word-visualizer'
                            >
                            </ProjectDisplay>
                            <ProjectDisplay

                                borderColor="white"
                                labelColor="white" transitionColor="#ff4242"
                                projectName='My Website'
                                mediaType='github'
                                projectMedia={erikIrgensWebImage}
                                projectDescription="Here is the code that builds this website! The website itself was a challenge to create all visual elements from scratch. Buttons. Section. This project display component! Feel free to peruse my code. There is always room for improvement, and I work on this daily."
                                githubLink='https://github.com/erik-t-irgens/erik-irgens-website'
                            ></ProjectDisplay>
                            <ProjectDisplay

                                borderColor="white"
                                labelColor="white" transitionColor="#ff4242"
                                projectName='Circles'
                                projectMedia='https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
                                mediaType='github'

                                projectDescription='This project was a collaborative effort, in which we designed and built a mock social media website. The goal of this project was to utilize C#/.NET as well as ASP.NET Core 2.0 with identity, MVC structure, SQL, and API creation. The project utilizes identity for authentication, and a user can create and modify "circles", which are built of other users. The intention was to create a webapp that would allow users to find other users with similar interests and create circles of friends to meet and enjoy events with. This was completed in the course of one week.'
                                githubLink='https://github.com/erik-t-irgens/CIRCLES_MVC'
                            >
                            </ProjectDisplay>

                            <ProjectDisplay

                                borderColor="white"
                                labelColor="white" transitionColor="#ff4242"
                                projectName='Pokedex'
                                projectMedia='https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
                                mediaType='github'

                                projectDescription='This application was a proof of concept, and a group effort, in which we utilized APIs (Pokemon API) to receive information about Pokemon. This application presents that data in a special way. When a user selects a pokemon, an animated sprite appears in the window - alongside any previous evolutions. Upon further inspection, a user may also peruse information and statistics about the given pokemon. This project utilized JavaScript, Node.js, Bootstrap, Pokemon API, and jQuery.'
                                githubLink='https://github.com/erik-t-irgens/pokedex'
                            >
                            </ProjectDisplay>

                            <ProjectDisplay

                                borderColor="white"
                                labelColor="white" transitionColor="#ff4242"
                                projectName='Doctor Lookup'
                                projectMedia='https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
                                mediaType='github'

                                projectDescription='This project was designed as practice in calling APIs and handling their JSONified data, and presenting it to the user. In this case, the application queries Doctor API with parameters supplied by the user, such as symptoms, doctor name, location, and can be represented in various orders via filters. Created with JavaScript, Node.js, Bootstrap, and jQuery.'
                                githubLink='https://github.com/erik-t-irgens/doctor-lookup'
                            >
                            </ProjectDisplay>

                            <ProjectDisplay

                                borderColor="white"
                                labelColor="white" transitionColor="#ff4242"
                                projectName='Pizza Delivery'
                                projectMedia='https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
                                mediaType='github'
                                projectDescription='As one of my earlist projects using JavaScript, I decided to focus on design. This project contains flaws - such as a lack of significant media queries - but this represents one of the many examples in which I delved deeper into style and design than the cirriculum made necessary. This project utilizes JavaScript, Node.js, Bootstrap, and jQuery.'
                                githubLink='https://github.com/erik-t-irgens/pizza-delivery'
                            >
                            </ProjectDisplay> */}
                        <GitHubProject repo="dungeon-dynamics"></GitHubProject>
                        <GitHubProject repo="erik-irgens-website"></GitHubProject>

                        <GitHubProject repo="word-visualization"></GitHubProject>
                        <GitHubProject repo="CIRCLES_MVC"></GitHubProject>
                        <GitHubProject repo="CIRCLES_API"></GitHubProject>
                    </>




                    {/* music projects */}
                    {musicActive ?
                        <>
                            <ProjectDisplay

                                borderColor="white"
                                labelColor="white" transitionColor="#ff4242"
                                projectName='Atmos'
                                projectMedia='playlists/851104859'
                                mediaType='music'
                                projectDescription="Two small movements, each intended to deliver atmospheric environments to be inhabited, experienced, and left. I created each movement with limited harmonic and melodic materials. Atmos - I uses a lydian collection that is expanded and observed. Atmos - II uses a modified ioanian collection with a raised fourth and lowered seventh. Originally created for wild UP ensemble, Atmos received the William Averitt Prize for Compositional Excellence in 2018."
                                soundcloudLink='https://soundcloud.com/erik-irgens/atmos-i'
                            ></ProjectDisplay>

                            <ProjectDisplay

                                borderColor="white"
                                labelColor="white" transitionColor="#ff4242"
                                projectName='Nostos'
                                projectMedia='playlists/662399856'
                                mediaType='music'
                                projectDescription=" As a child, I rarely grew roots wherever I lived, as I moved frequently from country to country. Nostos - which means 'Homecoming' in Greek, is a commentary on how our concept of home changes with time, age, and perspective - sometimes for the worse. Nostos was my first large project, spanning 6 movements and around 40 minutes of content. This piece is written for choir, string quartet, marimba, vibraphone, and hanging cymbals. This piece is programmatic, the text being based off of select snippet's from Homer's Illied and the Odyssey in its original Greek format. -2018"
                                soundcloudLink='https://soundcloud.com/erik-irgens/sets/nostos-erik-irgens-recital'
                            ></ProjectDisplay>
                            <ProjectDisplay

                                borderColor="white"
                                labelColor="white" transitionColor="#ff4242"
                                projectName='Dissidentem'
                                projectMedia='tracks/543724350'
                                mediaType='music'
                                projectDescription="Dissidentem - latin for 'separation' - was written for piano trio. There are three distinct sections to this piece. An event, a consequence, and a recovery. I wrote this piece while contemplating and dealing with a recent loss, and how memories are indellibly changed with a hindsight perspective. 2017"
                                soundcloudLink='https://soundcloud.com/erik-irgens/dissidentem'
                            ></ProjectDisplay>

                            <ProjectDisplay

                                borderColor="white"
                                labelColor="white" transitionColor="#ff4242"
                                projectName='Somnolent'
                                projectMedia='tracks/543723972'
                                mediaType='music'
                                projectDescription="Somnolent has an interesting past. I started writing a piano piece that contained materials that I melodically found interesting. These were old materials that I had scrapped long ago that I stumbled upon in my files. While trying to create an acoustic piece out of these materials, they proved to be just as stubborn as theyhad been before. Instead of scrapping them again, I thought of digitally altering them using reverb, reversals, and various other post processing techniques. Through hours of manipulation, I was proud of my first uniquely digital work, whose contemplative atmosphere appropriated the title Somnolent."
                                soundcloudLink='https://soundcloud.com/erik-irgens/somnolent'
                            ></ProjectDisplay>
                            <ProjectDisplay

                                borderColor="white"
                                labelColor="white" transitionColor="#ff4242"
                                projectName='Stars'
                                projectMedia='tracks/543724206'
                                mediaType='music'
                                projectDescription="Stars was written as a collaboration between myself and Victoria Okafur, a colleague at Shenandoah University who majored in vocal performance. In our collaborations, we perused public domain poetry, stumbling upon Majorie Pickthall's poem of the same name. Marjorie Pickthall was a fundamentalist, and to reflect that I strictly adhered the style to a more romantic soundscape, utilizing common third modulations and a large vocal range. 2017. "
                                soundcloudLink='https://soundcloud.com/erik-irgens/stars'
                            ></ProjectDisplay>
                            <ProjectDisplay

                                borderColor="white"
                                labelColor="white" transitionColor="#ff4242"
                                projectName='Gales'
                                projectMedia='tracks/146029326'
                                mediaType='music'
                                projectDescription="Gales was written in fall of 2013, as I was hoping to audition to major in Composition at Shenandoah University, where I had already been studying Vocal Performance. Despite being one of my earlier works, I find that the aesthetic holds true to my voice. 2013"
                                soundcloudLink='https://soundcloud.com/erik-irgens/gales'
                            ></ProjectDisplay>





                        </>
                        : null
                    }

                </ImageCarousel>

                <ScrollTo alignToTop selector={`#contact-section`}>
                    <Button className='button' borderColor="white" labelColor="white" transitionColor="#ff4242">Contact Me</Button>
                </ScrollTo>

            </SectionWrapper>


        )
    }
}

export default PortfolioSection;
