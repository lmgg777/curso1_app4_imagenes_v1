import React from "react";
import Clock from './Clock';

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault(); //previene comportamiento default del form
    this.props.submited(this.state.term); //guardar y enviar el valor como propiedad (prop) a App
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
        <Clock />
      </div>
    );
  }
}

export default SearchBar;
