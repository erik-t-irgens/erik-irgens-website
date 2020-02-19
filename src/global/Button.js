import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <a href="#" class="button nav-link">

                {/* <div class="bottom"></div> */}

                <div class="top">

                    <div class="label">{this.props.children}</div>

                    <div class="button-border button-border-left"></div>
                    <div class="button-border button-border-top"></div>
                    <div class="button-border button-border-right"></div>
                    <div class="button-border button-border-bottom"></div>

                </div>

            </a>
        );
    }
}

export default Button;
