import React, { Component } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

class RColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = { 
            displayColorPicker: false,
            color: props.color
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick(){
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    }
    handleClose(){
        this.setState({ displayColorPicker: false })
    }
    handleChange(color){
        this.props.changeHandler(color.hex);
        this.setState({ color: color.hex })
    }
    componentWillReceiveProps(nextProps){
        this.setState({color:nextProps.color});
    }
    render () {
        const styles = reactCSS({
            'default': {
                color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: `${this.state.color}`,
                },
                swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
                },
                popover: {
                position: 'absolute',
                zIndex: 20000000,
                },
                cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
                },
            },
            });
        return (
            <div>
                <div style={ styles.swatch } onClick={ this.handleClick }>
                <div style={ styles.color } />
                </div>
                { this.state.displayColorPicker ? <div style={ styles.popover }>
                <div style={ styles.cover } onClick={ this.handleClose }/>
                <SketchPicker disableAlpha={true} color={ this.state.color } onChange={ this.handleChange } />
                </div> : null }

            </div>
        )
    }
}

export default RColorPicker;