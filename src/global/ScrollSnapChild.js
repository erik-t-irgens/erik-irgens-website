import React from 'react';

class ScrollSnapChild extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div style={{ scrollSnapAlign: 'start' }}>{this.props.children}</div>
        )
    }
}

export default ScrollSnapChild