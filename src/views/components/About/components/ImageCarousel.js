import React from 'react';


class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            carouselVisible: false,

        }
    }

    // Button handlers. Note window.innerWidth is so that the scroll position change is equal to the length of the window.
    handleScrollLeftButton = () => {
        this.handleScroll(document.getElementById(this.props.id), 0 - window.innerWidth, 100);
    }

    handleScrollRightButton = () => {
        this.handleScroll(document.getElementById(this.props.id), window.innerWidth, 100);
    }

    // Takes the element (the carousel slide), how much to change, and duration)
    handleScroll = (element, change, duration) => {
        // the current left position of the scroll in the element, time, and how quickly to increment
        let start = element.scrollLeft,
            currentTime = 0,
            increment = 20;


        var animateScroll = () => {
            currentTime += increment;
            var val = this.easeInOutQuad(currentTime, start, change, duration);
            element.scrollLeft = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    getSkillsClassNames = () => {
        if (!this.state.carouselVisible) {
            return ("about-image-carousel about-image-carousel-invisible")
        }
        else {
            return ("about-image-carousel")
        }
    }

    componentDidUpdate = () => {
        if (!this.state.carouselVisible) {
            setTimeout(() => {
                this.setState({
                    carouselVisible: this.props.visibility
                }

                )
            }, 100)

        }
    }



    render() {
        return (
            <div className='about-image-carousel-column'>


                <div className={this.getSkillsClassNames()} style={{
                    transition: 'all 1s ease-in-out'
                }}>

                    <div className="slider" >

                        <div className="slides" id={this.props.id}>
                            {this.props.children ? this.props.children : null}

                        </div>
                        <div className='carousel-button-group'>
                            {/* <div>
                                <p className="carousel-button carousel-left-button" onClick={this.handleScrollLeftButton}>&#9666;</p>
                            </div>
                            <div  >
                                <p className="carousel-button carousel-right-button" onClick={this.handleScrollRightButton}>
                                    &#9656;</p>
                            </div> */}
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}

export default ImageCarousel