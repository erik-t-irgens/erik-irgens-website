import React from "react";
import SectionWrapper from '../global/SectionWrapper'
import SectionTitle from '../global/SectionTitle'
import Button from "../global/Button"
import WelcomeSection from "./components/Welcome/index"
import AboutSection from "./components/About/index"
import Header from "../global/Header/index"

import ScrollTo from 'react-scroll-into-view'

// images, all taken by myself
import Image1 from "../Backgrounds/1.jpg"
import Image2 from "../Backgrounds/2.jpg"
import Image3 from "../Backgrounds/3.jpg"
import Image4 from "../Backgrounds/4.jpg"
import Image5 from "../Backgrounds/5.jpg"
import Image6 from "../Backgrounds/6.jpg"
import Image7 from "../Backgrounds/7.jpg"
import Image8 from "../Backgrounds/8.jpg"
import Image9 from "../Backgrounds/9.jpg"
import Image10 from "../Backgrounds/10.jpg"
import Image11 from "../Backgrounds/11.jpg"

class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };

  }



  render() {
    return (
      <div className="main-page-container" >

        <Header></Header>
        <WelcomeSection


          className="section-wrapper welcome">
          <ScrollTo alignToTop selector={`#about-section`}>
            <Button borderColor="white" labelColor="white" transitionColor="#42f5d1">Learn More</Button>
          </ScrollTo>
        </WelcomeSection>
        <AboutSection className="section-wrapper about"></AboutSection>




        <SectionWrapper

          idSet="portfolio-section"
          className="section-wrapper"
          backgroundImage={Image5}
          transitionColor="#ff4242" color='black'
        >
          <SectionTitle color="white">Portfolio</SectionTitle>
          <Button borderColor="white" labelColor="white" transitionColor="#ff4242">Example</Button>

        </SectionWrapper>

        <SectionWrapper
          idSet="blog-section"

          className="section-wrapper"
          backgroundImage={Image8}
          transitionColor="#7081ff" color='black'
        >
          <SectionTitle color="white">Blog</SectionTitle>
          <Button borderColor="white" labelColor="white" transitionColor="#7081ff">Example</Button>

        </SectionWrapper>

        <SectionWrapper
          idSet="contact-section"

          className="section-wrapper test-last-section"
          backgroundImage={Image3}
          transitionColor="#80ffa2" color='black'
        >
          <SectionTitle color="white">Contact</SectionTitle>
          <Button borderColor="white" labelColor="white" transitionColor="#80ffa2">Example</Button>

        </SectionWrapper>
      </div>
    );
  }
}

export default MainPage;
