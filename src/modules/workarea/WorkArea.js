import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {RFIcon} from '../../components';

class WorkArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            bgRadius: 2
        }
    }
    render () {
        const {workAreaStyle} = style;
        const {bgRadius, bgGradient, selectedIcon, fontSize,  fontGradient, textShadow} = this.state;
        let shadow = "0 0px 0px rgba(0, 0, 0, 0)";
        if(textShadow){
            shadow = "0 0.5px 1px rgba(1, 0, 0, 0.3)"
        }
        
        return (
            <Paper id="workAreaEl" style={{...workAreaStyle,
                        borderRadius: `${bgRadius}px`,
                        background: `-webkit-linear-gradient(${bgGradient})`
                        }} zDepth={2}>
                <RFIcon name={selectedIcon} size="5x" gradient={fontGradient}
                        fontSize={`${fontSize}em`} color="#000000"
                        textShadow={`${shadow}`} />
                        
            </Paper>
        )
    }
}

const style = {
    workAreaStyle:{
        width : 400,
        height : 400,
        margin : 20,
        display: 'flex',
        flexDirection : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf : 'center'
    }
}

export default WorkArea