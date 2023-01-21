import React, {Component} from "react";
import logo_girl from '../images/logo_girl.png'
import Button from "./Button";
import { Link } from "react-router-dom";
import LinkTo from './LinkTo'
import TextField from '@mui/material/TextField';
class LoginForm extends Component{


    render(){
        return(
            <form action="" className="login_form" >
                <img src={logo_girl} alt="" srcset="" />
                <div >
                <TextField id="standard-basic" sx={{width: 300}} inputStyle={{fontWeight: 700 } } label="Username or Email" variant="standard" />

                </div>
                <div >
                <TextField id="standard-basic" sx={{width: 300}} label="Password" variant="standard" />

                <p className="password"> Passwords must be 18 charachters long and can't be easy
                to guess. commonly used and silly passwords are not permitted </p>

                </div>

                <div className="checkbox_field" >
                <input  type="checkbox"  />
                <label > <p> Remember me </p> </label>
                </div>
                <div>
                <Button text="Login"/>
                </div>
                <Link to='register' >  <LinkTo text="Create a new Account" /> </Link>
            </form>
        );
    }
    
}

export default LoginForm;