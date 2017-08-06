import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

    }
    
    render() {
        return(
            <div className='container'>
                <div className='search-bar'>
                    <input 
                        onChange={event => this.onInputChange(event.target.value)} 
                        placeholder='Search for a video'/>
                </div>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;