import React from "react";
import SectionWrapper from "../../../global/SectionWrapper";
import SectionTitle from "../../../global/SectionTitle"
import Button from '../../../global/Button'
import Testimonial from './components/Testimonial';
import Skill from './components/Skill';

import ScrollTo from 'react-scroll-into-view'

import Image11 from "../../../Backgrounds/11.jpg"
import ImageCarousel from "./components/ImageCarousel";

class AboutSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionActive: false,
            skillsActive: true,
            testimonialsActive: false,
        };
    }

    componentWillReceiveProps = () => {
        if (this.props.currentPos >= this.props.minRange && this.props.currentPos < this.props.maxRange && !this.state.sectionActive) {
            this.setSectionActive()

        }

    }
    handleClickTestimonials = () => {
        this.setState({
            skillsActive: false,
            testimonialsActive: true
        })
    }
    handleClickSkills = () => {
        this.setState({
            skillsActive: true,
            testimonialsActive: false
        })
    }

    setSectionActive = () => {
        this.setState({ sectionActive: true })
    }
    handleTestimonialsBorder = () => {
        if (this.state.testimonialsActive) {
            return 'about-button-border-active'
        } else {
            return 'about-button-border-disabled'
        }
    }

    handleSkillsBorder = () => {
        if (this.state.skillsActive) {
            return 'about-button-border-active'
        } else {
            return 'about-button-border-disabled'
        }
    }
    render() {

        const { sectionActive, skillsActive, testimonialsActive } = this.state
        return (


            <SectionWrapper
                sectionActive={this.state.sectionActive}
                idSet="about-section"
                className="section-wrapper about"
                functionality={this.setSectionActive}
                backgroundImage={Image11} transitionColor="#ffb619" color="black">

                <SectionTitle direction='translate(0, 20px)' visibility={sectionActive} color="white" >About</SectionTitle>

                <div style={sectionActive ? { opacity: "1", transition: 'all 1.5s ease-in-out' } : { opacity: "0", transition: 'all 1.5s ease-in-out', }} className='button-selection-grid'>
                    <div onClick={this.handleClickSkills} className='software-portfolio-button'>
                        <SectionTitle direction='translate (-10px, 0%)' visibility={sectionActive} color='white' >Skills
                            <div className={this.handleSkillsBorder()}></div></SectionTitle>

                    </div>
                    <div onClick={this.handleClickTestimonials} className='music-portfolio-button'>
                        <SectionTitle direction='translate (-10px, 0%)' visibility={sectionActive} color='white' >Testimonials
                            <div className={this.handleTestimonialsBorder()}></div>
                        </SectionTitle>

                    </div>

                </div>
                <div className="about-section-content-grid">



                    {skillsActive ?
                        <div style={sectionActive && skillsActive ? { opacity: "1", transition: 'all 1.5s ease-in-out' } : { opacity: "0", transition: 'all 1.5s ease-in-out', }} className="skillSectionMasterWrapper">
                            <div className="skillMasterWrapper">

                                <Skill skillMessage={[""]} skillTitle="Languages" skillPills={["JavaScript", "C#/.NET", "HTML", "SQL", "bash"]}></Skill>

                                <Skill skillMessage={[""]} skillTitle="Technologies" skillPills={["React", "Redux", "MySQL", "AWS", "Git", "GitHub", "ASP.NET Core", "Identity", "EFCore", "jQuery", "NPM", "webpack", "Jest", "MSTest", "Firebase", "Vite"]}></Skill>

                                <Skill skillMessage={[""]} skillTitle="Skills" skillPills={["RESTful APIs", "CI/CD", "Unit Testing", "Object oriented programming", "Test Driven Development", "Behavioral Driven Development", "Data Structures/Algorithms", "Technical Writing", "Documentation", "Program Management", "Product Management", "People Management"]}></Skill>



                            </div>
                        </div>
                        : null}


                    <ImageCarousel visibility={testimonialsActive} id='about-carousel'>

                        {testimonialsActive ?
                            <>

                                <Testimonial linkedin="https://www.linkedin.com/in/rachelbussert/" testimonialImage="https://media.licdn.com/dms/image/C5603AQEfW7FxIgT6pw/profile-displayphoto-shrink_400_400/0/1554336257911?e=1716422400&v=beta&t=iRkvHwzVtrJymDBpvL8RaiVTo3kph6PDe6NHjPl-ZXg" contributor="Rachel Bussert" relationship="rachel managed erik directly" testimonial={["I would like to provide a very much deserved letter of recommendation for Erik Irgens. I don’t think I can overstate the positive impact he has had on both our staff and students over the last three years.",

                                    "Erik is very adept at identifying stakeholder needs and acting on them. As an instructor, he was quick to recognize pain points students faced, even when students didn’t mention them. He consistently communicated these issues in a way that was solution oriented and resulted in many positive updates to both our curriculum and day to day operations. This continues to be true as Director of Teaching. Erik supported the teaching team in making changes to their day to day work that resulted in more balanced expectations and less burnout across the team, which were challenges we’d been struggling to resolve for years. The shift in anonymous feedback from that team after Erik took over made it clear that these changes made a real difference.",

                                    "Erik’s leadership has extended far beyond staff and students. Right from the beginning, he has taken on new projects and responsibilities that allowed him to grow in the role he was in. As a result, he has been instrumental in a number of major initiatives we’ve undertaken. The most recent was an overhaul of both our curriculum content and the staffing framework we used to ensure timely updates were made to that curriculum. His ability to get staff buy-in on what amounted to a very significant shift in who was responsible for curriculum updates and how those updates were executed allowed us to be far more adaptive to the needs of our students and to changing technology. He was able to reduce bottlenecks that had considerably slowed down progress in the past. Erik was also heavily involved in our more recent overhaul of the curriculum content, spearheading updates to the technical track that have streamlined students’ experience learning the languages we teach. The feedback received regarding those updates has been very positive.",

                                    "In the last few months, I’ve been most impressed with Erik’s ability to quickly build a rapport and shift the mood of a group in a very positive direction. Erik took over our final cohort as we wind down operations. Creating a positive atmosphere can be challenging in a mostly remote class, and these students were understandably distressed. Despite the difficult circumstances, he built a positive rapport with them very quickly, and the entire tone of the classroom has changed. The years we have spent teaching students are ending on a positive note, and Erik deserves nearly all the credit for that.",

                                    "I’d happily endorse Erik for a mid-level developer role, but I believe he’d be incredibly well suited to a position that involves curriculum or content writing or makes use of his exceptionable ability to translate the needs of students, staff, or end users into meaningful change. Ultimately, anywhere he lands will be incredibly fortunate to have him."]}></Testimonial>

                                <Testimonial linkedin="https://www.linkedin.com/in/remy-kullberg/" testimonialImage="https://media.licdn.com/dms/image/D5603AQEl_KHDaJ8wQA/profile-displayphoto-shrink_400_400/0/1687975870403?e=1716422400&v=beta&t=djZLfhctmJNmfvIuVrWzSxty3ezaWFkLRZ-UcL7tsEo" contributor="Remy (Brooke) Kullberg" relationship="remy managed erik directly" testimonial={["***Original recommendation from 2020***",
                                    "“Initiative” is the very first thing that comes to mind when I think of Erik Irgens. ",

                                    "Erik joined my team of teachers at Epicodus for 3 (too short) weeks to cover a leave of absence among our staff. Those weeks were enough time for Erik to leave a big impression within our organization.",

                                    "Erik is very personable, communicates well, and has proven coding skills. Those attributes were the initial reason why we selected Erik out of the candidates we interviewed. While we hired him to take on the basic responsibilities of answering student questions and grading projects for one class, Erik consistently went above and beyond. ",

                                    "Like what? Leading standups with custom walkthroughs, reporting on student feedback and making suggestions for curriculum improvements, compiling daily supplemental resources for students, conducting one-on-ones with students, and providing support to the other classes, all the while taking care of his basic responsibilities.",

                                    "The proof of his dedication was in the notes of gratitude that students would leave for Erik each week in our student feedback surveys. And just the same, each week in our staff meeting, Erik would receive shout-outs expressing gratitude for his support of his fellow teachers. This was quite notable.",

                                    "Erik absolutely has my vote of confidence. He would be an asset to any team.",
                                    "***My 2023 update*** ",
                                    "The long story, short, is that we rehired Erik for a full-time position as soon as we had an opening. Erik then increased his work and support across departments, and eventually he got promoted to Director of Teaching. Erik has a long list of accomplishments at Epicodus and has made a huge impact -- on students, staff, organizational processes, and curriculum projects. Erik is an incredible human and I was so lucky to work so closely with him! If you have the chance to work with Erik, count yourself lucky, too!"]}></Testimonial>
                                <Testimonial linkedin="https://www.linkedin.com/in/haleyseals-johnson/" testimonialImage="https://media.licdn.com/dms/image/D5635AQHmsZc0syixmw/profile-framedphoto-shrink_400_400/0/1709928917857?e=1711555200&v=beta&t=ccE-lfn2xjvKc3ctp0xUly5tK2Jv3RvPQ2rs_hTpfLo" contributor="Haley Seals-Johnson" relationship="erik was senior to haley but didn't manage haley directly" testimonial={["Erik is a delight to work with. In the year and a half that we've collaborated, he has always excelled in his own responsibilities and beyond that is organized, resulting in his delivering projects on time and exceeding expectations. Erik has a knack for connecting with people, which has benefitted team performance and company culture.",

                                    "One of Erik's particular skills is project and product management. He creates project plans using Google Sheets and various project management software and then follows through on the implementation of those plans. Specifically, I worked with Erik to support up to 4 cohorts of part-time students and his management style created a smooth workflow for students and staff alike.",

                                    "I wholeheartedly recommend Erik's abilities and experience as a wonderful addition to any team."]}></Testimonial>

                                <Testimonial linkedin="https://www.linkedin.com/in/patrick-osten/" testimonialImage="https://media.licdn.com/dms/image/C5603AQGpOtILRb3O9A/profile-displayphoto-shrink_400_400/0/1604861257561?e=1716422400&v=beta&t=tZLQqejUvFJEU1bQJGWQ9ve8MebppG_6OvuHiGaz8Ko" contributor="Patrick Osten" relationship="patrick reported directly to erik" testimonial={["Working with Erik had been an absolute pleasure. As a director and teacher he always fostered productive discussions grounded in core values, gave great advice and support to teachers and students alike, and was proactive in organizing complex projects and seeing them through to fruition.",
                                    "In my time working with him he oversaw and instructed hundreds of students that went through our program and later graduated into successful careers in software development. Erik took on the responsibility of directing, curating, and designing the video curriculum, improving the way we teach pair programming, organizing and motivating our teaching team, and adeptly aligning our curriculum with industry standards. I could always rely on Erik to have thoughtful and well researched approaches to any project. When difficult situations arose he approached them with compassion, humility, and altruism. Our conversations always felt welcoming and clarifying, and I was grateful for his ability to turn ideas into actionable change. Whatever he puts his mind to will get done, will be done well, and will be delightful to be a part of."]}></Testimonial>
                                <Testimonial linkedin="https://www.linkedin.com/in/adityasastry/" testimonialImage="https://media.licdn.com/dms/image/D4E03AQGbzf972l309Q/profile-displayphoto-shrink_400_400/0/1686770327086?e=1716422400&v=beta&t=BDtuxEfzlwIrzZITl_BOGEdBOUZGK2KDY_ucj39qIvU" contributor="Aditya Sastry" relationship="aditya was senior to erik but didn't manage erik directly" testimonial={["Working with Erik at Wheelhouse was a pleasure, he displayed an impressive desire for learning and always rose to the challenge even when given work beyond his immediate experience. Erik consistently outperformed my expectation in both front-end development in React.js as well as back-end Node.js but most importantly was able to navigate the pressure and ambiguity of working in a small fast-moving team. His work ethic and passion for continuous improvement make for a great asset on any team."]}></Testimonial>
                                <Testimonial linkedin="https://www.linkedin.com/in/dallas-slaughter/" testimonialImage="https://media.licdn.com/dms/image/C5603AQEbrwmS2VmdxA/profile-displayphoto-shrink_400_400/0/1650685077640?e=1716422400&v=beta&t=UDgH0zxh_a-O7GwsYm8LUkcqJTGvNyWGOEUK_3paVM4" contributor="Dallas Slaughter" relationship="dallas managed erik directly" testimonial={["Erik's ability to communicate effectively was the first thing I noticed about him. Specifically, the phrase 'music is a lot like code, it's all syntax and rules' sold me - though he said it even better than that. I could not be happier with the work he's done and the way he's done it, and he has helped set a new high bar for what I expect from interns. Explain something to him once and he has it - no need to repeat yourself or worry that it was misunderstood. He helps create an awesome feedback loop by giving honest feedback and accepting honest feedback without taking things personally. Anyone who has a chance to work with him should jump at the opportunity and thank the stars for their luck."]}></Testimonial>
                            </>
                            : null}
                    </ImageCarousel>

                    {/* <div className="about-skills-column">
                        <SkillSlider animationlength={.1} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="90%"
                            themeColor="#ffb619"
                            color='white' >React</SkillSlider>

                        <SkillSlider animationlength={.1} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="80%"
                            themeColor="#ffb619"
                            color='white' >CSS</SkillSlider>

                        <SkillSlider animationlength={.1} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="82%"
                            themeColor="#ffb619"
                            color='white' >JavaScript</SkillSlider>

                        <SkillSlider animationlength={.1} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="65%"
                            themeColor="#ffb619"
                            color='white' >Node.JS</SkillSlider>

                        <SkillSlider animationlength={.1} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="75%"
                            themeColor="#ffb619"
                            color='white' >C#/.NET</SkillSlider>

                        <SkillSlider animationlength={.1} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="50%"
                            themeColor="#ffb619"
                            color='white' >MySQL</SkillSlider>

                        <SkillSlider animationlength={.1} visibility={sectionActive}
                            backdropcolor="#161616"
                            width="53%"
                            themeColor="#ffb619"
                            color='white' >AWS</SkillSlider>



                    </div> */}

                </div>

                <ScrollTo alignToTop selector={`#portfolio-section`}>
                    <Button sectionActive={sectionActive} className="button" borderColor="white" labelColor="white" transitionColor="#ffb619">See my Portfolio</Button></ScrollTo>


                {this.props.children}
            </SectionWrapper>



        )
    }
}

export default AboutSection;
