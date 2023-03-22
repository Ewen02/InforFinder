import React from 'react';
import './Header.scss';

interface HeaderProps {
    title:string;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <>
           <section className='title'>
                <h1>{props.title}</h1>
            </section> 
        </>
    )
}

export default Header;