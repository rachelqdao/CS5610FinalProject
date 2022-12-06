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
                <h2>Welcome {currentUser.username}</h2>
            }
            <button className="btn btn-danger" onClick={handleLogout}>
                Logout
            </button>
        </>
    )
}
export default ProfileComponent