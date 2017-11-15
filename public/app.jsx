var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Patinya'

ReactDOM.render(
            <Greeter name={firstName} message="Message from prop!"/>,
            document.getElementById('app')
        );