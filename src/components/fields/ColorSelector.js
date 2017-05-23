import React, { Component } from 'react';
import ColorPicker from './ColorPicker';
import RFIcon from '../icon/RFIcon';

class ColorSelector extends Component {
    constructor(props){
        super(props);
        this.state = {
            colorsArr : [
                {id:1, val: '#000000'}
            ]
        }
        this.addColorClickHandler = this.addColorClickHandler.bind(this);
        this.onDeleteClickHandler = this.onDeleteClickHandler.bind(this);
        this.onColorChangeHandler = this.onColorChangeHandler.bind(this);
    }
    onColorChangeHandler(val,indx){
        let {colorsArr} = this.state;
        colorsArr[indx].val = val;
        this.setState({
            colorsArr
        });
        this.props.onColorChange(colorsArr);
    }
    onDeleteClickHandler(indx){
        let {colorsArr} = this.state;
        if(colorsArr.length > 1){
            colorsArr.splice(indx,1);
            this.setState({
                colorsArr
            })
        }
    }
    addColorClickHandler(){
        let {colorsArr} = this.state;
        if(colorsArr.length < 4){
            colorsArr.push({id: colorsArr.length+1, val: '#000000'});
            this.setState({
                colorsArr
            })
            this.props.onColorChange(colorsArr);
        }
    }
    render () {
        const {colorSelectorStyle, colorTextHeaderStyle} = style;
        const { colorsArr } = this.state;
        return (
            <div style={colorSelectorStyle} >
                <div style={colorTextHeaderStyle}>
                    <span>
                        Color / Gradient
                    </span>
                    <div style={{cursor:'pointer'}} onClick={this.addColorClickHandler}>
                        <RFIcon name='plus-circle' size="lg" color="#4a90e2"/>
                    </div>
                </div>
                {
                    colorsArr.map((item,indx)=> <ColorPicker key={indx} pickerColor= {item}
                                                             onColorChange={(val) => this.onColorChangeHandler(val,indx)}
                                                             onDeleteClick={()=>this.onDeleteClickHandler(indx)}/>)
                }
                
            </div>
        )
    }
}

const style = {
    colorSelectorStyle:{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop : -30,
        marginRight : 10,
        marginLeft : 10,
        marginBottom : 30

    },
    colorTextHeaderStyle:{
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    }
}
export default ColorSelector;