import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const YOUTUBE_API_KEY = 'AIzaSyC1hJpnoTOsj0z4CBugiHzCQ4GL2QhSobg';

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );

}

// Take this component's generated HTML and put it on the page (in the Dom)
ReactDOM.render(<App />, document.querySelector('.container'));