import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function UserDetail() {
    const history = useHistory();
    const activeUser = useSelector(state => state.user.activeUser);
    useEffect(() => {
        if (!activeUser) { // then redirect to users list
            history.push('/');
        }
    }, []);
  return (
      <div>
        <h2>Details</h2>
        <img src={activeUser?.picture?.thumbnail} />
        <p>Name : {activeUser?.name?.title} {activeUser?.name?.first} {activeUser?.name?.last}</p>
        <p>Gender: {activeUser?.gender} </p>
        <p>Email: {activeUser?.email}</p>
        <p>City: {activeUser?.location?.city}</p>
        <p>State: {activeUser?.location?.state}</p>
        <p>Country: {activeUser?.location?.country}</p>
      </div>
  );
}

export default UserDetail;