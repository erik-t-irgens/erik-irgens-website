import React, { useState, useEffect } from 'react';
import ProjectButton from './ProjectButton';
import ProjectMedia from './ProjectMedia';
import github from "../../../../Icons/github.svg";
import LanguageLine from './LanguageLine';


function LanguagesGraph(props) {

    const [colorObject, setColorOjbect] = useState(
        {
            "JavaScript": "#ffb619",
            "C#": "#42f5d1",
            "CSS": "#7081ff",
            "HTML": "#80ffa2"
        }
    );

    const [totalLines, setTotalLines] = useState({"totalLineCount": 0})

    useEffect(() => {
        // debugger;
        if (props.gitHubRepoLanguages.length > 0) {
            let totalLineCount = 0;
            for (let i = 0; i < props.gitHubRepoLanguages.length; i++) {
                totalLineCount += props.gitHubRepoLanguages[i][1]
            }
            setTotalLines({
                totalLineCount
            });
        }

    }, []);


    return (
        <React.Fragment>

            <div>
                <h4>Languages</h4>

                <div className="languagePercentageBar">

                    {props.gitHubRepoLanguages ? props.gitHubRepoLanguages.map((language, i) =>
                        <>
                            <LanguageLine key={i} totalLine={totalLines} lines={language[1]} language={language[0]}></LanguageLine>
                        </>
                    ) : null}
                </div>

                <div className='languageList'>
                    {props.gitHubRepoLanguages ? props.gitHubRepoLanguages.map(language =>
                        <>
                            <p style={{ color: colorObject[language[0]] }}>{language[0]}, {(Math.round(100 * (language[1] / totalLines.totalLineCount)))}%</p>
                        </>
                    ) : null}
                </div>
            </div>






        </React.Fragment >


    );
}


export default LanguagesGraph;
