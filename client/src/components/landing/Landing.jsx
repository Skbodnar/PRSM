import './Landing.scss';
import { Link } from 'react-router-dom'
import { AuthProvider } from '../../contexts/AuthContext';
import SignUp from '../SignUp/SignUp';
import Logo from './Vscrl_Logo.png';

function Landing() {
  return (
    <AuthProvider>
      <div className="Landing">
        <img alt="Site Logo" src={Logo}/>
        <nav>
          <Link to='/KeyWordAnswer'>KeyWordAnswer</Link>
          <Link to='/LongAnswer'>LongAnswer</Link>
          <Link to='/MultipleChoice'>MultipleChoice</Link>
          <Link to='/RankingAnswer'>RankingAnswer</Link>
          <Link to='/ScaleAnswer'>ScaleAnswer</Link>
          <Link to='/SelectImg'>SelectImg</Link>
          <Link to='/ShortAnswer'>ShortAnswer</Link>
        </nav>

        <SignUp></SignUp>
      </div>
    </AuthProvider>
  );
}

export default Landing
