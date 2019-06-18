
//Component is an additional import to App.js class
// React is a defult class
//component are the classes whch extend and inherit classes from a react library
import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './index.css'
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';


const cookies_key = 'NOTES';

//regular function 
function roar(message) {
    console.log(message)
}

//es6 function
/*const roar=(message)=> {
    console.log(message);
}
*/
//arrow function are anonymous. It doesn't create its own this object.Refers to the parent object or object around it.
const voice = (message) => {
    console.log(message);
}
roar('roaaaar');
voice('Hello');


class App extends Component {
    //super method is invoked so we can call constructor of the extanded component
    constructor() {
        super();

        //state object. Represent underlying data behind our component
        // event parameter will be what the onChange fires whenever the user types 
        // text is a property
        this.state = {
            text: '',
            notes: []
        }
    }
    // fires when component loaded to the dom of the application
    componentDidMount() {
        // const notes = read_cookie(cookies_key);
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        // store them as an initial state . 
        // update our state to our local state
        this.setState({ notes });
    }
    submit() {
        //const notes=this.state.notes;
        //crete a new object 
        //const newNote={text:this.state.text }
        //note.push(newNote);
        //this.setState({notes: notes});
        //declare varuables in destructing object 

        const { notes, text } = this.state;
        // creating a new object. Object will have one key
        //const newNote={text: this.state.text}; 
        //const newNote={ text };
        notes.push({ text });
        this.setState({ notes });
        localStorage.setItem('notes',JSON.stringify(notes));
        // save cookie on the browser 
        bake_cookie(cookies_key, this.state.notes);
    }

    clear() {
        delete_cookie(cookies_key);
        this.setState({ notes: [] });
    }

    clearIndividual(e) {
        delete_cookie(cookies_key);
        //set state to an empty array
        //this.setState({notes: []})
        let { notes } = this.state;
        notes.splice(e, 1);
        this.setState({ notes });
    }

    //render function outlines the JSH that we want to return as a structure for this compoent
    //return statment is needed to make sure that  a rander function is complete 
    //within return we write JSH which outline this component 
    //how to update state in a react: use this fucnction it recieves an object at it argument with the key pertining to the state that we want to update

   sortNotes(){
       let {notes}=this.state;
       notes.sort((prev,next)=>+prev.text>+next.text? 1:-1) ;
    //    notes.reverse();
       this.setState({notes});
   }

    editField(i,event) {
        // console.log(text);
        const {notes}=this.state;
        const input=event.target;
        notes[i].text=input.value;
        this.setState({ notes });
        localStorage.setItem('notes',JSON.stringify(notes));
        
        // console.log(this.state);
    }

    render() {
        return (
            <div>
                <h2>Note to Self</h2>
                <Form inline>
                    <FormControl onChange={event => this.setState({ text: event.target.value })} />
                    {' '}
                    <Button onClick={() => this.submit()}>Submit</Button>
                </Form>
                {this.state.notes.map((note, index) => {
                    return (
                        <div key={index}>
                            <Note className={'textNote'}i={index} editField={this.editField.bind(this)} note={note} />
                            <Button onClick={() => this.clearIndividual(index)} note={note}>Delete</Button>
                        </div>
                    )
                })
                }
                 <hr />
                <Button onClick={() => this.clear()}>Clear All Notes</Button>
                <div className='divider'/>
                <Button onClick={() => this.sortNotes()}>Sort All Notes</Button>
            </div>
        )
    }
}

// allows App class to be imported by other classes 
//what other files can access from this file
//if you are not using default, then you have to include what you are exporting a curly braces
export default App;

//state reprsents the local data relevent to a compoent. Represent the data relevent to
//this component proprty and fields
//State changes throughout the life of an application
//state can respond to user input and events

