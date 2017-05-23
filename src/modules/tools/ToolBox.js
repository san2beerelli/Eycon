import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import { ValueSlider, ColorSelector } from '../../components'
import IconSelectorPopup from './IconSelectorPopup';
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

class ToolBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            gradient: '#000000',
            degrees: 0,
            fontGradient : '#000000',
            fontDegrees: 0
        }
        this.onSliderChangeHandler = this.onSliderChangeHandler.bind(this);
        this.onFontSizeChangeHandler = this.onFontSizeChangeHandler.bind(this);
        this.onDirectionSliderChangeHandler = this.onDirectionSliderChangeHandler.bind(this);
        this.onFontDirectionSliderChangeHandler = this.onFontDirectionSliderChangeHandler.bind(this);
        this.onColorChangeHandler = this.onColorChangeHandler.bind(this);
        this.onFontColorChangeHandler = this.onFontColorChangeHandler.bind(this);
        this.gradientValue = this.gradientValue.bind(this);
        this.fontGradientValue = this.fontGradientValue.bind(this);
        this.onIconSelectHandler = this.onIconSelectHandler.bind(this);
        this.onShadowCheckHandler = this.onShadowCheckHandler.bind(this);
    }
    onShadowCheckHandler(evt,value){
         this.props.onValueChange({
            textShadow: value
        })
    }
    onSliderChangeHandler(value){
        this.props.onValueChange({
            bgRadius: value
        })
    }
    onFontColorChangeHandler(value){
        let colors = "";
        value.forEach((item,indx)=>{
            if(indx == 0){
                colors += item.val;
                if(value.length ==1){
                    colors += ', '+item.val;
                }
            }else{
                colors += ', '+item.val;
            }
        });
        this.setState({
            fontGradient: colors
        });
         this.props.onValueChange({
            fontGradient: this.fontGradientValue()
        })

    }
    onFontSizeChangeHandler(value){
        this.props.onValueChange({
            fontSize: value
        })
    }
    onIconSelectHandler(val){
        this.props.onValueChange({
            selectedIcon: val
        })
    }
    gradientValue(){
        const { gradient, degrees} = this.state;
        return `${degrees}deg, ${gradient}`;
    }
    fontGradientValue(){
        const { fontGradient, fontDegrees} = this.state;
        return `${fontDegrees}deg, ${fontGradient}`;
    }
    onColorChangeHandler(value){
        let colors = "";
        value.forEach((item,indx)=>{
            if(indx == 0){
                colors += item.val;
                if(value.length ==1){
                    colors += ', '+item.val;
                }
            }else{
                colors += ', '+item.val;
            }
        });
        this.setState({
            gradient: colors
        });
         this.props.onValueChange({
            bgGradient: this.gradientValue()
        })
    }

    onDirectionSliderChangeHandler(value){
        this.setState({
            degrees: value
        });
       this.props.onValueChange({
            bgGradient: this.gradientValue()
        })
    }
    onFontDirectionSliderChangeHandler(value){
        this.setState({
            fontDegrees: value
        });
       this.props.onValueChange({
            fontGradient: this.fontGradientValue()
        })
    }

    render () {
        const { toolBoxStyle} = style;
        return (
            <Paper style={toolBoxStyle} zDepth={2}>
                <Tabs style={{margin: 2}}>
                    <Tab label="Background" >
                        <ValueSlider name='Radius' 
                                    defaultValue={2} min={0} max={200} step={1}
                                    onChange={this.onSliderChangeHandler}
                                    />
                         <ColorSelector onColorChange={this.onColorChangeHandler} />
                         <ValueSlider name='Direction' 
                                    defaultValue={0} min={0} max={360} step={1}
                                    onChange={this.onDirectionSliderChangeHandler}
                                    />           
                    </Tab>
                    <Tab label="Icon" >
                    <div>
                        <div style={{ display:'flex', direction:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <IconSelectorPopup onIconSelect={this.onIconSelectHandler}/>
                            <Checkbox style={{marginLeft: 30}} defaultChecked={true} onCheck={this.onShadowCheckHandler}
                                checkedIcon={<Visibility />}
                                uncheckedIcon={<VisibilityOff />}
                                label="Shadow"
                            />
                        </div>

                        <ValueSlider name='Size' 
                                    defaultValue={5} min={2} max={20} step={1}
                                    onChange={this.onFontSizeChangeHandler}
                                    />
                        <ColorSelector onColorChange={this.onFontColorChangeHandler} />
                        <ValueSlider name='Direction' 
                                    defaultValue={0} min={0} max={360} step={1}
                                    onChange={this.onFontDirectionSliderChangeHandler}
                                    />     
                    </div>
                    </Tab>
                    </Tabs>
            </Paper>
        )
    }
}

const style = {
    toolBoxStyle:{
        width : 300,
        height : 400,
        margin : 20,
        alignSelf : 'center'
    }
}

export default ToolBox