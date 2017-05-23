import React, { Component } from 'react';
import styled from 'styled-components';

const Bg = styled.section`
    position:fixed !important;
    top:0;
    right:0;
    bottom:0;
    left:0;
    display: flex;
    flex-direction : column;
    overflow-x: auto;
    overflow-y: auto;
    background: linear-gradient(135deg, #3C4049, #3C4049)
`;

class Background extends Component {
    render () {
        return (
            <Bg>
               {this.props.children}
            </Bg>
        )
    }
}

export default Background;