import React, { useState, useEffect } from 'react';
import ProjectButton from './ProjectButton';
import ProjectMedia from './ProjectMedia';
import github from "../../../../Icons/github.svg";


function LanguageLine(props) {



    const [widthNumber, setWidthNumber] = useState()

    const [language] = useState(props.language)

    const [colorObject] = useState(
        {
            "JavaScript": "#ffb619",
            "C#": "#42f5d1",
            "CSS": "#7081ff",
            "HTML": "#80ffa2"
        }
    );



    return (
        <React.Fragment>


            <div className="languagePercentage" style={{ width: widthNumber, backgroundColor: colorObject[language], height: '20px', position: 'relative', display: "block" }}></div>

        </React.Fragment >


    );
}


export default LanguageLine;