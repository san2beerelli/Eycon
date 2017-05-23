import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {RFIcon} from '../../components';

class Header extends Component {
    constructor(props){
        super(props);
      this.githubIconClickHandler = this.githubIconClickHandler.bind(this);  
    }
    githubIconClickHandler(){
        window.open("https://github.com/san2beerelli/Eycon","_blank");
    }
    render () {
        const {githubIcon} = style;
        
        return (
             <AppBar 
                title= "Eycon" 
                style = {{ background: `rgba(81,87,101,1)`,
                color : '#FC6F58'}}
                showMenuIconButton = {false}
                iconElementRight = { 
                    <div style={{display:'flex'}}>
                        <div style={githubIcon} onClick={this.githubIconClickHandler}>
                            <RFIcon name="download" size="2x" color="#CFDBE5" />
                        </div>
                        <div style={githubIcon} onClick={this.githubIconClickHandler}>
                            <RFIcon name="github" size="2x" color="#CFDBE5" />
                        </div>
                    </div>
                }
             />
        )
    }
}

const style = {
    githubIcon:{
        margin: 10,
        cursor:'pointer'
    }
}

export default Header