import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const buttonStyle = {
            display: "inline-block",
            textDecoration: "none",
            position: "relative",
            marginTop: "40px",
        }


        return (
            <a href="#" className="button nav-link" style={buttonStyle}>
                <div className="top" style={{ border: "2px solid " + this.props.borderColor, }}>

                    <div className="label" style={{ color: this.props.labelColor }}>{this.props.children}</div>
                    <div className="button-border button-border-left" />
                    <div className="button-border button-border-top" />
                    <div className="button-border button-border-right" />
                    <div className="button-border button-border-bottom" />

                </div>

            </a>
        );
    }
}

export default Button;
