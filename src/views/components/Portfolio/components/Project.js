import React from "react";
import github from "../../../../Icons/github.svg"
import soundcloud from "../../../../Icons/soundcloud.svg"
import ProjectButton from "./ProjectButton";
import ProjectMedia from './ProjectMedia';

class ProjectDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptionVisible: false,
            projectStyle: {
                backgroundPosition: 'center',
                height: '53.8vh',
                transition: 'all .5s ease-in-out'
            }
        }
    }

    componentDidMount = () => {
        this.setState({
            projectName: this.props.projectName,
            githubLink: this.props.githubLink,
            soundcloudLink: this.props.soundcloudLink,
            projectDescription: this.props.projectDescription,
        })
    }



    onMouseEnter = () => {
        this.setState({
            descriptionVisible: true,

        })
    }

    handleClassName = () => {
        if (this.state.descriptionVisible) {
            return 'project-content-grid'
        } else {
            return 'project-content-grid-hidden'
        }
    }


    render() {
        const { projectName, projectStyle, githubLink, projectDescription, soundcloudLink } = this.state


        return (
            <div style={projectStyle}
                className="project"
                onMouseEnter={this.onMouseEnter}>

                <div>


                    <h3 className='project-name' style={{ width: '100%' }}>
                        {projectName}
                    </h3>


                    <div className={this.handleClassName()}>
                        <div className='project-media'>
                            <ProjectMedia projectMedia={this.props.projectMedia} mediaType={this.props.mediaType}
                                soundcloudLink={soundcloudLink ? soundcloudLink : null}
                            ></ProjectMedia>
                        </div>
                        <div className='project-description-column'>
                            <div className='description-border-left'></div>
                            <h4 className='project-description'>{projectDescription}</h4>
                        </div>


                    </div>


                    {githubLink ?
                        <ProjectButton
                            functionality={githubLink}
                            borderColor="white" labelColor="white"><img className="social-icon-image" style={{ width: '25px', color: 'white' }} src={github} alt="Link to project on github"></img>
                        </ProjectButton>
                        : null}

                    {soundcloudLink ?
                        <ProjectButton
                            functionality={soundcloudLink}
                            borderColor="white" labelColor="white"><img className="social-icon-image" style={{ width: '25px', color: 'white' }} src={soundcloud} alt="Link to piece on soundcloud"></img>
                        </ProjectButton>
                        : null}


                </div>




            </div>
        );
    }
}

export default ProjectDisplay;
