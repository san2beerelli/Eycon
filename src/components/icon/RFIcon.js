import React, { Component } from 'react';
import styled from 'styled-components';
import RFUrl from './RFUrl';

let Icon;
class RFIcon extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        let { type } = this.props;
        type = type ? type : 'fa';
        RFUrl.setUrl(type);
    }
    faIcon(){
        let {name,size,spin,rotate} = this.props
        size = (size)? size : 'lg';
        name = (name)? name : 'flag';
        let cName = `fa fa-${name} fa-${size}`;
        if(spin === true){
            cName =`${cName} fa-spin`;
        }
        if(rotate)
            cName =`${cName} fa-rotate-${rotate}`;

        return <Icon className={`${cName}`} />
    }
    mdIcon(){
        let {name,spin,rotate} = this.props
        name = (name)? name : 'face';
        return <Icon className="material-icons">
                  {name}
                </Icon>
    }
    render () {
        let {name,size,spin,rotate, type} = this.props
        const {color,textShadow,fontSize,gradient} = this.props;
        const styleObj = {};
        if(color) 
            styleObj['color'] = color;
        if(textShadow)
            styleObj['textShadow'] = textShadow;
        if(fontSize)
            styleObj['fontSize'] = fontSize;
        if(gradient){
            styleObj['background'] = `-webkit-linear-gradient(${gradient})`;
            styleObj['-webkit-background-clip'] = 'text';
            styleObj['-webkit-text-fill-color'] = 'transparent';
        }
        Icon = styled.i`${styleObj}`;
        size = (size)? size : 'lg';
        name = (name)? name : 'flag';
        type = (type) ? type : 'fa'; // fa/md
        let cName = `fa fa-${name} fa-${size}`;
        if(spin == true)
            cName =`${cName} fa-spin`;
        if(rotate)
            cName =`${cName} fa-rotate-${rotate}`;
         return (type == "md") ? this.mdIcon() : this.faIcon();
    }
}

export default RFIcon