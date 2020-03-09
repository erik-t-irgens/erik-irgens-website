import React from "react";
import SectionWrapper from '../global/SectionWrapper'
import SectionTitle from '../global/SectionTitle'
import Button from "../global/Button"
import WelcomeSection from "./components/Welcome/index"
import AboutSection from "./components/About/index"
import PortfolioSection from "./components/Portfolio/index"
import Header from "../global/Header/index"
import ScrollSnapView from '../global/ScrollSnapView'

import ScrollTo from 'react-scroll-into-view'

// images, all taken by myself

import Image3 from "../Backgrounds/3.jpg"

import Image5 from "../Backgrounds/5.jpg"

import Image8 from "../Backgrounds/8.jpg"
import BlogSection from "./components/Blog";
import ContactSection from "./components/Contact";



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
        <ScrollSnapView>
          <WelcomeSection
            className="section-wrapper welcome">
            <ScrollTo alignToTop selector={`#about-section`}>
              <Button borderColor="white" labelColor="white" transitionColor="#42f5d1">Learn More</Button>
            </ScrollTo>
          </WelcomeSection>


          <AboutSection className="section-wrapper about"></AboutSection>



          <PortfolioSection></PortfolioSection>

          <BlogSection></BlogSection>

          <ContactSection></ContactSection>
        </ScrollSnapView>
      </div>
    );
  }
}

export default MainPage;
