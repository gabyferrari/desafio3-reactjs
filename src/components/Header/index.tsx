import { Link } from 'react-router-dom';
import './styles.css'

export default function Header() {

  return (
    <header>
      <div className="container-home">
        <Link to="/">
          <h1 className="site-name">Github API</h1>
        </Link>
      </div>
    </header>
  );
}