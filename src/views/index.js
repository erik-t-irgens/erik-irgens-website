import React from "react";
import SectionWrapper from '../global/SectionWrapper'
import Button from "../global/Button"
import WelcomeSection from "./components/Welcome/index"

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <WelcomeSection></WelcomeSection>
        <SectionWrapper color='white' />
        <SectionWrapper color='gray' />
        <SectionWrapper color='red'><Button borderColor="gray" labelColor="gray">Click me pretty please</Button></SectionWrapper>
      </div>
    );
  }
}

export default MainPage;
