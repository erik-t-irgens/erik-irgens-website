import React from "react";

import WelcomeSection from "./components/Welcome/index"
import AboutSection from "./components/About/index"
import PortfolioSection from "./components/Portfolio/index"
import Header from "../global/Header/index"
import ScrollSnapView from '../global/ScrollSnapView'

// import { useScrollPosition } from '@n8tb1t/use-scroll-position'

// import ScrollTo from 'react-scroll-into-view'

import { debounce } from 'lodash'

import BlogSection from "./components/Blog";
import ContactSection from "./components/Contact";



class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      scrollPosition: 0

    };

  }

  setScrollState = debounce((position) => {

    if (position !== this.state.scrollPosition) {
      this.setState({
        scrollPosition: position
      })
    }
    console.log("FINAL SCROLL POSITION: " + position, this.state.scrollPosition)
  }, 100)


  render() {
    return (
      <div className="main-page-container" >

        <Header></Header>
        <ScrollSnapView scrollFunction={this.setScrollState}>
          <WelcomeSection currentPos={this.state.scrollPosition} minRange={0} maxRange={25} />
          <AboutSection currentPos={this.state.scrollPosition} minRange={25} maxRange={50} />
          <PortfolioSection currentPos={this.state.scrollPosition} minRange={50} maxRange={75} />
          <BlogSection currentPos={this.state.scrollPosition} minRange={75} maxRange={100} />
          <ContactSection currentPos={this.state.scrollPosition} minRange={100} maxRange={125} />
        </ScrollSnapView>
      </div>
    );
  }
}

export default MainPage;
