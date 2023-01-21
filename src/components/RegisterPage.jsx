import React, {Component} from "react";
import RegisterForm from "./RegsiterForm";
import RegisterText from "./RegisterText";
import logo_girl from '../images/logo_girl.png'

class RegisterPage extends Component{

    render(){
        return(
            <div className='main' >
            <div>
            <img className="logo_r" src={logo_girl} alt="" srcset="" />
            <RegisterText />
            </div>
            <div>
            <RegisterForm />
            </div>
          </div>

        );
    }
}

export default RegisterPage
