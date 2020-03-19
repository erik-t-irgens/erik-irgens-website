import React from "react";
import github from "../../../../Icons/github.svg"
import GithubButton from "./GithubButton";

class ProjectDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iframeVisible: false,
            projectStyle: {
                backgroundImage: `url(${this.props.projectImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '200px',
                height: '200px',
                transition: 'all .5s ease-in-out'
            }
        }
    }

    componentDidMount = () => {
        this.setState({
            projectName: this.props.projectName,
            iframeLink: this.props.iframeLink,
            githubLink: this.props.githubLink,
        })
    }

    onClick = () => {
        this.setState({
            iframeVisible: true,
            projectStyle: {
                ...this.state.projectStyle,
                width: '50vh',
                height: '50vh',
            }
        })
    }

    onCloseIframe = () => {
        alert('this is working')
        this.setState({
            iframeVisible: false,
            projectStyle: {
                ...this.state.projectStyle,
                width: '200px',
                height: '200px',
            }
        })
    }

    render() {
        const { iframeVisible, projectName, projectStyle, iframeLink, githubLink } = this.state


        return (
            <div style={projectStyle}
                className="project"
                onClick={this.onClick}>
                {iframeVisible && iframeLink ?
                    <div>

                        <iframe title={projectName} className='iframe' src={iframeLink} height='100%' width='100%'>
                            <p>Your browser doesn't seem to support iframes. To view the project itself, please visit: <a href={iframeLink}>{iframeLink}</a></p>
                        </iframe>
                    </div>

                    :
                    <div
                    >
                        <h3 style={{ position: 'absolute', left: '50%', transform: 'translatex(-50%)', marginTop: '20px' }}>
                            {projectName}
                        </h3>
                        <GithubButton

                            functionality={githubLink}
                            borderColor="white" labelColor="white"><img className="social-icon-image" style={{ width: '25px', color: 'white' }} src={github} alt="Link to project on github"></img></GithubButton>
                    </div>
                }
                {iframeVisible ?
                    <div className='close-iframe-button' onClick={this.onCloseIframe}><p>X</p></div> :
                    <></>}


            </div>
        );
    }
}

export default ProjectDisplay;
