import './header.styles.scss';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { HeaderContainer,LogoContainer, OptionDiv, OptionLink  } from './header.styles';

const Header = ({currentUser,hidden}) => {
    return ( 
        <HeaderContainer>
            <LogoContainer className="logo-container" to="/">
                <Logo />
            </LogoContainer>

            <OptionDiv>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {currentUser ? <OptionLink as='div' onClick={()=> auth.signOut()}>SIGN OUT</OptionLink> : <Link className="option" to="/signin">SIGN IN</Link>}
                <CartIcon />
            </OptionDiv>
            {hidden && <CartDropdown />}
        </HeaderContainer>
     );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// });
 

//<OptionLink as='div' /> also pass component <OptionLink as={<Name of Component>}}>
export default connect(mapStateToProps)(Header);