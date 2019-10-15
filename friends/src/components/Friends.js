import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { DisplayFriends } from './DisplayFriends';

import { getData } from '../services/getData'


export const Friends = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        getData().then(res => setFriends(res.data))
    }, [friends])

    return (
        <div>
            {friends.map(friend => {
                return (
                    <DisplayFriends friends={friend} />
                )
            })}
            <p>Friends Inc</p>
            <Link to='/addfriend'>Add a Friend</Link>
        </div>

    )
}