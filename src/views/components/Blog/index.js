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

    setSectionActive = () => {
        this.setState({ sectionActive: true })
    }

    render() {
        return (



            <SectionWrapper
                idSet="blog-section"
                functionality={this.setSectionActive}
                className="section-wrapper"
                backgroundImage={Image8}
                transitionColor="#7081ff" color='black'
            >
                <SectionTitle color="white">Blog</SectionTitle>
                <Button borderColor="white" labelColor="white" transitionColor="#7081ff">Example</Button>

            </SectionWrapper>

        )
    }
}

export default BlogSection;
