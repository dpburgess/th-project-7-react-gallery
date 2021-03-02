import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Results from "./Components/Results";
import Search from "./Components/Search";
import NotFound from "./Components/NotFound";
import axios from "axios";
import apiKey from "./config";

export default class App extends Component {

  state = {
    images: [],
    loading: true,
    treeImages: [],
    spaceImages: [],
    arcticImages: [],
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
        arcticImages: response.data.photos.photo,
        loading: false
      });
    })
    .catch((error) => {
      console.log("Error fetching and parsing data", error);
    })
  }

  

render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div>
            <h1>Title Page</h1>
            <Search onSearch={this.performSearch} />
          </div>
          <div>
            <Navigation />
          </div>
          <div className="main-content">
          <Switch>
            {/*<Redirect to="/search" />*/}
            {/*<Route path="/trees" component={Trees} />*/}
            {/*<Route path="/trees" render={ () => <Trees /> } />*/}
            
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
            <Route path="/search/:term" render={() => <Results onChange={this.performSearch} />} /> {/*maybe this goes in the Results component*/}
            <Route component={NotFound} />

            {/*<Route path="/about" render={() => <About title="About" />} /> */}
            {/*inline rendering is used to pass props to components in a route */}
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
