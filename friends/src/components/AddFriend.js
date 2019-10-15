import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { addFriend } from '../actions';
import { useDispatch, useSelector } from 'react-redux'

export const AddFriend = () => {
    // const friend = 
    const dispatch = useDispatch();
    const initialValue = {
        name: '',
        age: '',
        email: ''
    }

    const [friend, setFriend] = useState(initialValue)

    const handleChanges = e => {
        console.log(friend)
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                dispatch(addFriend(friend))
                setFriend(initialValue)
            }}>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={friend.name}
                    onChange={handleChanges}
                />
                <input
                    type='text'
                    name='age'
                    placeholder='Age'
                    value={friend.age}
                    onChange={handleChanges}
                />
                <input
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={friend.email}
                    onChange={handleChanges}
                />
                <button>Add Friend</button>
            </form>
            <Link to='/friends'>Back to Friends</Link>
        </div>
    )
}