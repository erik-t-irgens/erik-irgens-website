import React from 'react'

class SkillSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skillNameBackground: this.props.backdropcolor,
            skillWidth: 0,
            themeColor: this.props.themeColor,
            textColor: this.props.color,
            backgroundColor: 'gray',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all .8s ease-in-out',
        }
    }

    getSkillsClassNames = () => {
        if (!this.state.skillsVisible) {
            return ("skill-slider-wrapper invisible-skill-wrapper")
        }
        else {
            return ("skill-slider-wrapper")
        }
    }

    componentDidUpdate = () => {
        if (!this.state.skillsVisible) {
            setTimeout(() => {
                this.setState({
                    skillsVisible: this.props.visibility
                }

                )
            }, 1000)
            setTimeout(() => {
                this.setState({
                    skillWidth: this.props.width
                },


                )
            }, 2000)


        }
    }

    render() {
        const { skillWidth, themeColor, textColor, skillNameBackground } = this.state
        return (
            <div className={this.getSkillsClassNames()} style={{
                transition: 'all ' +
                    // (Math.random() * (5 - 1) + 1)
                    this.props.animationlength
                    + 's ease-in-out'
            }}>
                <div
                    className='skill-name-wrapper'
                    style={{ backgroundColor: skillNameBackground, top: 0, left: '0px', position: "relative", zIndex: 1 }}>
                    <p className='skill-name' style={{ color: textColor }}>
                        {this.props.children}
                    </p>
                </div>

                <div className='skill-bar' style={{
                    backgroundImage: `linear-gradient(to left, ${themeColor}, gray)`,

                    width: skillWidth, position: 'relative', top: 0, zIndex: 1
                }}></div>


            </div>

        )
    }
}

export default SkillSlider