import React, { Component } from 'react';

class Fruits extends Component {
    render() {
        return (
            <div>
                <h1>Fruit Juice Shop</h1>
                <h1>Juice: {this.props.juice}</h1>
                <h1>Flavour: {this.props.juiceFlavour.flavour}</h1>
            </div>
        );
    }
}

export default Fruits;