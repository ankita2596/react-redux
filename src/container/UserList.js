import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import selectUser from '../actions/index';

class UserList extends Component {
    renderList(){
        return this.props.users.map((user) => (
            <li key={user.id} onClick={(user) => this.props.selectUser(user)}>
                {user.first} {user.last}
            </li>
        )
    )};
    render(){
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.users
    }    
};
const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({selectUser: selectUser}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(UserList);

