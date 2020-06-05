import React from "react";

class ProjectMedia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectMedia: '',
            mediaType: ''
        }
    }

    componentDidMount = () => {
        this.setState({
            projectMedia: this.props.projectMedia,
            mediaType: this.props.mediaType,
            musicTitle: this.props.musicTitle,
            soundcloudLink: this.props.soundcloudLink
        })
    }
    handleClassName = () => {
        if (this.state.mediaType === 'music') {
            return 'media-player'
        } else if (this.state.mediaType === 'github') {
            return 'project-media'
        } else {
            return 'media-error'
        }
    }

    handleSource = () => {
        if (this.state.mediaType === 'music') {
            return 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/' + this.state.projectMedia + '&color=%23ff4242&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
        } else if (this.state.mediaType === 'github') {
            return this.state.projectMedia
        }
    }

    handleGithubStyle = () => {
        return (
            {
                backgroundImage: `url(${this.handleSource()})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
            }
        )
    }

    render() {
        const { mediaType, musicTitle, soundcloudLink } = this.state;
        return (
            <div className={this.handleClassName()}>
                {
                    mediaType === 'music' ?
                        <div>

                            <iframe title={musicTitle} width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src={this.handleSource()}></iframe><div className="media-player"><a href={soundcloudLink} title={musicTitle} target="_blank" rel="noopener noreferrer" >{musicTitle}</a></div>

                        </div>

                        :
                        <div className='github-media' style={this.handleGithubStyle()}>

                        </div>

                }

            </div>
        );
    }
}

export default ProjectMedia;
