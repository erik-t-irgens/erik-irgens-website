import React from "react";

class SectionWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SectionWrapperStyle:
      {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${this.props.backgroundImage})`,
        backgroundColor: 'black',
        transition: 'all 2s ease-out',
      }
      ,
      wrapperStyle: {
        display: "inline-block",
        textDecoration: "none",
        position: "relative",

        // left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: '90%',
        height: '90%',
        // padding: '24px 34px 22px 34px',
        transition: 'all .5s ease-in-out',
      },
      borderLeft: {
        left: '5px',
        bottom: '-5px',
        width: '2px',
        height: 0,
        position: 'absolute',
        backgroundColor: 'white',
        opacity: 0,
        transition: 'all .8s ease-out'
      },

      borderRight: {
        right: '-5px',
        top: '5px',
        width: '2px',
        height: 0,
        position: 'absolute',
        backgroundColor: 'white',
        opacity: 0,
        transition: 'all .8s ease-out'
      },
      borderTop: {
        left: '5px',
        top: '5px',
        width: 0,
        height: '2px',
        position: 'absolute',
        backgroundColor: 'white',
        opacity: 0,
        transition: 'all .8s ease-out'
      },
      borderBottom: {
        right: '-5px',
        bottom: '-5px',
        width: 0,
        height: '2px',
        position: 'absolute',
        backgroundColor: 'white',
        opacity: 0,
        transition: 'all .8s ease-out'
      }


    }
  }

  onMouseLeave = () => {
    this.setState({
      SectionWrapperStyle: {
        ...this.state.SectionWrapperStyle,
        backgroundColor: 'black',
        backgroundImage: `url(${this.props.backgroundImage})`

      },
      borderBottom: {
        ...this.state.borderBottom,
        width: 0,
        backgroundColor: 'white',
        opacity: 0
      },
      borderTop: {
        ...this.state.borderTop,
        width: 0,
        backgroundColor: 'white',
        opacity: 0
      },
      borderLeft: {
        ...this.state.borderLeft,
        height: 0,
        backgroundColor: 'white',
        opacity: 0
      },
      borderRight: {
        ...this.state.borderRight,
        height: 0,
        backgroundColor: 'white',
        opacity: 0
      }
    })
  }

  onMouseOver = () => {
    this.setState({
      SectionWrapperStyle: {
        ...this.state.SectionWrapperStyle,
        backgroundColor: this.props.color,
        backgroundImage: "none"
      },
      borderBottom: {
        ...this.state.borderBottom,
        width: '100%',
        backgroundColor: this.props.transitionColor,
        opacity: 1,
      },
      borderTop: {
        ...this.state.borderTop,
        width: '100%',
        backgroundColor: this.props.transitionColor,
        opacity: 1,
      },
      borderLeft: {
        ...this.state.borderLeft,
        height: '100%',
        backgroundColor: this.props.transitionColor,
        opacity: 1,
      },
      borderRight: {
        ...this.state.borderRight,
        height: '100%',
        backgroundColor: this.props.transitionColor,
        opacity: 1,
      }
    })
  }

  render() {

    const { borderBottom, borderLeft, borderRight, borderTop, wrapperStyle, SectionWrapperStyle } = this.state

    return (
      <div
        style={SectionWrapperStyle}
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
        onScr
      >
        {
          this.props.children ?
            <div style={{ zIndex: 1, position: 'absolute', textAlign: 'center', margin: 0, left: '50%', transform: "translateX(-50%)" }}>
              {this.props.children}
            </div>
            :
            <></>
        }
        <div style={wrapperStyle}>
          <div style={borderLeft} className="button-border button-border-left" />

          <div style={borderTop} className="button-border button-border-top" />

          <div style={borderRight} className="button-border button-border-right" />

          <div style={borderBottom} className="button-border button-border-bottom" />
        </div>
      </div>
    )
  }
}

export default SectionWrapper;
