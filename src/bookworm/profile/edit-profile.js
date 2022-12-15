import {useDispatch, useSelector} from "react-redux";
import {updateUserThunk} from "../users/users-thunks";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";

const EditProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [editingFirstName, setEditingFirstName] = useState(currentUser.firstName);
    const [editingLastName, setEditingLastName] = useState(currentUser.lastName);
    const [editingEmail, setEditingEmail] = useState(currentUser.email);
    const [editingPassword, setEditingPassword] = useState('');
    const [editingValidatePassword, setEditingValidatePassword] = useState('');

    const [error, setError] = useState(null)

    const handleFinishedEditing = (save = false) => {
        if (save) {
            if (editingPassword !== editingValidatePassword) {
                setError('Passwords must match')
                return
            }

            const userUpdates = {
                _id: currentUser._id,
                firstName: editingFirstName,
                lastName: editingLastName,
                email: editingEmail
            }
            if (editingPassword !== "") {
                userUpdates.password = editingPassword;
            }

            console.log("just clicked save: " + JSON.stringify(userUpdates));

            dispatch(updateUserThunk(userUpdates));
            console.log("back in edit profile");
        }
        navigate('/profile')
    }

    return (
        <>
            <span>
                <h1>Edit Profile</h1>
            </span>

            {
                error &&
                <div className={"alert alert-danger"}>
                    {error}
                </div>
            }

            <div className="mt-2 rounded border border-secondary text-secondary">
                <div className="ps-1">First Name</div>
                <input className="rounded border-0 w-100 ps-1"
                       value={editingFirstName.toString()}
                       onChange={(e) => {
                           const newName = e.target.value;
                           setEditingFirstName(newName)
                       }}/>
            </div>

            <div className="mt-2 rounded border border-secondary text-secondary">
                <div className="ps-1">Last Name</div>
                <input className="rounded border-0 w-100 ps-1"
                       value={editingLastName.toString()}
                       onChange={(e) => {
                           const newName = e.target.value;
                           setEditingLastName(newName)
                       }}/>
            </div>

            <div className="mt-2 rounded border border-secondary text-secondary">
                <div className="ps-1">Email</div>
                <input className="rounded border-0 w-100 ps-1"
                       value={editingEmail.toString()}
                       onChange={(e) => {
                           const newEmail = e.target.value;
                           setEditingEmail(newEmail)
                       }}/>
            </div>

            <div className="mt-2 rounded border border-secondary text-secondary">
                <div className="ps-1">New Password</div>
                <input className="rounded border-0 w-100 ps-1"
                       placeholder="enter new password"
                       onChange={(e) => {
                           const newPassword = e.target.value;
                           setEditingPassword(newPassword)
                       }}/>
            </div>
            <div className="mt-2 rounded border border-secondary text-secondary">
                <div className="ps-1">Re-enter New Password</div>
                <input className="rounded border-0 w-100 ps-1"
                       placeholder="re-enter new password"
                       onChange={(e) => {
                           const validatePassword = e.target.value;
                           setEditingValidatePassword(validatePassword)
                       }}/>
            </div>
            <h6 className="mt-2">Username {currentUser.username}</h6>
            <h6 className="mt-2">User Type: {currentUser.userType}</h6>
            <h6>Date Joined: {currentUser.dateJoined}</h6>
            <br/>

            {/*cancel*/}
            <button className="btn btn-danger"
                    onClick={() => {
                        handleFinishedEditing()
                    }}>
                Cancel
            </button>
            <br/><br/>
            {/*save*/}
            <button className="btn btn-danger"
                    onClick={() => {
                        handleFinishedEditing(true)
                    }}>
                Save
            </button>

        </>
    )
}
export default EditProfileComponent;