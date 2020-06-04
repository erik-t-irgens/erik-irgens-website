import React from 'react';
import ScrollSnapChild from "./ScrollSnapChild";



class ScrollSnapView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollPosition: 0
        }
    }

    componentDidMount = () => {

        let that = this
        // Track the wrapper element's scroll position
        document.getElementById("scroll-snap-container").onscroll = function () { // could I technically do = (element => {}) then reference it as element.scrollTop instead of this.scrollTop? That would avoid using that = this
            // set that scroll position into state
            that.setState({
                scrollPosition: this.scrollTop
            })
        }
    }

    // Calculate the percentage of the page that has been "read", or the scroll position in x/100
    calculateScrollDistance = () => {

        let scrollTop = this.state.scrollPosition; // works
        const winHeight = window.innerHeight; //899
        const docHeight = this.getDocHeight() * 5; //899

        const totalDocScrollLength = docHeight - winHeight; // 0

        const scrollPosPercentage = Math.floor(scrollTop / totalDocScrollLength * 100) // dividing by 0

        this.props.scrollFunction(scrollPosPercentage)
    }

    getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight,
            document.getElementById('scroll-snap-container').clientHeight
        );
    }




    render() {
        return (
            <div className="scroll-snap-view" id="scroll-snap-container"
                onScroll={
                    this.calculateScrollDistance
                }
            >
                {this.props.children.map(function (child, i) {
                    return (<ScrollSnapChild key={i}>{child}</ScrollSnapChild>)
                })}
            </div>

        )
    }
}

export default ScrollSnapView