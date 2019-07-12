import React from 'react';

const User = ({ user }) => (
  <td className="todo-list__tbody-cell" >
    {user.name}
  </td>
)


export default User;