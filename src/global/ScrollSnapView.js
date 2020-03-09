import React from 'react';
import ScrollSnapChild from "./ScrollSnapChild";

class ScrollSnapView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div style={{ scrollSnapType: 'y mandatory' }}>
                {this.props.children.map(child => <ScrollSnapChild>{child}</ScrollSnapChild>)}
            </div>

        )
    }
}

export default ScrollSnapView