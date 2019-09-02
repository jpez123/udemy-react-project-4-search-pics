//Import libraries/components
import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

//Parent Component
class App extends React.Component {
    //Variables
    SecretKey = 'b8edc59d73596efeacf498acb799e9e79a2a072eb283a00722cc1fad0defaec4';
    state = { images: [] }

    //Event handler (Passed down) - unsplash API
    onSearchSubmit = async (term) => {
        //Call to search term on API
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });

        //Sets the state after call
        this.setState({ images: response.data.results });
    }

    //Render method
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

//Render onto DOM
export default App;