import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonStyle: {
                display: "inline-block",
                textDecoration: "none",
                position: "absolute",
                minWidth: '100px',
                zIndex: 3,
                cursor: 'pointer',
                transition: 'all .05s ease-in-out',
                left: '50%',
                transform: 'translateX(-50%)'
            },
            topLayerStyle: {
                border: "2px solid " + this.props.borderColor,

            },
            labelStyle: {
                color: this.props.labelColor
            },
            buttonBorderLeft: {
                left: '-2px',
                bottom: '-2px',
                width: '2px',
                height: 0,
                position: 'absolute',
                backgroundColor: this.props.transitionColor,
                transition: 'all .2s ease-out'
            },

            buttonBorderRight: {
                right: '-2px',
                top: '-2px',
                width: '2px',
                height: 0,
                position: 'absolute',
                backgroundColor: this.props.transitionColor,
                transition: 'all .2s ease-out'
            },
            buttonBorderTop: {
                left: '-2px',
                top: '-2px',
                width: 0,
                height: '2px',
                position: 'absolute',
                backgroundColor: this.props.transitionColor,
                transition: 'all .2s ease-out'
            },
            buttonBorderBottom: {
                right: '-2px',
                bottom: '-2px',
                width: 0,
                height: '2px',
                position: 'absolute',
                backgroundColor: this.props.transitionColor,
                transition: 'all .2s ease-out'
            }


        }
    }

    onMouseDown = () => {
        this.setState({
            buttonStyle: {
                ...this.state.buttonStyle,
                left: '50%',
                transform: 'scale(.99) translate(-50.5%)'
            }
        })
    }

    onMouseUp = () => {
        this.setState({
            buttonStyle: {
                ...this.state.buttonStyle,
                transform: 'scale(1, 1) translateX(-50%)'

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
                width: 'calc(100% + 2px)',
                backgroundColor: this.props.transitionColor,
            },
            buttonBorderTop: {
                ...this.state.buttonBorderTop,
                width: 'calc(100% + 2px)',
                backgroundColor: this.props.transitionColor,
            },
            buttonBorderLeft: {
                ...this.state.buttonBorderLeft,
                height: 'calc(100% + 2px)',
                backgroundColor: this.props.transitionColor,
            },
            buttonBorderRight: {
                ...this.state.buttonBorderRight,
                height: 'calc(100% + 2px)',
                backgroundColor: this.props.transitionColor,
            }
        })
    }

    onMouseLeave = () => {
        this.setState({
            labelStyle: {
                ...this.state.labelStyle,
                color: this.props.labelColor,
            },
            buttonBorderBottom: {
                ...this.state.buttonBorderBottom,
                width: 0,
                backgroundColor: 'white',
            },
            buttonBorderTop: {
                ...this.state.buttonBorderTop,
                width: 0,
                backgroundColor: 'white',
            },
            buttonBorderLeft: {
                ...this.state.buttonBorderLeft,
                height: 0,
                backgroundColor: 'white',
            },
            buttonBorderRight: {
                ...this.state.buttonBorderRight,
                height: 0,
                backgroundColor: 'white',
            }
        })
    }


    render() {

        const { buttonStyle, topLayerStyle, labelStyle, buttonBorderBottom, buttonBorderLeft, buttonBorderRight, buttonBorderTop } = this.state

        return (
            <div
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                className="button" style={buttonStyle}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}>

                <div className="button-top" style={topLayerStyle} >

                    <div className="button-label" style={labelStyle}>{this.props.children}</div>

                    <div style={buttonBorderLeft} className="button-border button-border-left" />

                    <div style={buttonBorderTop} className="button-border button-border-top" />

                    <div style={buttonBorderRight} className="button-border button-border-right" />

                    <div style={buttonBorderBottom} className="button-border button-border-bottom" />

                </div>

            </div>
        );
    }
}

export default Button;
