import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { faSearch , faBars, faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { SearchContext } from '../context/SearchContext';

const Header = () => {
    const [searchBar, setSearchBar] = useState(false);
    const [searching, setSearching] = useState("");
    const {user} = useContext(UserContext);
    const {setSearchPlace} = useContext(SearchContext);

    useEffect(() => {

        setSearchPlace(searching);

    }, [searching, setSearchPlace]);



    const searchBarHandler = () => {
        setSearchBar(prevState => !prevState);
        setSearching("");
    }

    return(
        <header className="flex flex-col lg:flex-row items-center justify-between mb-4">
            <Link to="/" className='flex items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
</svg>

            <span className="font-bold text-xl">StayVilla</span>
            </Link>


            <div className='flex items-center justify-center border border-gray-300 rounded-full py-2 px-4 gap-4 shadow-md shadow-gray-300 mb-4'>
            {
                searchBar ? <input className="h-6 focus:outline-none" autoFocus type='text' placeholder='Search by address...' value={searching} onChange={ev => setSearching(ev.target.value)}/> :
                <>
                <div>Search by Adress</div>
                <div className='border-l-2 h-6 border-gray-300'></div>
                </>
            }
            <button className='flex items-center justify-center bg-primary w-7 h-7 text-white p-1 rounded-full mb-4' onClick={searchBarHandler}><FontAwesomeIcon icon={faSearch} size="xs"/></button>
            </div>

            <div className='flex items-center border border-gray-300 rounded-full py-2 px-4 gap-4 '>
            <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} />
            <Link to={user ? '/account' : '/login'}>
                <FontAwesomeIcon icon={faCircleUser} style={{color: "#7c7d7e"}} size='2x' />
            </Link>
            {user && (
                <p>{user.name}</p>
            )}
            
            </div>
        </header>
    );
}

export default Header;