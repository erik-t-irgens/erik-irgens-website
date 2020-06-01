import React from 'react';
import ScrollSnapChild from "./ScrollSnapChild";

import debounce from 'lodash'

class ScrollSnapView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    calculateScrollDistance = () => {

        const scrollTop = window.pageYOffset; //0
        const winHeight = window.innerHeight; //899
        const docHeight = this.getDocHeight(); //899


        const totalDocScrollLength = docHeight - winHeight; // 0

        console.log(totalDocScrollLength)

        const scrollPos = Math.floor(scrollTop / totalDocScrollLength * 100) // dividing by 0

        // this.setState({
        //     scrollPosition: scrollPos,
        // });
        return scrollPos
    }

    getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }




    render() {
        return (
            <div className="scroll-snap-view" onScroll={this.props.scrollFunction(this.calculateScrollDistance)}>
                {this.props.children.map(function (child, i) {
                    return (<ScrollSnapChild key={i}>{child}</ScrollSnapChild>)
                })}
            </div>

        )
    }
}

export default ScrollSnapView