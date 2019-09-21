import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
        console.log({name, nickname});
        return () => {
            console.log('cleanup');
            console.log({name, nickname});
        }
    });

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input vlaue={name} onChange={onChangeName}/>
                <input vlaue={nickname} onChange={onChangeNickname}/>
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
