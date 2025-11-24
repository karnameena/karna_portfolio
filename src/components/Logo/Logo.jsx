import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={className} aria-label="site logo">
      <Link to={routes.HOME}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 30"
          width="100"
          height="30"
        >
          <text x="10" y="20" fontFamily="Arial" fontSize="20" fill={s.logoPrimary}>
            &lt;GK/&gt;
          </text>
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
