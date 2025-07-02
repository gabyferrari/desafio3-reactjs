import { useState } from 'react';
import './styles.css'
import axios from 'axios';
import Button from '../Button';
import CardResult from '../CardResult';

type SearchData = {
  user: string;
}
type UserInfo = {
  avatar_url: string;
  html_url: string;
  followers: number;
  location: string;
  name: string;
};

export default function CardSearch() {

  const [searchData, setSearchData] = useState<SearchData>({
    user: ''
  });

  const [userInfo, setUserInfo] = useState<UserInfo>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleUserChange(event: any) {
    setSearchData({...searchData, user: event.target.value})
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSearchSubmit(event: any) {
    event.preventDefault();
    if (searchData.user.trim() === '') return;

    axios.get(`https://api.github.com/users/${searchData.user}`)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.error('Usuário não encontrado:', error);
        setUserInfo(undefined);
      });
  }

  return (
    <>
    <section>
       <div className="card-search container-search mt50">
        <h2>Encontre um perfil Github</h2>
        <form onSubmit={handleSearchSubmit}>
          <div>
            <input 
              className="search-box-style"
              name="user" 
              value={searchData.user}
              type="text" 
              placeholder="Usuário Github" 
              onChange={handleUserChange}
            />
          </div>
          <div className="dflex">
            <Button text="Encontrar" />
          </div>
        </form>
      </div>
    </section>
    
    {userInfo && <CardResult {...userInfo} />}
    </> 
  );
}