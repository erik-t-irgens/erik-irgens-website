import React, { useState } from "react";

const ProjectButton = (props) => {
    const [buttonStyle, setButtonStyle] = useState({
        textDecoration: "none",
        position: "absolute",
        zIndex: 3,
        cursor: 'pointer',
        transition: 'all .05s ease-in-out',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '2px'
    });

    const [topLayerStyle, setTopLayerStyle] = useState({
        position: 'relative',
        left: 0,
        top: 0,
        padding: '5px 5px 5px 5px',
        transition: 'all .5s ease-in-out',
    });

    const [labelStyle, setLabelStyle] = useState({
        fontWeight: 600,
        fontSize: '10px',
        lineHeight: '100%',
        letterSpacing: '0px',
        textAlign: 'center',
        transition: 'all .15s ease-out',
        color: props.labelColor
    });

    const onMouseDown = () => {
        setButtonStyle({
            ...buttonStyle,
            transform: 'scale(.99)'
        });
        window.open(props.functionality, '_blank');
    };

    const onMouseUp = () => {
        setButtonStyle({
            ...buttonStyle,
            transform: 'scale(1)'
        });
    };

    const onMouseOver = () => {
        setLabelStyle({
            ...labelStyle,
            color: props.transitionColor,
        });
    };

    const onMouseLeave = () => {
        setLabelStyle({
            ...labelStyle,
            color: props.labelColor,
        });
    };

    return (
        <div
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            className="button-project" style={buttonStyle}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}>

            <div className="github-top" style={topLayerStyle} >
                <div className="github-label" style={labelStyle}>{props.children}</div>
            </div>
        </div>
    );
};

export default ProjectButton;
