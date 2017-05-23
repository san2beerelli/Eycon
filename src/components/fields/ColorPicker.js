import React, { Component } from 'react';
import RColorPicker from './RColorPicker';
import RFIcon from '../icon/RFIcon';

class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedColor : props.pickerColor.val
        }
        this.colorPickerChangeHandler = this.colorPickerChangeHandler.bind(this);
        this.deleteClickHandler = this.deleteClickHandler.bind(this);
    }
    colorPickerChangeHandler(val){
        this.setState({
            selectedColor: val
        })
        this.props.onColorChange(val);
    }
    deleteClickHandler(){
        this.props.onDeleteClick();
    }
    componentWillReceiveProps(nextProps){
       this.setState({
           selectedColor : nextProps.pickerColor.val
       });
    }
    render () {
        const { pickerStyle } = style;
        const { selectedColor } = this.state;
        return (
            <div style={pickerStyle}>
                <RColorPicker color={selectedColor} changeHandler={this.colorPickerChangeHandler}/>
                <span>
                    {selectedColor}
                </span>
                <div style={{ cursor: 'pointer'}} onClick={this.deleteClickHandler}>
                    <RFIcon name='minus-square' size="lg" color="#d0021b"/>
                </div>
            </div>
        )
    }
}

const style = {
    pickerStyle :{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}
export default ColorPicker;