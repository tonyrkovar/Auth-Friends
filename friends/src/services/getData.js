import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'

export const getData = async () => {
    const result = await axiosWithAuth()
        .get('/api/friends')
        .then(res => res)
    return result
}