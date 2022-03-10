import React , { Component } from 'react';
import { Cartlist } from './components/cart-list/cart-list.component';
import { SearchBox  } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => { return response.json() })
      .then((users) => this.setState({monsters: users}))
  }
  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>monster rolodex</h1>
        <SearchBox
          placeholder="search box"
          handleChange={
            (e) => { 
              this.setState(
                {searchField: e.target.value }
              );
            }
          }
        />
        <Cartlist monsters={filteredMonsters}/>
      </div>
    )
  }
}
export default App;
