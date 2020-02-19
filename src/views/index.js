import React from "react";
import SectionWrapper from '../global/SectionWrapper'

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Under Construction</h1>
        <SectionWrapper color='black' />
        <SectionWrapper color='white' />
        <SectionWrapper color='gray' />
        <SectionWrapper color='red' />
      </div>
    );
  }
}

export default MainPage;
