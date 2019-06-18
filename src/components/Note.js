import React, {Component } from 'react';

class Note extends Component{

    state ={
        isEditing: false

    }
    edit(){
        this.setState({
            isEditing:true
        })
    }
    stopEdit(){
        this.setState({
            isEditing:false
        })
    }
   
    render(){
        return (
            <div className='note'>
            {this.state.isEditing
                ?<input className={'input'}
                // placeholder={this.props.note.text} 
                    onChange={(event)=>this.props.editField(this.props.i,event)}
                    onBlur={()=>{this.stopEdit()}}/>
                :<p onClick={()=>{this.edit()}}>{this.props.note.text}</p>}
             
            </div>
        )
    }
}

export default Note;

//props to get data of other components