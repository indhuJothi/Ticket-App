import React from "react";
import classes from './style.module.css'



class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state={name:'',
                    dob:'',email:'',mobile:'',roundway:'',oneway:'',nameErr:''};
        this.handlechange=this.handlechange.bind(this);
        this.handlesubmit=this.handlesubmit.bind(this);
        this.onValueChange=this.onValueChange.bind(this);
    }
    onValueChange(event) {
        this.setState({
          selectedOption: event.target.value,

    
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
    valid=()=>{
        let nameErr=''
        if(this.state.name=='')
        {
            nameErr='Enter your name'
        }
        if(nameErr){
            this.setState({nameErr});
            return false

        }
        
    }
    handlesubmit(event){
        event.preventDefault();
        const isvalid=this.valid();
     }
  
    render(){

        return <div >
            <div class={classes.heading}>Bus Ticket Booking</div>
            <form class={classes.form} onSubmit={this.handlesubmit}>
                <div class='Name'>
                    <label class={classes.label}>Name: </label>
                    <input class={classes.input} name='name'placeholder='Your Name' type='text' value={this.state.name} onChange={this.handlechange}/>
               <div class={classes.error}>{this.state.nameErr}</div>
                </div>
                <div class='dob'>
                    <label class={classes.label}>DOB: </label>
                    <input class={classes.input} name='dob' placeholder='yyyy/mm/dd'type='text' value={this.state.dob} onChange={this.handlechange}/>
               <div class={classes.error}>{this.dobErr}</div>
                </div>
                <div class='email'>
                    <label class={classes.label}>email: </label>
                    <input type='email' class={classes.input} name='email' placeholder="abc@domain.com"type='text' value={this.state.email} onChange={this.handlechange}/>
               <div ></div>
                </div>
                <div class='mobile'>
                    <label class={classes.label}>Mobile: </label>
                    <input type='text' class={classes.input} name='mobile' placeholder='Mobile Number' type='text' value={this.state.mobile} onChange={this.handlechange}/>
               <div ></div>
                </div>
                <div class={classes.travetype}>
                    <label class={classes.label}>Oneway: </label>
                    <input class={classes.onelabel} value='oneway' type='radio' checked={this.state.selectedOption =="oneway"}
              onChange={this.onValueChange}/>
                    <label class={classes.label} >Roundway: </label>
                    <input class={classes.onelabel} value='roundway' type='radio' checked={this.state.selectedOption === "roundway"}
              onChange={this.onValueChange}/>            
               <div ></div>
                </div>
               
          
             {this.state.selectedOption==='oneway'?  
               <div   >
               <label class={classes.label}>From</label>
               <select class={classes.input} onChange={this.handlechange}>
                  <option value={this.state.select}>select</option>
                   <option value={this.state.Chennai}>Chennai</option>
                   <option value={this.state.Cuddalore}>Cuddalore</option>
                   <option value={this.state.Trichy}>Trichy</option>
               </select>
               <div class={classes.error}></div>
               <div >
                <label class={classes.label}>To</label>
                <select classe={classes.input}>
                    <option value={this.state.select}>select</option>
                    <option value={this.state.Madurai}>Madurai</option>
                    <option vlaue={this.state.Velore}>Velore</option>
                    <option value={this.state.Bangalore}>Bangalore</option>
                </select>
                </div>
                <div >
                <label class={classes.label}>BusType</label>
                <select class={classes.select}>
                    <option>Non-AC 2S</option>
                    <option>AC 2S</option>
                    <option>AC Sleeper</option>
                    <option>Non-AC Sleeper</option>
                </select>
                <div ></div>
            </div>
               <div >
                 <label class={classes.label}>Passangers Count</label>
                 <input class={classes.input} type="text" placeholder="No of Passangers"/> 
                 <div ></div>
             </div>
            <div >
                <label class={classes.label}>From Date<input type="text" placeholder="yyyy/mm/dd" /></label>
                <div class="error" id='dateErr'></div>
                </div>
           </div>
            :null}
       {this.state.selectedOption==='roundway'?  
          <div >
          <label class={classes.label}>From</label>
          <select class={classes.select} onChange={this.handlechange}>
             <option value={this.state.select}>select</option>
              <option value={this.state.Chennai}>Chennai</option>
              <option value={this.state.Cuddalore}>Cuddalore</option>
              <option value={this.state.Trichy}>Trichy</option>
          </select>
        
                <label class={classes.label}>To</label>
                <select classe={classes.input}>
                    <option value={this.state.select}>select</option>
                    <option value={this.state.Madurai}>Madurai</option>
                    <option vlaue={this.state.Velore}>Velore</option>
                    <option value={this.state.Bangalore}>Bangalore</option>
                </select>
                <div ></div>
            
            <div >
                <label class={classes.label}>BusType</label>
                <select class={classes.select}>
                    <option>Non-AC 2S</option>
                    <option>AC 2S</option>
                    <option>AC Sleeper</option>
                    <option>Non-AC Sleeper</option>
                </select>
                <div ></div>
            </div>
            <div >
                 <label class={classes.label}>Passangers Count</label>
                 <input class={classes.input} type="text" placeholder="No of Passangers"/> 
                 <div ></div>
             </div>
            <div >
                <label class={classes.label}>From Date<input type="text" placeholder="yyyy/mm/dd" /></label>
                <div class="error" ></div>
                </div>
            <div>
            <label class={classes.label}>Return Date<input type="text" placeholder="yyyy/mm/dd" />
            </label>
            <div ></div>
            </div>
            <div >
          
        </div></div>
              
             :null}
  
 
             <input class={classes.submit} value='Book Ticket' type='submit'></input>
               
            </form>
        </div>
    }
}
export {Registration}