import React from "react"
import Button from "../../../../global/Button";

class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerText: '',
            bodyText: '',
            senderName: '',
            message: "Your message has been received. Thank you!",
            messageVisible: false
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeo5vFwawcKfF4dVE9cvw3tyliqurm_ZvA8jaLjTvkdCO79Hg/formResponse";

        try {
            const response = await fetch(url, {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                alert("Form submitted successfully. Thank you!");
                // You can add further actions here, such as clearing the form fields.
            } else {

            }
        } catch (error) {
            this.setState({ messageVisible: true });
            // setTimeout(this.setState({ messageVisible: false }),
            //     200000
            // )

        }
    };


    render() {
        return (
            <div >
                {this.state.messageVisible ? <div style={{ color: "white" }}><p>{this.state.message}</p></div> : null}

                <form id='gform' onSubmit={this.handleSubmit} className="contactForm" method="POST" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeo5vFwawcKfF4dVE9cvw3tyliqurm_ZvA8jaLjTvkdCO79Hg/formResponse">
                    <label for="entry.653361450">Email</label>
                    <input name="entry.653361450" type="email" placeholder="Email" required disabled={this.state.messageVisible}></input>
                    <label for="entry.653361450">Your Name</label>
                    <input name="entry.1876410479" type="text" placeholder="Name" required disabled={this.state.messageVisible}></input>
                    <label for="entry.653361450">Subject</label>
                    <input name="entry.1071617651" type="text" placeholder="Subject" required disabled={this.state.messageVisible}></input>
                    <label for="entry.653361450">Body</label>
                    <textarea name="entry.246720857" rows="4" cols="50" placeholder="Body" required disabled={this.state.messageVisible}></textarea>

                    <Button className='button-contact' style={{ position: "relative", marginBottom: "10vh" }} borderColor="white" labelColor="white" transitionColor="#80ffa2">Submit</Button>
                </form>

            </div >
        )
    }
}

export default EmailForm;