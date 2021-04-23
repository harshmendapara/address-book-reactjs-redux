import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllUsers, setActiveUser } from '../../redux/actions/userActions';
function Users() {
    const history = useHistory();
    const users = useSelector(state => state.user.users);
    const isLoading = useSelector(state => state.app.appLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
    }, []);
    const goToUser = (user) => {
        dispatch(setActiveUser(user));
        history.push('/users/'+user.login.uuid);
    }
    return (
        <div>
            {
                isLoading ?
                <h1>Loading ...</h1>
                :
                <ul>
                    {
                        users.map((user, index) => {
                            return (
                                <li style={{cursor: 'pointer'}} onClick={() => goToUser(user)} key={index}>
                                    {user.name.title} {user.name.first} {user.name.last}
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    );
}
  
  export default Users;