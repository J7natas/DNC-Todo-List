import './index.scss';
import logo from '../assets/logo.svg';

 export const Header = () => {
    return(
        <header className='Header'>
            <div className='Header__cont'>
                <img src={logo} />
                <p>Organizador Diário</p>
            </div> 
        </header>
    )
}

