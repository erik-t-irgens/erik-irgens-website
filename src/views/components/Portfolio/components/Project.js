import React from "react";
import github from "../../../../Icons/github.svg"
import GithubButton from "./GithubButton";

class ProjectDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptionVisible: false,
            projectStyle: {
                backgroundImage: `url(${this.props.projectImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // width: '20vh',
                height: '53vh',
                transition: 'all .5s ease-in-out'
            }
        }
    }

    componentDidMount = () => {
        this.setState({
            projectName: this.props.projectName,
            githubLink: this.props.githubLink,
            projectDescription: this.props.projectDescription,
        })
    }



    onMouseEnter = () => {
        this.setState({
            descriptionVisible: true,

        })
        // if (!this.state.descriptionVisible) {
        //     this.setState({
        //         projectStyle: {
        //             ...this.state.projectStyle,

        //             backgroundImage: null,

        //         }
        //     })
        // } else {
        //     this.setState({
        //         projectStyle: {
        //             ...this.state.projectStyle,

        //             backgroundImage: `url(${this.props.projectImage})`
        //         }
        //     })
        // }
    }



    render() {
        const { descriptionVisible, projectName, projectStyle, githubLink, projectDescription } = this.state


        return (
            <div style={projectStyle}
                className="project"
                onMouseEnter={this.onMouseEnter}>
                {descriptionVisible ?
                    <div>


                        <h3 className='project-name' style={{ width: '100%' }}>
                            {projectName}
                        </h3>
                        <h4 className='project-description' style={{ width: '80%' }}>{projectDescription}</h4>
                        <GithubButton

                            functionality={githubLink}
                            borderColor="white" labelColor="white"><img className="social-icon-image" style={{ width: '25px', color: 'white' }} src={github} alt="Link to project on github"></img></GithubButton>
                    </div>

                    :
                    <div
                    >
                        <h3 className='project-name'>
                            {projectName}
                        </h3>
                        <GithubButton

                            functionality={githubLink}
                            borderColor="white" labelColor="white"><img className="social-icon-image" style={{ width: '25px', color: 'white' }} src={github} alt="Link to project on github"></img></GithubButton>
                    </div>
                }



            </div>
        );
    }
}

export default ProjectDisplay;
