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
            <div className="scroll-snap-view" >
                {this.props.children.map(function (child, i) {
                    return (<ScrollSnapChild key={i}>{child}</ScrollSnapChild>)
                })}
            </div>

        )
    }
}

export default ScrollSnapView