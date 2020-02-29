import React from "react";

class SectionTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleViewed: false,

        }
    }

    render() {
        return (
            <div className="section-title">
                <div style={{ color: this.props.color }}>
                    {
                        this.props.children ?
                            this.props.children :
                            <></>
                    }
                </div>
            </div>
        )
    }
}

export default SectionTitle;
