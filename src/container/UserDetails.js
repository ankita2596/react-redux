import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {

    render(){
        if(!this.props.user){
            return (<div>Select a user</div>)
        }
        return (
            <div>
                <img height="150" width="150" src={this.props.user.thumbnail} alt="User view"/>
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age : {this.props.user.age}</h3>
                <h3>Description : {this.props.user.description}</h3>
            </div>
        )
    }
}
const mapstateToProps = (state) => {
    return {
        user: state.activeUser
    }     
}

export default connect(mapstateToProps)(UserDetail);
