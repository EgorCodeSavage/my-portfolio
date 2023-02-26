import React, { useEffect, useState } from 'react';
import './style.css';
import { Success } from './../../components/users/Success';
import { Userss } from '../../components/users/Userss';

// Тут список пользователей: https://reqres.in/api/users

function Users() {

  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    fetch('https://reqres.in/api/users').then(res => res.json()).then(json => {
      setUsers(json.data)
    }).catch(err => {
      console.log(err);
      alert("Ошибка при получении данных!");
    }).finally(() => {setLoading(false)})
  }, [])

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  }
  
  const onClickSendInvite = () => {
    setSuccess(true);
  };

  return (  
    <div className='users_main'>
        <div className="users_app">
          {
            success ? <Success count={invites.length}/> : <Userss onClickSendInvite={onClickSendInvite} invites={invites} onClickInvite={onClickInvite} onChangeSearchValue={onChangeSearchValue} searchValue={searchValue} isLoading={isLoading} items={users} />
          }
        </div>
    </div>
    
  );
}

export default Users;