import React, {useState} from "react";
import {createReadingListThunk} from "../../readinglists/services/reading-lists-thunks";
import {useDispatch, useSelector} from "react-redux";
import {createBookClubThunk} from "./book-clubs-thunks";
import {useNavigate} from "react-router-dom";

const BookClubsForm = (oid) => {
    // const {currentUser} = useSelector((state) => state.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [error, setError] = useState(null);

    const createBookClub = () => {
        if (name === '') {
            setError('Please enter a name for the Book Club')
            return
        }

        // TODO get book club by name if it already exists make an error

        const bookClub = {
            ownerID: oid,
            name: name
        }

        dispatch(createBookClubThunk(bookClub));
        navigate('/profile');
    }

    return (
        <>
            <div className={"row"}>
                <div className={"mb-5"}>
                    <div className="mb-3">

                        {/*review form*/}
                        <div>
                            {
                                error &&
                                <div className={"alert alert-danger"}>
                                    {error}
                                </div>
                            }

                            <h4 className={"fw-bold text-secondary"}>Create a new Book Club!</h4>

                            <label htmlFor="bcName" className="form-label fw-bold wd-green">Book Club Name:</label>
                            <input
                                id="bcName"
                                className="form-control form-control-lg mb-3"
                                placeholder="My Book Club"
                                onChange={(e) => {
                                    setName(e.target.value)
                                    setError(null);
                                }}
                            />
                        </div>
                    </div>
                    <button
                        className={"btn wd-green-button float-end"}
                        onClick={createBookClub}>
                        Submit
                    </button>
                </div>
            </div>
        </>

    )
}

export default BookClubsForm;

