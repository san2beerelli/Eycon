import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {RFIcon} from '../../components';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

class Header extends Component {
    constructor(props){
        super(props);
      this.githubIconClickHandler = this.githubIconClickHandler.bind(this);  
      this.downLoadClickHandler = this.downLoadClickHandler.bind(this);  
    }
    githubIconClickHandler(){
        window.open("https://github.com/san2beerelli/Eycon","_blank");
    }
    downLoadClickHandler(){
        let el = document.getElementById("workAreaEl");
        domtoimage.toBlob(el)
        .then((blob)=>{
            FileSaver.saveAs(blob,'icon.png');
        }).catch((err)=>{
            console.error('oops, something went wrong!', error);
        })
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
                        <div style={githubIcon} onClick={this.downLoadClickHandler}>
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