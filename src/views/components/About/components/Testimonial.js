import erik_transparent from '../../../../Backgrounds/erik_transparent.PNG'
import React from 'react';
import ProjectButton from '../../Portfolio/components/ProjectButton';
import linkedinIcon from './../../../../Icons/linkedin.svg'

function Testimonial(props) {




    return (
        <React.Fragment>
            <div>



                <div className="testimonialPhoto" style={{ backgroundImage: `url(${props.testimonialImage})` }}></div>
                <h3 className="testimonialContributor">{props.contributor}</h3>
                <h4 className="testimonialRelationship">{props.relationship}</h4>
                <div className="testimonialMessage">
                    {props.testimonial ? props.testimonial.map((testimonial, i) =>
                        <>
                            <p key={i}>{testimonial}</p>
                        </>
                    ) : null}

                </div >

                <ProjectButton
                    functionality={props.linkedin}
                    borderColor="white" labelColor="white">
                    <img className="social-icon-image" src={linkedinIcon} alt="Link to Testimonial writer's LinkedIn" />
                </ProjectButton>

            </div>
        </React.Fragment >


    );
}


export default Testimonial;