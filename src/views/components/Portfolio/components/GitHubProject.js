import React, { useState, useEffect } from 'react';
import ProjectButton from './ProjectButton';
import ProjectMedia from './ProjectMedia';
import github from "../../../../Icons/github.svg";
import LanguagesGraph from './LanguagesGraph';

function GitHubProject(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [gitHubRepo, setGitHubRepo] = useState();
    const [gitHubRepoLanguages, setGitHubRepoLanguages] = useState();
    // const [totalLines, setTotalLines] = useState();

    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const [projectState, setProjectState] = useState({
        projectName: '',
        githubLink: '',
        githubCreated: '',
        githubUpdated: '',
        projectDescription: ''
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
    const [projectBorderBottom, setProjectBorderBottom] = useState({
        right: '0px',
        top: '0px',
        width: 0,
        height: '2px',
        position: 'absolute',
        backgroundColor: 'white',
        transition: 'all .25s ease-out',
    });
    const [labelStyle, setLabelStyle] = useState({

        transition: 'all .15s ease-out',
        color: "white",
    });

    const renderDate = (dateInput) => {

        const date = new Date(dateInput)
        const formattedDate = date.toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "short",
        });
        return formattedDate



    }

    const onMouseEnter = () => {
        setDescriptionVisible(true);
        setLabelStyle({
            ...labelStyle,
            color: "#ff4240",
        });
        setProjectBorderTop({
            ...projectBorderTop,
            backgroundColor: "#ff4240",
            width: 'calc(100% - 2px)',
        });
        setProjectBorderBottom({
            ...projectBorderBottom,
            backgroundColor: "#ff4240",
            width: 'calc(100% - 2px)',
        });

    };

    const onMouseLeave = () => {
        setLabelStyle({
            ...labelStyle,
            color: "white",
        });

        setProjectBorderTop({
            ...projectBorderTop,
            backgroundColor: 'white',
            width: 0,
        });
        setProjectBorderBottom({
            ...projectBorderBottom,
            backgroundColor: 'white',
            width: 0,
        });

    };


    useEffect(() => {
        fetch(`https://api.github.com/repos/erik-t-irgens/${props.repo}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                } else {
                    return response.json()
                }
            })
            .then((jsonifiedResponse) => {

                setGitHubRepo(jsonifiedResponse)
                setProjectState({
                    projectName: jsonifiedResponse.name,
                    githubLink: jsonifiedResponse.html_url,
                    githubCreated: jsonifiedResponse.created_at,
                    githubUpdated: renderDate(jsonifiedResponse.updated_at),
                    projectDescription: jsonifiedResponse.description,
                });
                fetch(`https://api.github.com/repos/erik-t-irgens/${props.repo}/languages`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`${response.status}: ${response.statusText}`);
                        } else {
                            return response.json()
                        }
                    })
                    .then((jsonifiedResponseLanguages) => {

                        setGitHubRepoLanguages(Object.entries(jsonifiedResponseLanguages))
                        setIsLoaded(true)

                    })
                    .catch((error) => {
                        setError(error.description)
                        setIsLoaded(true)
                    });
            })
            .catch((error) => {
                setError(error.description)
                setIsLoaded(true)
            });
    }, [])

    if (error) {
        return <h1>Error: {error}</h1>;
    } else if (!isLoaded) {
        return <h1>...Loading...</h1>;
    } else {
        return (
            <React.Fragment>
                {/* <div style={{ color: "white", display: 'grid', gridTemplate: "auto auto auto" }}>
                    <h1>{gitHubRepo.name}</h1>
                    <p>{gitHubRepo.description}</p>
                    <a href={gitHubRepo.html_url} target="_blank">GitHub Repository</a>
                    <p>Created: {gitHubRepo.created_at}</p>
                    <p>Last Updated: {gitHubRepo.updated_at}</p>
                    {gitHubRepoLanguages.map(language =>
                        <>
                            <p>Language: {language[0]}</p>
                            <p>Lines: {language[1]}</p>
                        </>
                    )}
                </div> */}


                <div style={props.active ? { opacity: "1", transition: 'all 1.5s ease-in-out' } : { display: "none", opacity: "0", transition: 'all 1.5s ease-in-out', }}
                    className="project"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>

                    <div >

                        <h3 className='project-github-name' style={{ labelStyle }}>
                            {projectState.projectName}
                        </h3>
                        <div className='project-content-grid'>

                            <div className='project-media-github'>


                                <LanguagesGraph gitHubRepoLanguages={gitHubRepoLanguages}></LanguagesGraph>
                                <p>Last updated</p>
                                <p>{projectState.githubUpdated}</p>

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
                        <div style={projectBorderTop} className="project-border project-border-top" />
                        <div style={projectBorderBottom} className="project-border project-border-bottom" />

                    </div>
                </div>

            </React.Fragment >


        );
    }
}

export default GitHubProject;