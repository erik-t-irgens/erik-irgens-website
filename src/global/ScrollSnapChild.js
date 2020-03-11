import React from 'react';

class ScrollSnapChild extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className='scroll-snap-child'>{this.props.children}</div>
        )
    }
}

export default ScrollSnapChild