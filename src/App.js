import React, { Component } from 'react';
import './App.css';
import Mike from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'max', age: 29},
      {name: 'manu', age: 79},
      {name: 'stephanie', age: 789}
    ],
    showPersons: false
  };
  switchNameHandler = (newName) => {
    this.setState({persons: [
      {name: 'max', age: 30},
      {name: newName, age: 90},
      {name: 'stephanie', age: 89}
       ]
      }
    )
  };
  nameChangeHandler = (something) => {
    this.setState({persons: [
      {name: 'max', age: 30},
      {name: something.target.value, age: 120},
      {name: 'stephanie', age: 70}
       ]
      }
    )
  };
  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  };
  render() {
    return (
      <div className="App">
        <button className='button_c' onClick={ this.togglePersonHandler }> Switch Name</button>
        
        <div>
          <Mike name={this.state.persons[0].name}
                age={this.state.persons[0].age}> hello world
          </Mike>

          <Mike name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={ this.switchNameHandler.bind(this, 'Jannet') }
                change={this.nameChangeHandler}> hello world
          </Mike>

          <Mike name={this.state.persons[2].name}
                age={this.state.persons[2].age}> hello world
          </Mike>
        </div> 
      
      </div>
    );
  }
}

export default App;
