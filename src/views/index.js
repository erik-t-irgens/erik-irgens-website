import React from "react";
import SectionWrapper from '../global/SectionWrapper'
import Button from "../global/Button"
import WelcomeSection from "./components/Welcome/index"
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
    this.state = {};
  }

  render() {
    return (
      <div>
        <WelcomeSection>
          <Button borderColor="white" labelColor="white" transitionColor="#42f5d1">Example Button</Button>
        </WelcomeSection>
        <SectionWrapper backgroundImage={Image11} transitionColor="orange" color='black'>
          <Button borderColor="white" labelColor="white" transitionColor="orange">Example</Button>
        </SectionWrapper>
        <SectionWrapper backgroundImage={Image10} transitionColor="yellow" color='black'>
          <Button borderColor="white" labelColor="white" transitionColor="yellow">Example</Button>
        </SectionWrapper>
        <SectionWrapper
          backgroundImage={Image9}
          transitionColor="red" color='black'
        >
          <Button borderColor="white" labelColor="white" transitionColor="red">Example</Button>
        </SectionWrapper>
      </div>
    );
  }
}

export default MainPage;
