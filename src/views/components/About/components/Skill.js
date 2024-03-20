import React from "react";

function Skill(props) {


    return (
        <React.Fragment>



            <div className="skill-slide-skills">
                <h1 className="skill-title">{props.skillTitle}</h1>

                {/* <div className="skillMessage">
                    {props.skillMessage ? props.skillMessage.map((message, i) =>
                        <>
                            <p key={i}>{message}</p>
                        </>
                    ) : null}

                </div > */}
                <div className="skillPillWrapper">
                    {props.skillPills ? props.skillPills.map((skill, i) =>
                        <>
                            <div className="skillPill" key={i}>{skill}</div>
                        </>
                    ) : null}
                </div>
            </div>



        </React.Fragment >


    );
}


export default Skill;