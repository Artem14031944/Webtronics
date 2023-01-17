import { FC } from 'react';
import Link, { Ilink } from './Link/Link';
import style from './Links.module.css';

const Links: FC = () => {

    const links = [
        {id:1, text: 'About', path: '/about'},
        {id:2, text: 'Programs', path: '/programs'},
        {id:3, text: 'Steps', path: '/steps'},
        {id:4, text: 'Questions', path: '/questions'},
        {id:5, text: 'Get in touch', path: '/touch'},
    ];

  return (
    <div className={style.links}>
        {links.map((link: Ilink) => (
            <Link 
                key={link.id} 
                text={link.text} 
                path={link.path}
            />)
        )}
    </div>
  )
};

export default Links;