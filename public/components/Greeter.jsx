var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
    getDefaultProps: function(){
        return {
            name: 'React',
            message: 'This is a default message'
        };
    },
    getInitialState: function(){
        return ({
            name: this.props.name,
            message: this.props.message
        });
    },
    handleNewName: function(updates){
        this.setState(updates);
    },
    handleNewMessage: function(message){
        this.setState({
            message: message
        });
    },
    render: function(){
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewName}/>
                
            </div>
        );
    }
});

module.exports = Greeter;