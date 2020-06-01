import React from "react";

import WelcomeSection from "./components/Welcome/index"
import AboutSection from "./components/About/index"
import PortfolioSection from "./components/Portfolio/index"
import Header from "../global/Header/index"
import ScrollSnapView from '../global/ScrollSnapView'

import { useScrollPosition } from '@n8tb1t/use-scroll-position'

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

  setScrollState = (position) => {
    this.setState({
      scrollPosition: position
    })
  }



  listenToScrollEvent = () => {

  };

  render() {
    return (
      <div className="main-page-container" >

        <Header></Header>
        <ScrollSnapView scrollFunction={this.setScrollState}>
          <WelcomeSection currentPost={this.state.currentScrollPosition} />
          <AboutSection currentPost={this.state.currentScrollPosition} />
          <PortfolioSection currentPost={this.state.currentScrollPosition} />
          <BlogSection currentPost={this.state.currentScrollPosition} />
          <ContactSection currentPost={this.state.currentScrollPosition} />
        </ScrollSnapView>
      </div>
    );
  }
}

export default MainPage;
