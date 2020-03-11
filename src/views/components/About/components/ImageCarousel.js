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
                            <div id="slide-1">
                                Testing Slide 1
                            </div>
                            <div id="slide-2">
                                Maybe a little bit about my music
                            </div>
                            <div id="slide-3">

                                <img className="carousel-img" alt="Erik Irgens, enlarged and in black and white." src="https://lh3.googleusercontent.com/hnoqcRWbwhX2R_G43WUrzH3I8IkaaKqL1sRe8O-E9SgTWvh1LrM9OUK7DKJRhFC-hUIGKNNUEX5Opzl4SNreTlz4caQxzMb369QBqk0DOUs_dx_c9XqgRcclfCeyXcFMl0u4TsU5OlCoWcX2e4bLtBGPkNgTFaAG6s5GjIUmPNDEGV3u4XV2W91eKbx1ehtY5jwpKMjinIA_FPguUNhg08vdLUN7t7AgGzlUrrvkl11TBzlX-OwQCYv5AGif6SR-np5dgoQlCp5ph97NehbUjnUGS-hShZxIYKMAkPXQT4sVSMmJw3q9k0Fwc4gwIO_8E_7LvdH8CXWYfKaV5WGcRZfhHJAOF7VpAn3JZVwWYp_83ewHrzeXecuVwPnK-UzLepZuokDu8Ux1Zns0FkaF8Ds3FYYdIWVHc1u0bU3fLR4wzw3evrI1PW0JQuhOK1B7QERe1sUybrc9CbjyNKdWOIG3n6rK2BKoxjRjaVwVWEN6ny4SSb_KRxVmnp6PzpmWkeUkp43iPrvvLxwtJgqeL_45M0myXpfBfWCfZUpMdpKMtBpDfjlksOd44_JpAUMGq4k_582nkoGVEdxuOdpgB1AWiTHaPzBGel_8Rgun258mGaSWSWVEMAvbNW08SAO29IgRVuk5A6knOk1h0T756qhs0MGSAjt6LJ8z4hGm2gbDD3Wtejfwzbe4Sbkzdtw1AT93nDCFlYr-lczNV1pErq4IphQRP_Ife69_oomeUpFJxUxLNg=w723-h963-no"></img>
                            </div>
                            <div id="slide-4">
                                4
                            </div>
                            <div id="slide-5">
                                5
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageCarousel