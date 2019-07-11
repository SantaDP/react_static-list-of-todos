import React from 'react';

const User = ({ user }) => {
  return (
    <tr className="user-detalis" >
      {user.name}
    </tr>
  )
}

export default User;