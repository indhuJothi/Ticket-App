import React from "react";
import classes from './style.module.css'

class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state={name:'',
                    dob:'',email:'',mobile:'',roundway:'',oneway:'',nameErr:'',dobErr:'',emailErr:'',mobileErr:'',radioErr:'',fromErr:''};
        this.handlechange=this.handlechange.bind(this);
        this.handlesubmit=this.handlesubmit.bind(this);
        this.onValueChange=this.onValueChange.bind(this);
    }
    onValueChange(event) {
        this.setState({
          selectedOption: event.target.value
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
        let nameres=true,dobres=true,emailres=true,mobileres=true,radiores=true,fromres=true;
        let nameErr='',dobErr='',emailErr='',mobileErr='',radioErr='',fromErr='';
      
        var nameregex=/^[a-zA-Z\s]{3,15}$/,
        dobregex=/^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/,
        emailregex=/^[A-Za-z0-9+_.-]+@(.+)+\.(.+)$/,
        mobileregex = /^[6-9]\d{9}$/;
            if(this.state.name==='')
              {
                  nameErr='Enter your name';
                 this.setState({nameErr});
                 nameres= false;
            }
          else{
         
              if(nameregex.test(this.state.name)===false)
              {
                  nameErr="Enter a valid name";
                  this.setState({nameErr});
                  nameres= false;
              }
              else{
                this.setState({nameErr});
                nameres= true;
                }
            }
          if(this.state.dob==='')
            {
                dobErr='Enter your DOB';
                dobres= false;
                this.setState({dobErr});
               
            }
            else{
                if(dobregex.test(this.state.dob)===false){
                    dobErr='Enter a valid DOB';
                    this.setState({dobErr});
                    dobres=false;
                }
                else{
                    this.setState({dobErr});
                    dobres=true;
                }
            }
            if(this.state.email===''){
                emailErr='Enter your Email ';
                this.setState({emailErr});
                emailres=false;
            }
            else{
                if(emailregex.test(this.state.email)===false){
                    emailErr='Enter a valid email';
                    this.setState({emailErr});
                    emailres=false;
                }
                else{
                    this.setState({emailErr})
                    emailErr=true;
                }
            }
            if(this.state.mobile===''){
                mobileErr="Enter your mobile";
                this.setState({mobileErr});
                mobileres=false;
            }
            else{
                if(mobileregex.test(this.state.mobile)===false){
                    mobileErr="Enter a valid Number";
                    this.setState({mobileErr});
                    mobileres=false;
                }
                else{
                    this.setState({mobileErr})
                    mobileres=true;
                }
            }
            if(!this.state.selectedOption){
                radioErr='Choose any one option';
                this.setState({radioErr});
                radiores=false;
            }
            else{
                this.setState({radioErr});
                radiores=true;
            }
    }
  
    handlesubmit(event){
        event.preventDefault();
        this.valid();
     
        
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
               <div class={classes.error}>{this.state.dobErr}</div>
                </div>
                <div class='email'>
                    <label class={classes.label}>email: </label>
                    <input type='email' class={classes.input} name='email' placeholder="abc@domain.com"type='text' value={this.state.email} onChange={this.handlechange}/>
                    <div class={classes.error} >{this.state.emailErr}</div>
           
                </div>
                <div class='mobile'>
                    <label class={classes.label}>Mobile: </label>
                    <input type='text' class={classes.input} name='mobile' placeholder='Mobile Number' type='text' value={this.state.mobile} onChange={this.handlechange}/>
                    <div class={classes.error}>{this.state.mobileErr}</div>
                </div>
                <div class={classes.travetype}>
                    <label class={classes.label}>Oneway: </label>
                    <input class={classes.onelabel} value='oneway' type='radio' checked={this.state.selectedOption ==="oneway"}
              onChange={this.onValueChange}/>
                    <label class={classes.label} >Roundway: </label>
                    <input class={classes.onelabel} value='roundway' type='radio' checked={this.state.selectedOption === "roundway"}
              onChange={this.onValueChange}/>            
               <div class={classes.error} >{this.state.radioErr}</div>
                </div>
               
          
             {this.state.selectedOption==='oneway'?  
               <div   >
               <label class={classes.label}>From</label>
               <select class={classes.input} class='select' onChange={this.handlechange}>
                  <option value='select' >select</option>
                   <option value='chennai'>Chennai</option>
                   <option value='Cuddalore' >Cuddalore</option>
                   <option value='Trichy'>Trichy</option>
               </select>
               <div class={classes.error}>{this.state.fromErr}</div>
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