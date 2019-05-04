import React from 'react';
import SearchBar from './SearchBar';
// Creating a class based component to hold all the states of the application

class App extends React.Component {
    
    render() {
        return (
            <div className = "ui container">
                <SearchBar />
            </div>
        );
    }
}

export default App;