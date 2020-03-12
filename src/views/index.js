import React from "react";

import WelcomeSection from "./components/Welcome/index"
import AboutSection from "./components/About/index"
import PortfolioSection from "./components/Portfolio/index"
import Header from "../global/Header/index"
import ScrollSnapView from '../global/ScrollSnapView'

// import ScrollTo from 'react-scroll-into-view'



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
          <WelcomeSection className="scroll-snap-child" />
          <AboutSection className="scroll-snap-child" />
          <PortfolioSection className="scroll-snap-child" />
          <BlogSection className="scroll-snap-child" />
          <ContactSection className="scroll-snap-child" />
        </ScrollSnapView>
      </div>
    );
  }
}

export default MainPage;
