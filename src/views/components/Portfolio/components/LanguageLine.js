import React, { useState } from 'react';


function LanguageLine(props) {


    const [language] = useState(props.language)

    const [colorObject] = useState(
        {
            "JavaScript": "#ffb619",
            "C#": "#42f5d1",
            "CSS": "#7081ff",
            "HTML": "#7243d1"
        }
    );



    return (
        <React.Fragment>


            <div className="languagePercentage" style={{ width: props.widthNumber + '%', backgroundColor: colorObject[language] }}></div>

        </React.Fragment >


    );
}


export default LanguageLine;