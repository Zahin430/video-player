import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

// Creating a class based component to hold all the states of the application

class App extends React.Component {
    // Callback when the form is submitted received from the child component
    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        })
    };
    
    render() {
        return (
            <div className = "ui container">
                <SearchBar onFormSubmit = {this.onTermSubmit}/>
            </div>
        );
    }
}

export default App;