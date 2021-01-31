import React from 'react';
import SearchBar from './SearchBar'


export default class SearchBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }
    // going mute and off cam, eating :)

    handleChange(event) {
        this.setState({value: event.target.value})
    }


    render() {
        return (
            <h1>
                {/* <SearchBar /> */}
            </h1>
        )
    }
}