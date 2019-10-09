import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from './ImageList';

const marginStyle = { marginTop: "10px" };

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 30 }
    });
    this.setState({ images: response.data.results });
    console.log(response.data.results);
  };

  render() {
    return (
      <div className="ui container" style={marginStyle}>
        <SearchBar submited={this.onSearchSubmit} />
        Found: {this.state.images.length} images.
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
