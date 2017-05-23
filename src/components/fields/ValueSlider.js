import React, { Component } from 'react';
import Slider from 'material-ui/Slider';

class ValueSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
            sliderValue : props.defaultValue
        }

        this.handleSliderChange = this.handleSliderChange.bind(this);
    }
    handleSliderChange(evt,value){
        this.setState({
            sliderValue : value
        });
        this.props.onChange(value);
    }
    render () {
        const { sliderValue } = this.state;
        const {sliderStyle, textStyle} = style;
        
        return (
            <div style={sliderStyle}>
                <div style={textStyle}>
                    <span>
                        {this.props.name}
                    </span>
                    <span>
                        {sliderValue}
                    </span>
                </div>
                <Slider {...this.props}
                        style={{marginTop: -12}}
                        value = {sliderValue}
                        onChange = { this.handleSliderChange}
                        />
            </div>

        )
    }
}

const style = {
    sliderStyle:{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin : 10
    },
    textStyle:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

export default ValueSlider