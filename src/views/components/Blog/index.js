import React from "react";
import SectionWrapper from "../../../global/SectionWrapper";
import SectionTitle from "../../../global/SectionTitle"
import Button from '../../../global/Button'



import Image8 from "../../../Backgrounds/8.jpg"

class BlogSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionActive: false
        };
    }

    componentWillReceiveProps = () => {
        if (this.props.currentPos >= this.props.minRange && this.props.currentPos < this.props.maxRange && !this.state.sectionActive) {
            this.setSectionActive()

        }

    }
    setSectionActive = () => {
        this.setState({ sectionActive: true })
    }

    render() {

        const { sectionActive } = this.state
        return (



            <SectionWrapper
                sectionActive={this.state.sectionActive}
                idSet="blog-section"
                functionality={this.setSectionActive}
                className="section-wrapper"
                backgroundImage={Image8}
                transitionColor="#7081ff" color='black'
            >
                <SectionTitle direction='translate(100px, 0%)' visibility={sectionActive} color="white">Blog</SectionTitle>
                <Button borderColor="white" labelColor="white" transitionColor="#7081ff">Example</Button>

            </SectionWrapper>

        )
    }
}

export default BlogSection;
