import React, {Component} from "react";
import { Link } from "react-router-dom";
import LinkTo from './LinkTo'

import Button from "./Button";
import TextField from '@mui/material/TextField';


class RegisterForm extends Component{

    render(){
        return(
            <form action="" className="login_form" >
               
                <div >
                    <TextField id="standard-basic" sx={{width: 300}} inputStyle={{fontWeight: 700 } } label="Username" variant="standard" />
                </div>
                <div >
                    <TextField id="standard-basic" sx={{width: 300}} inputStyle={{fontWeight: 700 } } label="Email" variant="standard" />
                </div>
                <div >
                    <TextField id="standard-basic" sx={{width: 300}} inputStyle={{fontWeight: 700 } } label="Phone No." variant="standard" />
                </div>
                <div >
                    <TextField id="standard-basic" sx={{width: 300}} label="Password" variant="standard" />
                    <p className="password"> Passwords must be 18 charachters long and can't be easy
                    to guess. commonly used and silly passwords are not permitted </p>

                </div>

                <div className="checkbox_field" >
                    <input  type="checkbox"  />
                    <label  > 
                    <p> By creating my account, I agree to <span> Terms & Conditions</span> 
                    I have read the <span>legal Notice</span> and <span>Privacy Policy</span> 
                    </p>
                    </label>
                </div>
                <div>
                    <Button text="Login"/>
                </div>
                <Link to='/' >  <LinkTo text="log in wth an Existing account" /> </Link>
                
            </form>
        );
    }
    
}

export default RegisterForm;