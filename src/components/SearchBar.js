//Import libraries
import React from 'react';

//Class Component
class SearchBar extends React.Component {
    //State
    state = { term: 'Hello world' };

    //Event Handler
    onFormSubmit = (event) => {
        event.preventDefault();

        //Sends the term back to the parent component
        this.props.onSubmit(this.state.term);
    }

    //Render Method
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

//Exports Component
export default SearchBar;