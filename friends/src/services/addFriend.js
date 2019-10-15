import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const addFriend = friend => {
    axiosWithAuth()
        .post('/api/friends', friend)
        .then(res => console.log(res))
}