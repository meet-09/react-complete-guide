import React,{Component} from 'react';
import classes from './App.module.css';
import Person from './Person/Person'

class App extends Component{
  state = {
    persons : [
      {id:"asdf1",name:"MEET",age:"23"},
      {id:"asdf2",name:"ANKIT",age:"27"},
      {id:"asdf3",name:"RISHI",age:"24"}
    ],
    showPersons : false
  };

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
    let persons = null
    let btnClass = [classes.Button]

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
      btnClass = classes.Red
    }

    const assignedClasses = []
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red)
    }
    if(this.state.persons.length <= 1 ){
      assignedClasses.push(classes.bold)
    }

    return (
      <div className={classes.App}>
        <h1>Hi i am a React app</h1>
        <p className={assignedClasses.join(' ')}>This is really working!!!</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
