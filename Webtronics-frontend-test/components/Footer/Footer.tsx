import { FC } from 'react';
import Container from '../Container/Container';
import FooterLogo from './FooterLogo/FooterLogo';
import FooterCompany from './FooterCompany/FooterCompany';
import FooterSocial from './FooterSocial/FooterSocial';
import style from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <Container containerStyle={style.container}>
        <FooterLogo/>
        <FooterCompany/>
        <FooterSocial/>
      </Container>
    </footer>
  )
};

export default Footer;