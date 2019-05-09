import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

// Creating a class based component to hold all the states of the application
class App extends React.Component {
    // INITIALIZING STATE
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('react');
    }


    // Callback when the form is submitted received from the child component
    // THE RESPONSE IS RECEIVED WHEN AWAIT
    // As making a API REQUEST IS A ASYNC OPERATION
    // INTERACT USING ASYNC AWAIT
    // SO USING ASYNC AWAIT ALLOWS US TO WAIT UNTIL THE API REQUEST IS COMPLETED
    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        // UPDATING STATE WHEN USER SUBMITS THE FORM AND THE API REQUEST RECEIVED A RESPONSE
        // THE ONLY INFORMATION NEEDED IS THE DATA FROM THE RESPONSE
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0] 
        });
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    };

    // WHEN FORM IS SUBMIT THE CALLBACK onTermSubmit IS CALLED
    // THE STATE IS THEN CAPTURED IN HERE
    // THE VIDEOLIST COMPONENT IS PASSED INSIDE THE SEARCHBAR
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div  className="five wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;