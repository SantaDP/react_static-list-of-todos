import React from 'react';

class Users extends React.Component {

  render() {
    return (
      <td className="table__cell">{this.props.user.name}</td>
    )
  }
}

export default Users;