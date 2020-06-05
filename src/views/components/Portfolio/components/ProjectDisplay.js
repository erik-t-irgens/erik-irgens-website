import React from "react";

import Project from './Project'

class ProjectDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false,
            projectButtonStyle: {
                display: "inline-block",
                textDecoration: "none",
                position: "relative",
                zIndex: 3,

                transition: 'all .05s ease-in-out',

            },
            topLayerStyle: {

                position: 'relative',
                left: 0,
                top: 0,
                // padding: '14px 14px 14px 14px',
                transition: 'all .5s ease-in-out',
            },
            labelStyle: {

                fontWeight: 600,
                fontSize: '10px',
                lineHeight: '100%',
                letterSpacing: '1px',
                textAlign: 'center',
                transition: 'all .15s ease-out',
                color: this.props.labelColor,

            },
            projectBorderLeft: {
                left: '0px',
                bottom: '0px',
                width: '2px',
                height: 0,
                position: 'absolute',
                backgroundColor: this.props.transitionColor,
                transition: 'all .25s ease-out'
            },

            projectBorderRight: {
                right: '0px',
                top: '0px',
                width: '2px',
                height: 0,
                position: 'absolute',
                backgroundColor: this.props.transitionColor,
                transition: 'all .25s ease-out'
            },
            projectBorderTop: {
                left: '0px',
                top: '0px',
                width: 0,
                height: '2px',
                position: 'absolute',
                backgroundColor: this.props.transitionColor,
                transition: 'all .25s ease-out'
            },
            projectBorderBottom: {
                right: '0px',
                bottom: '0px',
                width: 0,
                height: '2px',
                position: 'absolute',
                backgroundColor: this.props.transitionColor,
                transition: 'all .25s ease-out'
            }


        }
    }



    onMouseOver = () => {
        this.setState({
            labelStyle: {
                ...this.state.labelStyle,
                color: this.props.transitionColor,
            },
            projectBorderBottom: {
                ...this.state.projectBorderBottom,
                width: 'calc(100% - 2px)',
                backgroundColor: this.props.transitionColor,
            },
            projectBorderTop: {
                ...this.state.projectBorderTop,
                width: 'calc(100% - 2px)',
                backgroundColor: this.props.transitionColor,
            },
            projectBorderLeft: {
                ...this.state.projectBorderLeft,
                height: 'calc(100% - 2px)',
                backgroundColor: this.props.transitionColor,
            },
            projectBorderRight: {
                ...this.state.projectBorderRight,
                height: 'calc(100% - 2px)',
                backgroundColor: this.props.transitionColor,
            }
        })
    }

    onMouseLeave = () => {
        this.setState({
            labelStyle: {
                ...this.state.labelStyle,
                color: this.props.labelColor,
            },
            projectBorderBottom: {
                ...this.state.projectBorderBottom,
                width: 0,
                backgroundColor: 'white',
            },
            projectBorderTop: {
                ...this.state.projectBorderTop,
                width: 0,
                backgroundColor: 'white',
            },
            projectBorderLeft: {
                ...this.state.projectBorderLeft,
                height: 0,
                backgroundColor: 'white',
            },
            projectBorderRight: {
                ...this.state.projectBorderRight,
                height: 0,
                backgroundColor: 'white',
            }
        })
    }


    render() {

        const { projectButtonStyle, topLayerStyle, labelStyle, projectBorderBottom, projectBorderLeft, projectBorderRight, projectBorderTop } = this.state

        return (
            <div

                className="button" style={projectButtonStyle}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}>

                <div className="project-top" style={topLayerStyle} >

                    <div className="project-label" style={labelStyle}>
                        <Project
                            projectName={this.props.projectName} projectMedia={this.props.projectMedia}
                            descriptionVisible={this.state.visibility}
                            projectDescription={this.props.projectDescription}
                            githubLink={this.props.githubLink}
                            soundcloudLink={this.props.soundcloudLink}
                            mediaType={this.props.mediaType}
                        />
                    </div>

                    <div style={projectBorderLeft} className="project-border project-border-left" />

                    <div style={projectBorderTop} className="project-border project-border-top" />

                    <div style={projectBorderRight} className="project-border project-border-right" />

                    <div style={projectBorderBottom} className="project-border project-border-bottom" />

                </div>

            </div>
        );
    }
}

export default ProjectDisplay;
