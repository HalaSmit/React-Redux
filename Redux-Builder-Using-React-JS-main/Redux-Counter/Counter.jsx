import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './Action';

export default function Counter() {
    
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
 
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}
