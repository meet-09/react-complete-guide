import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
  state = {
    persons : [
      {id:"asdf1",name:"MEET",age:"23"},
      {id:"asdf2",name:"ANKIT",age:"27"},
      {id:"asdf3",name:"RISHI",age:"24"}
    ],
    showPersons : false
  }

  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })
    
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = this.state.persons.slice()
    persons[personIndex] = person

    this.setState({
      persons : persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons:!doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice()
    persons.splice(personIndex,1)
    this.setState({persons:persons})
  }

  render(){
    const style = {
      backgroundColor:'white',
      font:"inherit",
      border:"1px solid blue",
      padding:"8px"
    }

    let persons = null

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            click = {() => this.deletePersonHandler(index)}
            name = {person.name}
            age = {person.age}
            key = {person.id}
            change = {(event) => this.nameChangeHandler(event,person.id)}
            />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi i am a React app</h1>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
