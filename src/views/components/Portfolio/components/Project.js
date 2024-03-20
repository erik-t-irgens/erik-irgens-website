import React, { useState, useEffect } from "react";
import github from "../../../../Icons/github.svg";
import soundcloud from "../../../../Icons/soundcloud.svg";
import ProjectButton from "./ProjectButton";
import ProjectMedia from './ProjectMedia';

const ProjectDisplay = (props) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const [projectState, setProjectState] = useState({
        projectName: '',
        githubLink: '',
        soundcloudLink: '',
        projectDescription: '',
    });

    useEffect(() => {
        setProjectState({
            projectName: props.projectName,
            githubLink: props.githubLink,
            soundcloudLink: props.soundcloudLink,
            projectDescription: props.projectDescription,
        });
    }, []);

    const onMouseEnter = () => {
        setDescriptionVisible(true);
    };

    return (
        <div
            className="project"
            onMouseEnter={onMouseEnter}>

            <div>
                <h3 className='project-name' style={{ width: '100%' }}>
                    {projectState.projectName}
                </h3>

                <div className='project-content-grid'>
                    <div className='project-media'>
                        <ProjectMedia projectMedia={props.projectMedia} mediaType={props.mediaType}
                            soundcloudLink={projectState.soundcloudLink ? projectState.soundcloudLink : null}
                        ></ProjectMedia>
                    </div>
                    <div className='project-description-column'>
                        <div className='description-border-left'></div>
                        <h4 className='project-description'>{projectState.projectDescription}</h4>
                    </div>
                </div>

                {projectState.githubLink &&
                    <ProjectButton
                        functionality={projectState.githubLink}
                        borderColor="white" labelColor="white">
                        <img className="social-icon-image" src={github} alt="Link to project on github" />
                    </ProjectButton>
                }

                {projectState.soundcloudLink &&
                    <ProjectButton
                        functionality={projectState.soundcloudLink}
                        borderColor="white" labelColor="white">
                        <img className="social-icon-image" src={soundcloud} alt="Link to piece on soundcloud" />
                    </ProjectButton>
                }
            </div>
        </div>
    );
};

export default ProjectDisplay;