import React, { Component } from 'react';
import { Background, Header, Container } from './components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ToolBox, WorkArea } from './modules';

class App extends Component {
    constructor(props){
        super(props);
        this.onValueChangeHandler = this.onValueChangeHandler.bind(this);
    }
    onValueChangeHandler(val){
        this.workArea.setState({
           ...val
        });
    }
    render () {
        return (
            <MuiThemeProvider>
                <Background>
                    <Header />
                    <Container>
                       <WorkArea ref={(workArea) => {this.workArea = workArea}}/>
                       <ToolBox onValueChange={this.onValueChangeHandler}/>
                    </Container>
                </Background>
            </MuiThemeProvider>
        )
    }
}

export default App