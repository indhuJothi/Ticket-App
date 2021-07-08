import React from "react";
import classes from './style.module.css'

class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state={name:'',
                    dob:'',email:'',mobile:'',roundway:'',oneway:'',from:'select',to:'select',count:'',fromErr:'',nameErr:'',dobErr:'',emailErr:'',mobileErr:'',radioErr:'',fromErr:'',
                toErr:'',fromdate:'',fromdateErr:'',todate:'',todateErr:''};
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
        const  from=target.from;
        const to=target.to;
        const count=target.count;
        const fromdate=target.fromdate;
        const todate=target.todate;
     

        this.setState(
            {
            
                [name]:target.value,
                [dob]:target.value,
                [email]:target.value,
                [mobile]:target.value,
                [from]:target.value,
                [to]:target.value,
                [count]:target.value,
                [fromdate]:target.value,
                [todate]:target.value
    
                  }
              )
    }
  
    valid=()=>{
        let nameres=true,dobres=true,emailres=true,mobileres=true,radiores=true,fromres=true,tores=true,countres=true,fromdateres=true,todateres=true;
        let nameErr='',dobErr='',emailErr='',mobileErr='',radioErr='',fromErr='',toErr='',countErr='',fromdateErr='',todateErr='';
      
        var nameregex=/^[a-zA-Z\s]{3,15}$/,
        dobregex=/^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/,
        emailregex=/^[A-Za-z0-9+_.-]+@(.+)+\.(.+)$/,
        mobileregex = /^[6-9]\d{9}$/,
        countregex=/^([1-9]|1[0])$/,
        fromdateregex=/^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/,
        todateregex=/^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/;

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
            if(this.state.from==='select'){
                fromErr='choose one area';
                this.setState({fromErr});
                fromres=false;
            }
            else{
                this.setState({fromErr});
                fromres=true;
            }
            if(this.state.to==='select')
            {
                toErr='choose one place';
                this.setState({toErr});
                tores=false;
            }
            else{
                this.setState({toErr});
                tores=true;
            }
            if(this.state.count===''){
                countErr='Please Enter a Count of Passengers';
                this.setState({countErr});
                countres=false
            }
            else{
                if(countregex.test(this.state.count)===false)
                {
                    countErr='Count should be between 1 to 10';
                    this.setState({countErr});
                    countres=false;
                }
                else{
                    this.setState({countErr});
                    countres=true;
                }
            }
            if(this.state.fromdate==='')
            {
                fromdateErr='Please enter a from date';
                this.setState({fromdateErr});
                fromdateres=false;

            }
            else{
                if(fromdateregex.test(this.state.fromdate)===false){
                    fromdateErr='Please enter a valid date';
                    this.setState({fromdateErr});
                    fromdateres=false;
                }
                else{
                    this.setState({fromdateErr});
                    fromdateres=true;
                }
            }
            if(this.state.todate===''){
                todateErr='Please enter a to date';
                this.setState({todateErr});
                todateres=false;
            }
            else{
                if(todateregex.test(this.state.todate)===false){
                    todateErr='Please enter a valid date';
                    this.setState({todateErr});
                    todateres=false;
                }
                else{
                    this.setState({todateErr});
                    todateres=true;
                }
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
               <select class={classes.input} name='from' value={this.state.from} class='select' onChange={this.handlechange}>
                  <option value='select' >select</option>
                   <option value='chennai'>Chennai</option>
                   <option value='Cuddalore' >Cuddalore</option>
                   <option value='Trichy'>Trichy</option>
               </select>
               <div class={classes.error}>{this.state.fromErr}</div>
               <div >
                <label class={classes.label}>To</label>
                <select classe={classes.input} name='to'value={this.state.to}  onChange={this.handlechange} >
                    <option value='select'>select</option>
                    <option value='Madurai'>Madurai</option>
                    <option vlaue='Velore'>Velore</option>
                    <option value='Bangalore'>Bangalore</option>
                </select>
                </div>
                <div class={classes.error}>{this.state.toErr}</div>
            <div >
                <label class={classes.label}>BusType</label>
                <select class={classes.select}>
                    <option value='Non-AC 2S'>Non-AC 2S</option>
                    <option value='AC 2S'>AC 2S</option>
                    <option value='AC sleeper'>AC Sleeper</option>
                    <option value='Non-AC sleeper'>Non-AC Sleeper</option>
                </select>
                
            </div>
               <div >
                 <label class={classes.label}>Passangers Count</label>
                 <input class={classes.input} type="text"name='count' value={this.state.count}  onChange={this.handlechange} placeholder="No of Passangers"/> 
                 <div class={classes.error}>{this.state.countErr}</div>
             </div>
            <div >
                <label class={classes.label}>From Date<input type="text" name='fromdate' value={this.state.fromdate} placeholder="yyyy/mm/dd" onChange={this.handlechange} /></label>
                <div class={classes.error}>{this.state.fromdateErr}</div>
                </div>
           </div>
            :null}
       {this.state.selectedOption==='roundway'?  
          <div >
          <label class={classes.label}>From</label>
          <select class={classes.select} name='from' value={this.state.from}onChange={this.handlechange}>
             <option value='select'>select</option>
              <option value='Chennai'>Chennai</option>
              <option value='Cuddalore'>Cuddalore</option>
              <option value='Trichy'>Trichy</option>
          </select>
          <div class={classes.error} >{this.state.fromErr}</div>
                <label class={classes.label}>To</label>
                <select classe={classes.input} name='to' value={this.state.to} onChange={this.handlechange}>
                    <option value='select'>select</option>
                    <option value='Madurai'>Madurai</option>
                    <option vlaue='Velore'>Velore</option>
                    <option value='Bangalore'>Bangalore</option>
                </select>
                <div class={classes.error} >{this.state.toErr}</div>
            
            <div >
                <label class={classes.label}>BusType</label>
                <select class={classes.select}>
                    <option value='Non-AC 2S'>Non-AC 2S</option>
                    <option value='AC 2S'>AC 2S</option>
                    <option value='AC Sleeper'>AC Sleeper</option>
                    <option value='Non-AC Sleeper'>Non-AC Sleeper</option>
                </select>
                <div ></div>
            </div>
            <div >
                 <label class={classes.label}>Passangers Count</label>
                 <input class={classes.input} name='count' value={this.state.count} onChange={this.handlechange} type="text" placeholder="No of Passangers"/> 
                 <div class={classes.error}>{this.state.countErr}</div>
             </div>
            <div >
                <label class={classes.label}>From Date<input type="text" name='fromdate'value={this.state.fromdate}  onChange={this.handlechange} placeholder="yyyy/mm/dd" /></label>
                <div class={classes.error}>{this.state.fromdateErr}</div>
                </div>
            <div>
            <label class={classes.label}>Return Date<input type="text" name='todate' value={this.state.todate} onChange={this.handlechange} placeholder="yyyy/mm/dd" />
            </label>
            <div class={classes.error} >{this.state.todateErr}</div>
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