import React, { Component } from "react";

class LinkTo extends Component{

    render(){
        return(
            <>
                <p className="link"> {this.props.text} </p>
            </>
        );
    }
}
export default LinkTo