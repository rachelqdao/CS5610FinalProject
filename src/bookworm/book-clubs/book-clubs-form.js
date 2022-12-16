import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createBookClubThunk} from "./services/book-clubs-thunks";

const BookClubsForm = () => {
    const {bookClubs} = useSelector((state) => state.bookClubs)
    const [hasBookClub, setHasBookClub] = useState(false)
    const [name, setName] = useState('')
    const [error, setError] = useState(null)
    const [bookClub, setBookClub] = useState(null)
    const [toggleForm, setToggleForm] = useState(false)

    const dispatch = useDispatch();
    const handleCreateBookClubClick = () => {
        if (toggleForm) {
            setToggleForm(false)
        } else {
            setToggleForm(true)
        }
    }

    useEffect(() => {
        setBookClub({
            name
        })
    }, [name])

    useEffect(() => {
        console.log(bookClubs)
        if (bookClubs.length !== 0) {
            setHasBookClub(true)
        } else {
            setHasBookClub(false)
        }
        console.log(hasBookClub)
    }, [bookClubs])

    return (
        <>
            {/*header*/}
            <div className={"mb-3"}>
                {/*create new Book Club */}
                {/*TODO: need handling to not show button if user already has book club*/}
                {!toggleForm && !hasBookClub &&
                    <button
                        className={"btn wd-green-button float-end"}
                        onClick={handleCreateBookClubClick}
                    >
                        <i className="bi bi-bookmarks-fill"></i> Create a new Book Club
                    </button>
                }

                {/*user's reading lists*/}
                <h4 className={"fw-bold m-0"}>Book Clubs</h4>
            </div>


            {/*Book Club creation form*/}
            <div>
                {toggleForm &&
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

                                    <h5 className={"fw-bold text-secondary"}>Create a new Book Club</h5>

                                    <label htmlFor="listName" className="form-label fw-bold wd-green">Name:</label>
                                    <input
                                        id="listName"
                                        className="form-control form-control-lg mb-3"
                                        placeholder="My Book Club"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                            </div>

                            <button
                                className={"btn wd-green-button float-end"}
                                onClick={() => {
                                    if (name === '') {
                                        setError('Please enter a name for the Book Club')
                                        return
                                    }

                                    dispatch(createBookClubThunk(bookClub));
                                    setToggleForm(!toggleForm)
                                    }
                                }
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default BookClubsForm;



/*    const createBookClub = () => {
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

                        {/!*review form*!/}
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

    )*/


