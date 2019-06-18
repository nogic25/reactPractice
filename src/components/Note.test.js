import React from 'react';
//allow to fully mount note component into a varuable
import {mount} from 'enzyme';
import Note from './Note';
// global props declaration 
const props ={note: {text:'test note'}};

// we can test the structure of the rendor function, 
//how it manipulates the states and what happens whe user clicks on the button or types  characters into input 
describe('Note',()=>{
// spread operator provides a convenient syntex that allows to expend arrays and objects.
//Spread operator with objects copies all of it keys and values and inserts within a new one 
// need to give note component a note attribute,this is an object with the test property
let note=mount(<Note {...props}/>);

console.log({...props});

//it is similar to describe. It takes a string as it first parameter to describe what we are actually testing
//enzyme provides a debug function which allows to see the result of the mounting component by converting into a string form 
it('renders the note text', ()=>{
    console.log(note.debug());
    //allow to assert that certain part of the note need to match certain strings or varuables 
    expect(note.find('p').text()).toEqual(props.note.text);
})

})
//example of a spread operator 
/*const triplePrint =(a,b,c)=>{
    console.log(`${a} ${b} ${c}`)};
const message =['react','is','awesome'];
triplePrint(...message);
*/