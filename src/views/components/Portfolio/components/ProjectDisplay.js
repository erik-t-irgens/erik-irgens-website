import React, { useState } from "react";
import Project from './Project';

const ProjectDisplay = (props) => {
    const [visibility, setVisibility] = useState(false);
    const [projectButtonStyle] = useState({
        display: "inline-block",
        textDecoration: "none",
        position: "relative",
        zIndex: 3,
        transition: 'all .05s ease-in-out',
    });
    const [topLayerStyle] = useState({
        position: 'relative',
        left: 0,
        top: 0,
        transition: 'all .5s ease-in-out',
    });
    const [labelStyle, setLabelStyle] = useState({
        fontWeight: 600,
        fontSize: '10px',
        lineHeight: '100%',
        letterSpacing: '1px',
        textAlign: 'center',
        transition: 'all .15s ease-out',
        color: props.labelColor,
    });
    const [projectBorderBottom, setProjectBorderBottom] = useState({
        right: '0px',
        bottom: '0px',
        width: 0,
        height: '2px',
        position: 'absolute',
        backgroundColor: 'white',
        transition: 'all .25s ease-out',
    });
    const [projectBorderLeft, setProjectBorderLeft] = useState({
        left: '0px',
        bottom: '0px',
        width: '2px',
        height: 0,
        position: 'absolute',
        backgroundColor: 'white',
        transition: 'all .25s ease-out',
    });
    const [projectBorderRight, setProjectBorderRight] = useState({
        right: '0px',
        top: '0px',
        width: '2px',
        height: 0,
        position: 'absolute',
        backgroundColor: 'white',
        transition: 'all .25s ease-out',
    });
    const [projectBorderTop, setProjectBorderTop] = useState({
        left: '0px',
        top: '0px',
        width: 0,
        height: '2px',
        position: 'absolute',
        backgroundColor: 'white',
        transition: 'all .25s ease-out',
    });

    const onMouseOver = () => {
        setLabelStyle({
            ...labelStyle,
            color: props.transitionColor,
        });
        setProjectBorderBottom({
            ...projectBorderBottom,
            backgroundColor: props.transitionColor,
            width: 'calc(100% - 2px)',
        });
        setProjectBorderTop({
            ...projectBorderTop,
            backgroundColor: props.transitionColor,
            width: 'calc(100% - 2px)',
        });
        setProjectBorderLeft({
            ...projectBorderLeft,
            backgroundColor: props.transitionColor,
            height: 'calc(100% - 2px)',
        });
        setProjectBorderRight({
            ...projectBorderRight,
            backgroundColor: props.transitionColor,
            height: 'calc(100% - 2px)',
        });
    };

    const onMouseLeave = () => {
        setLabelStyle({
            ...labelStyle,
            color: props.labelColor,
        });
        setProjectBorderBottom({
            ...projectBorderBottom,
            backgroundColor: 'white',
            width: 0,
        });
        setProjectBorderTop({
            ...projectBorderTop,
            backgroundColor: 'white',
            width: 0,
        });
        setProjectBorderLeft({
            ...projectBorderLeft,
            backgroundColor: 'white',
            height: 0,
        });
        setProjectBorderRight({
            ...projectBorderRight,
            backgroundColor: 'white',
            height: 0,
        });
    };

    return (
        <div
            style={projectButtonStyle}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}>

            <div className="project-top" style={topLayerStyle} >

                <div className="project-label" style={labelStyle}>
                    <Project
                        projectName={props.projectName} projectMedia={props.projectMedia}
                        descriptionVisible={visibility}
                        projectDescription={props.projectDescription}
                        githubLink={props.githubLink}
                        soundcloudLink={props.soundcloudLink}
                        mediaType={props.mediaType}
                    />
                </div>

                <div style={projectBorderLeft} className="project-border project-border-left" />
                <div style={projectBorderTop} className="project-border project-border-top" />
                <div style={projectBorderRight} className="project-border project-border-right" />
                <div style={projectBorderBottom} className="project-border project-border-bottom" />

            </div>

        </div>
    );
};

export default ProjectDisplay;
