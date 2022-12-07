import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../users/users-thunks";
import {useNavigate} from "react-router-dom";

const ProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.users)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logoutThunk())
        navigate('/')
    }

    return (
        <>
            <h1>Profile</h1>
            {
                currentUser &&
                <>
                    <h2>Welcome {currentUser.firstName} {currentUser.lastName}</h2>
                    <h5>Username: {currentUser.username}</h5>
                    <h5>Email: {currentUser.email}</h5>
                    <h5>User Type: {currentUser.userType}</h5>
                </>
            }
            <button className="btn btn-danger" onClick={handleLogout}>
                Logout
            </button>
        </>
    )
}
export default ProfileComponent