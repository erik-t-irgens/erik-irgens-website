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
            "HTML": "#7243d1"
        }
    );

    const [totalLines, setTotalLines] = useState({ "totalLineCount": 0 })

    useEffect(() => {
        // debugger;
        if (props.gitHubRepoLanguages) {
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

            <div className="languageGraph">
                <h4>Languages</h4>

                <div className="languagePercentageBar">

                    {props.gitHubRepoLanguages ? props.gitHubRepoLanguages.map((language, i) =>
                        <>
                            <LanguageLine widthNumber={(Math.round(100 * (language[1] / totalLines.totalLineCount)))} key={i} totalLines={totalLines} lines={language[1]} language={language[0]}></LanguageLine>
                        </>
                    ) : null}
                </div>

                <div className='languageList'>
                    {props.gitHubRepoLanguages ? props.gitHubRepoLanguages.map((language, i) =>
                        <>
                            <p key={i} className="languageItem" style={{ color: colorObject[language[0]] }}>{language[0]}, {(Math.round(100 * (language[1] / totalLines.totalLineCount), 1))}%</p>
                        </>
                    ) : null}
                </div>
            </div>






        </React.Fragment >


    );
}


export default LanguagesGraph;
