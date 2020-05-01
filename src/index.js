import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from  './components/video_list';

const YOUTUBE_API_KEY = 'AIzaSyC1hJpnoTOsj0z4CBugiHzCQ4GL2QhSobg';

// Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos:[] };

        YTSearch({key: YOUTUBE_API_KEY, term:'surfboards'}, (videos) => {
            this.setState( { videos });     // If key-value pair are the same name, ES6 can condense it to one word rather than it videos: videos 
        });

    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
    

}

// Take this component's generated HTML and put it on the page (in the Dom)
ReactDOM.render(<App />, document.querySelector('.container'));