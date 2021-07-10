import React, {Component} from 'react';

class Subscribe extends Component {
    state = {
        subscribed: false,
        text: "Добавить в список"
    };

    clickHandler = () => {
        this.setState({text: "Добавить в список", subscribed: true});
    };

    render () {
        let {text} = this.state;

        return (
            <button type = "button" onClick={this.clickHandler}>
                {text}
            </button>
        )
    }
}

export default Subscribe;