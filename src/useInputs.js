import React, {useState, useEffect, useReducer, useMemo, useCallback, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

export default function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = e => {
        dispatch(e.target);
    };
    return [state, onChange];
};
