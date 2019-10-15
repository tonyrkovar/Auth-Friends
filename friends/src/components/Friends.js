import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { DisplayFriends } from './DisplayFriends';

import { getData } from '../actions'


export const Friends = () => {
    const friends = useSelector(state => state.friends);
    const loading = useSelector(state => state.isFetching);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, [])

    if (loading) {
        return <h2>LOADING FRIENDS</h2>
    }

    return (
        <div>
            {friends.map(friend => {
                return (
                    <DisplayFriends friends={friend} />
                )
            })}
            <Link to='/addfriend'>Add a Friend</Link>
        </div>
    )
}