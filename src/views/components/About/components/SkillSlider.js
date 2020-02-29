import React from 'react'

class SkillSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            skillNameBackground: this.props.backdropcolor,
            skillWidth: this.props.width,
            themeColor: this.props.themeColor,
            textColor: this.props.color,
            skillSliderWrapperStyle: {
                width: '100%',
                height: '30px',
                backgroundColor: 'gray',
            }

        }
    }

    render() {
        const { skillWidth, themeColor, textColor, skillNameBackground } = this.state
        return (
            <div className='skill-slider-wrapper' >

                <div
                    className='skill-name-wrapper'
                    style={{ backgroundColor: skillNameBackground, top: 0, left: '0px', position: "relative", zIndex: 1 }}>
                    <p className='skill-name' style={{ color: textColor }}>
                        {this.props.children}
                    </p>
                </div>

                <div className='skill-bar' style={{ backgroundColor: themeColor, width: skillWidth, position: 'relative', top: 0, zIndex: 1 }}></div>


            </div>

        )
    }
}

export default SkillSlider