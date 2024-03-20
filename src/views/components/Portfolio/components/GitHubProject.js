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
                console.log(jsonifiedResponse)
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
                        console.log(jsonifiedResponseLanguages)
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


                <div
                    className="project"
                    onMouseEnter={onMouseEnter}>

                    <div>

                        <h3 className='project-github-name' style={{ width: '100%' }}>
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


                    </div>
                </div>

            </React.Fragment >


        );
    }
}

export default GitHubProject;