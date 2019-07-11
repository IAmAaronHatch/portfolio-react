import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <div style={mainContainer}>
                This is Header
            </div>
        )
    };
};

const mainContainer = {
    backgroundColor: '#333',
    height: '10vh',
    color: '#fff',
    
}

export default Header;