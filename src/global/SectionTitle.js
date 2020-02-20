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
                <h1 style={{ color: this.props.color, fontSize: '5em' }}>
                    {
                        this.props.children ?
                            this.props.children :
                            <></>
                    }
                </h1>
            </div>
        )
    }
}

export default SectionTitle;
