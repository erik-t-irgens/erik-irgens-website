import React from "react";

class SectionWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ width: '100vw', height: '100vh', backgroundColor: this.props.color }}>
        {
          this.props.children ?
            this.props.children :
            <></>
        }
      </div>
    )
  }
}

export default SectionWrapper;
