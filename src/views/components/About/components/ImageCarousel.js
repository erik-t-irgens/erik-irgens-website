import React from 'react';

class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            carouselVisible: false,
        }
    }

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
            }, 1000)

        }
    }

    render() {
        return (
            <div className='about-image-carousel-column'>
                <div className={this.getSkillsClassNames()} style={{
                    transition: 'all 1s ease-in-out'
                }}>
                    <div className="slider">
                        <div className="slides">
                            {this.props.children ? this.props.children : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageCarousel