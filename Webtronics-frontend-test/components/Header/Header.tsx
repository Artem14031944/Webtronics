import { FC } from 'react';
import Links from './Links/Links';
import Logo from './Logo/Logo';
import style from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={style.header}>
        <Logo/>
        <Links/>
    </header>
  )
};

export default Header;