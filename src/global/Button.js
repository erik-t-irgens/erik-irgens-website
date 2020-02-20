import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonStyle: {
                display: "inline-block",
                textDecoration: "none",
                position: "relative",
                marginTop: "40px",
                zIndex: 1,
            },
            topLayerStyle: {
                border: "2px solid " + this.props.borderColor,
                position: 'relative',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                padding: '24px 34px 22px 34px',
                transition: 'all .5s ease-in-out',
            },
            labelStyle: {
                fontFamily: "'Major Mono Display', monospace",
                fontWeight: 600,
                fontSize: '12px',
                lineHeight: '110%',
                letterSpacing: '2px',
                textAlign: 'center',
                transition: 'all .15s ease-out',
                color: this.props.labelColor
            },
            buttonBorderLeft: {
                left: '-2px',
                bottom: '-2px',
                width: '2px',
                height: 0,
                position: 'absolute',
                backgroundColor: this.props.transitionColor,
                transition: 'all .25s ease-out'
            },

            buttonBorderRight: {
                right: '-2px',
                top: '-2px',
                width: '2px',
                height: 0,
                position: 'absolute',
                backgroundColor: this.props.transitionColor,
                transition: 'all .25s ease-out'
            },
            buttonBorderTop: {
                left: '-2px',
                top: '-2px',
                width: 0,
                height: '2px',
                position: 'absolute',
                backgroundColor: this.props.transitionColor,
                transition: 'all .25s ease-out'
            },
            buttonBorderBottom: {
                right: '-2px',
                bottom: '-2px',
                width: 0,
                height: '2px',
                position: 'absolute',
                backgroundColor: this.props.transitionColor,
                transition: 'all .25s ease-out'
            }


        }
    }

    onMouseLeave = () => {
        this.setState({
            labelStyle: {
                ...this.state.labelStyle,
                color: this.props.labelColor,
            },
            buttonBorderBottom: {
                ...this.state.buttonBorderBottom,
                width: 0
            },
            buttonBorderTop: {
                ...this.state.buttonBorderTop,
                width: 0
            },
            buttonBorderLeft: {
                ...this.state.buttonBorderLeft,
                height: 0
            },
            buttonBorderRight: {
                ...this.state.buttonBorderRight,
                height: 0
            }
        })
    }

    onMouseOver = () => {
        this.setState({
            labelStyle: {
                ...this.state.labelStyle,
                color: this.props.transitionColor,
            },
            buttonBorderBottom: {
                ...this.state.buttonBorderBottom,
                width: 'calc(100% + 2px)'
            },
            buttonBorderTop: {
                ...this.state.buttonBorderTop,
                width: 'calc(100% + 2px)'
            },
            buttonBorderLeft: {
                ...this.state.buttonBorderLeft,
                height: 'calc(100% + 2px)'
            },
            buttonBorderRight: {
                ...this.state.buttonBorderRight,
                height: 'calc(100% + 2px)'
            }
        })
    }

    render() {

        const { buttonStyle, topLayerStyle, labelStyle, buttonBorderBottom, buttonBorderLeft, buttonBorderRight, buttonBorderTop } = this.state

        return (
            <a href="#" className="button nav-link" style={buttonStyle}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}>
                <div className="top" style={topLayerStyle} >

                    <div className="label" style={labelStyle}>{this.props.children}</div>

                    <div style={buttonBorderLeft} className="button-border button-border-left" />

                    <div style={buttonBorderTop} className="button-border button-border-top" />

                    <div style={buttonBorderRight} className="button-border button-border-right" />

                    <div style={buttonBorderBottom} className="button-border button-border-bottom" />

                </div>

            </a>
        );
    }
}

export default Button;
