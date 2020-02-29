import React from "react";

class SectionWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      separatorStyle: {
        position: 'fixed',
        zIndex: 4,
        height: '2px',
        width: '10%',
        backgroundColor: this.props.transitionColor,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'all 1s ease-in-out',

      },

      faderStyle: {
        // display: "inline-block",
        textDecoration: "none",
        position: "absolute",
        backgroundColor: "gray",
        zIndex: 1,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${this.props.backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        transition: 'all .5s ease-in-out',

      },

      SectionWrapperStyle:
      {
        width: '100%',
        height: '100vh',
        transition: 'all 2s ease-out',
      }
      ,
      wrapperStyle: {
        display: "inline-block",
        textDecoration: "none",
        position: "relative",
        top: '50%',
        transform: 'translateY(-50%)',
        width: '95%',
        height: '95%',
        // padding: '24px 34px 22px 34px',
        transition: 'all .5s ease-in-out',
      },
      borderLeft: {
        left: '5px',
        zIndex: 2,
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
        zIndex: 2,
        width: '2px',
        height: 0,
        position: 'absolute',
        backgroundColor: 'white',
        opacity: 0,
        transition: 'all .8s ease-out'
      },
      borderTop: {
        left: '5px',
        top: '4px',
        width: 0,
        height: '2px',
        position: 'absolute',
        zIndex: 2,
        backgroundColor: 'white',
        opacity: 0,
        transition: 'all .8s ease-out'
      },
      borderBottom: {
        right: '-5px',
        bottom: '-6px',
        width: 0,
        height: '2px',
        position: 'absolute',
        zIndex: 2,
        backgroundColor: 'white',
        opacity: 0,
        transition: 'all .8s ease-out'
      }


    }
  }

  onMouseLeave = () => {
    this.setState({
      separatorStyle: {
        ...this.state.separatorStyle,
        width: 0
      },
      faderStyle: {
        ...this.state.faderStyle,
        opacity: 1
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
      separatorStyle: {
        ...this.state.separatorStyle,
        width: '25%'
      },
      faderStyle: {
        ...this.state.faderStyle,
        opacity: .1
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

    const { separatorStyle, faderStyle, borderBottom, borderLeft, borderRight, borderTop, wrapperStyle, SectionWrapperStyle } = this.state

    return (
      <div
        id={this.props.idSet}
        className="section-wrapper"
        style={SectionWrapperStyle}
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
      >

        {
          this.props.children ?
            <div className="section-children-wrapper" >
              {this.props.children}
            </div>
            :
            <></>
        }






        <div className="section-fader" style={faderStyle}></div>
        <div className="border-wrapper" style={wrapperStyle}>
          {/* <div className="top-section-separator" style={separatorStyle}></div> */}

          <div className="bottom-section-separator" style={separatorStyle}></div>
          <div style={borderLeft} className="border border-left" />

          <div style={borderTop} className="border border-top" />

          <div style={borderRight} className="border border-right" />

          <div style={borderBottom} className="border border-bottom" />
        </div>
      </div>
    )
  }
}

export default SectionWrapper;
