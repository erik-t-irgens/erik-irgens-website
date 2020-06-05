import React from "react";

class ProjectButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonStyle: {
                // display: "inline-block",
                textDecoration: "none",
                position: "absolute",
                zIndex: 3,
                cursor: 'pointer',
                transition: 'all .05s ease-in-out',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '2px'

            },
            topLayerStyle: {

                position: 'relative',
                left: 0,
                top: 0,
                padding: '5px 5px 5px 5px',
                transition: 'all .5s ease-in-out',
            },
            labelStyle: {
                fontWeight: 600,
                fontSize: '10px',
                lineHeight: '100%',
                letterSpacing: '0px',
                textAlign: 'center',
                transition: 'all .15s ease-out',
                color: this.props.labelColor
            },

        }
    }

    onMouseDown = () => {
        this.setState({
            buttonStyle: {
                ...this.state.buttonStyle,
                transform: 'scale(.99)'
            }
        })
        window.open(this.props.functionality, '_blank')
    }

    onMouseUp = () => {
        this.setState({
            buttonStyle: {
                ...this.state.buttonStyle,
                transform: 'scale(1)'

            }
        })
    }

    onMouseOver = () => {
        this.setState({
            labelStyle: {
                ...this.state.labelStyle,
                color: this.props.transitionColor,
            },

        })
    }

    onMouseLeave = () => {
        this.setState({
            labelStyle: {
                ...this.state.labelStyle,
                color: this.props.labelColor,
            },

        })
    }


    render() {

        const { buttonStyle, topLayerStyle, labelStyle } = this.state

        return (
            <div
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                className="button" style={buttonStyle}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}>

                <div className="github-top" style={topLayerStyle} >
                    <div className="github-label" style={labelStyle}>{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default ProjectButton;
