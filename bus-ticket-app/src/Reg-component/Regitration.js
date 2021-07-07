import React from "react";
// import ReactDOM  from "react";
import classes from './style.module.css'

class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state={name:'',
                    dob:'',email:'',mobile:'',roundway:'',oneway:''};
        this.handlechange=this.handlechange.bind(this);
        this.handlesubmit=this.handlesubmit.bind(this);
        this.onValueChange=this.onValueChange.bind(this);
    }
    onValueChange(event) {
        this.setState({
          selectedOption: event.target.value,
          showblocks:'false'
        });
      }
    handlechange(event){
        const target= event.target;
        const name =target.name;
        const dob = target.dob;
        const email=target.email;
        const mobile= target.mobile;
     

        this.setState(
            {
            
                [name]:target.value,
                [dob]:target.value,
                [email]:target.value,
                [mobile]:target.value,
    
                  }
              )
    }
    handlesubmit(event){
        event.preventDefault();
        alert('Hello '+ this.state.name +''+this.state.selectedOption );
   
    }
    showblockss=true;
    render(){
        return <div className='main-container'>
            <div className={classes.heading}>Bus Ticket Booking</div>
            <form className={classes.form} onSubmit={this.handlesubmit}>
                <div className='Name'>
                    <label className={classes.label}>Name: </label>
                    <input className={classes.input} name='name' type='text' value={this.state.name} onChange={this.handlechange}/>
               <div className='error'></div>
                </div>
                <div className='dob'>
                    <label className={classes.label}>DOB: </label>
                    <input className={classes.input} name='dob' type='text' value={this.state.dob} onChange={this.handlechange}/>
               <div className='error'></div>
                </div>
                <div className='email'>
                    <label className={classes.label}>email: </label>
                    <input type='email' className={classes.input} name='email' type='text' value={this.state.email} onChange={this.handlechange}/>
               <div className='error'></div>
                </div>
                <div className='mobile'>
                    <label className={classes.label}>Mobile: </label>
                    <input type='text' className={classes.input} name='mobile' type='text' value={this.state.mobile} onChange={this.handlechange}/>
               <div className='error'></div>
                </div>
                <div className={classes.travetype}>
                    <label className={classes.onelabel}>oneway: </label>
                    <input className={classes.onelabel} value='oneway' type='radio' checked={this.state.selectedOption =="oneway"}
              onChange={this.onValueChange}/>
                    <label className={classes.onelabel}>roundway: </label>
                    <input className={classes.onelabel} value='roundway' type='radio' checked={this.state.selectedOption === "roundway"}
              onChange={this.onValueChange}/>            
               <div className='error'></div>
                </div>
               
                <div className='showblocks'>
                <div className='from'>
                    <label className={classes.label}>From: </label>
                    <input type='text' className={classes.input} name='from' type='text' value={this.state.from} onChange={this.handlechange}/>
               <div className='error'></div>
               </div>
               </div>
               {
                    this.showblockss? showblocks : null
               }
               if(showblockss? showblocks ? null);
             <input type='submit'></input>
               
            </form>
        </div>
    }
}
export {Registration}