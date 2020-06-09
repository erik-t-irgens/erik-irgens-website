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

  }, 10)


  render() {
    return (
      <div className="main-page-container" >

        <Header></Header>
        <ScrollSnapView scrollFunction={this.setScrollState}>
          <WelcomeSection currentPos={this.state.scrollPosition} minRange={-1} maxRange={24} />
          <AboutSection currentPos={this.state.scrollPosition} minRange={24} maxRange={49} />
          <PortfolioSection currentPos={this.state.scrollPosition} minRange={49} maxRange={74} />
          <BlogSection currentPos={this.state.scrollPosition} minRange={74} maxRange={99} />
          <ContactSection currentPos={this.state.scrollPosition} minRange={99} maxRange={100} />
        </ScrollSnapView>
      </div>
    );
  }
}

export default MainPage;
