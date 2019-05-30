import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import $ from 'jquery';

let hasScrolled = false;

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        maxResult: 10,
        searchTerm: '',
        nextToken: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items,
            searchTerm: termFromSearchBar,
            nextToken: response.data.nextPageToken
        })
        console.log(response.data.nextPageToken)
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
    
    // handleScroll = () => {
    //     window.scroll(function() {
    //         if(window.scrollTop() == document.height() - window.height()) {
    //                alert("atBottom");
    //         }
    //     });


    hasScrolled = false;
    onScroll = () => {
        const self = this;
        $(window).scroll(function() {   
            if(!hasScrolled && $(window).scrollTop() + $(window).height() == $(document).height()) {
                // const response =
                hasScrolled = true;
                youtube.get('/search', {
                    params: {
                        q: self.state.searchTerm,
                        maxResult: 10,
                        pageToken: self.state.nextToken
                    }
                }).then((response => {
                    self.setState({
                        videos: self.state.videos.concat(response.data.items),
                        nextToken: response.data.nextPageToken
                    })
                    hasScrolled = false;
                    // console.log(response);
                }))
               
            }
            
         });
       }

    
    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll.bind(this));
    }
}

export default App;