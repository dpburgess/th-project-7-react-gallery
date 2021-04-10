import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Navigation from "./Components/Navigation";
import Results from "./Components/Results";
import Search from "./Components/Search";
import NotFound from "./Components/NotFound";
import axios from "axios";
import apiKey from "./config";


class App extends Component {

  state = {
    path: '',
    search: '',
    images: [],
    loading: true,
    treeImages: [],
    spaceImages: [],
    arcticImages: [],
  }

  captureUrl(){
        let pathname = window.location.href;
        this.setState({
        path: pathname
        });
  }

  componentDidMount(){

    this.performSearch();
    this.searchTrees();
    this.searchSpace();
    this.searchArctic();
  }

  performSearch = (searchTerm = 'trees,arctic,space') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)
    .then((response) => {
      this.setState({
        search: searchTerm,
        images: response.data.photos.photo,
        loading: false
      });
    })
    .catch((error) => {
      console.log("Error fetching and parsing data", error);
    })
  }

  searchTrees = (searchTerm = "trees") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)
    .then((response) => {
      this.setState({
        search: searchTerm,
        treeImages: response.data.photos.photo,
        loading: false
      });
    })
    .catch((error) => {
      console.log("Error fetching and parsing data", error);
    })
  }

  searchSpace = (searchTerm = "space") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)
    .then((response) => {
      this.setState({
        search: searchTerm,
        spaceImages: response.data.photos.photo,
        loading: false
      });
    })
    .catch((error) => {
      console.log("Error fetching and parsing data", error);
    })
  }

  searchArctic = (searchTerm = "arctic") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)
    .then((response) => {
      this.setState({
        search: searchTerm,
        arcticImages: response.data.photos.photo,
        loading: false
      });
    })
    .catch((error) => {
      console.log("Error fetching and parsing data", error);
    })
  }

  acceptAWord = (word) => {
    return word;
  }

render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div>
            <Search onSearch={this.performSearch} />
          </div>
          <div>
            <Navigation />
          </div>
          <div className="main-content">
          <Switch>            
            <Redirect exact from="/" to="/search" />
            <Route exact path="/search">
              {
                (this.state.loading)
                ? <div><p>Loading...</p></div>
                : <Results query={this.state.images}/>
              }
            </Route>
            <Route path="/search/trees" render={() => <Results query={this.state.treeImages} />} />
            <Route path="/search/space" render={() => <Results query={this.state.spaceImages} />} />
            <Route path="/search/arctic" render={() => <Results query={this.state.arcticImages} />} />
            <Route path="/search/:term">
              {
                // this only works after the API has been hit for images, so I can pass them to Results via state.images
                (this.state.loading)
                ? <div><p>Loading...</p></div>
                : <Results query={this.state.images}/>
              }
            </Route> 
            <Route component={NotFound} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
