import { FC } from 'react';
import Container from '../Container/Container';
import Links from './Links/Links';
import Logo from './Logo/Logo';
import style from './Header.module.css';

const Header: FC = () => {
  return (
    <Container containerStyle={style.header}>
      <Logo/>
      <Links/>
    </Container>
  )
};

export default Header;