import React, { Component } from 'react';
import { RFIcon } from '../../../components';

class GridItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected : false
        }
        this.onItemClickHandler = this.onItemClickHandler.bind(this);
    }
    onItemClickHandler(){
        this.setState({
            selected: true
        })
        this.props.onItemSelect(this.props.name);
    }
    componentWillReceiveProps(nextProps){
        let selected = false;
        if(nextProps.selectedIcon === nextProps.name){
            selected = true;
        }
        this.setState({
                selected
        });
    }
    render () {
        const {gridItemStyle} = style;
        const { name } = this.props;
        const { selected } = this.state;
        let bgColor = selected ? "#b1cfff" : "#ffffff";
        return (
            <div style={{ ...gridItemStyle , background: `${bgColor}` }} onClick={this.onItemClickHandler}>
               <RFIcon name={name}  size="3x" color="#000000"/>
            </div>
        )
    }
}

const style = {
    gridItemStyle:{
        margin : 4, 
        width: 100, 
        height:100,
        display: 'flex',
        flexDirection : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: 'solid' 
    }
}

export default GridItem