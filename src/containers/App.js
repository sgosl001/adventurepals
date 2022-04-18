import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pals: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ pals: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const filteredPals = this.state.pals.filter(pals => {
      return pals.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    if (this.state.pals.length === 0) {
      return <h1>Loading</h1>
    } else {
      return(
        <div className="tc">
          <h1>AdventurePals</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList pals={filteredPals}/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;