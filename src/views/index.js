import React from "react";
import SectionWrapper from '../global/SectionWrapper'
import Button from "../global/Button"

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Under Construction</h1>

        <SectionWrapper color='black'> <Button>Click me pretty please</Button></SectionWrapper>
        <SectionWrapper color='white' />
        <SectionWrapper color='gray' />
        <SectionWrapper color='red'><Button>Click me pretty please</Button></SectionWrapper>
      </div>
    );
  }
}

export default MainPage;
