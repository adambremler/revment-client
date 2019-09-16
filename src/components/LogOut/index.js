import { connect } from 'react-redux';
import { logOut } from '../../actions/userActions';

function LogOut({ logOut }) {
    logOut();
    return null;
}

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut())
});

export default connect(
    null,
    mapDispatchToProps
)(LogOut);
