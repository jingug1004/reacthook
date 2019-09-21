import React, {useState, useEffect, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    const {name, nickname} = state;

    const onChange = e => {
        dispatch(e.target);
    }

    return (
        <div>
            <div>
                <input name="name" vlaue={name} onChange={onChange}/>
                <input name="nickname" vlaue={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div>
        </div>
    );
}

export default Info;
