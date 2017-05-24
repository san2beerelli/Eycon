import React, { Component } from 'react'

class Container extends Component {
    render () {
        const { containerStyle } = style;
        return (
            <div style={containerStyle}>
                 {this.props.children}
            </div>
        )
    }
}

const style = {
    containerStyle:{
        display: 'flex',
        flexDirection : 'row',
        alignSelf: 'center',
        flexWrap: 'wrap',
        height:'calc(100% - 80px)'
    }
}

export default Container