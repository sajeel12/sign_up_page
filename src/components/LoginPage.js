import React,{Component} from "react";
import LoginForm from "./LoginForm";
import LoginText from './LoginText';


class LoginPage extends Component{

    render(){
        return(
            <div className='main' >
            <div>
            <LoginText />
            </div>
            <div>
            <LoginForm   />
            </div>
          </div>

        );
    }
}

export default LoginPage;