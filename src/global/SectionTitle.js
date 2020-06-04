import React from "react";


class SectionTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            titleVisible: this.props.visibility,
            visibleStyle: {
                opacity: 1,
                transform: 'translate(0%, 0%)',
                color: this.props.color,
                transition: 'all .8s ease-in-out',

            },
            invisibleStyle: {
                opacity: 0,
                transform: this.props.direction,
                color: 'black',
                transition: 'all .8s ease-in-out',
            }
        }
    }



    componentWillReceiveProps = () => {
        if (!this.state.titleVisible) {
            this.setState({ titleVisible: this.props.visibility })
        }
    }

    render() {
        const { titleVisible, visibleStyle, invisibleStyle } = this.state
        return (

            <div className="section-title">
                {titleVisible
                    ?

                    <div className="visible" style={visibleStyle}>
                        {
                            this.props.children ?
                                this.props.children :
                                <></>
                        }
                    </div>

                    :

                    <div className="not-visible" style={invisibleStyle}>
                        {
                            this.props.children ?
                                this.props.children :
                                <></>
                        }
                    </div>}
            </div>
        )
    }
}

export default SectionTitle;
