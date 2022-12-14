import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {createReadingListThunk} from "./services/reading-lists-thunks";

const ReadingListsForm = () => {
    const [toggleForm, setToggleForm] = useState(false)
    const [listName, setListName] = useState('')
    const [description, setDescription] = useState('')
    const [readingList, setReadingList] = useState({})
    const [error, setError] = useState(null)

    const dispatch = useDispatch()
    const handleCreateListClick = () => {
        if (toggleForm) {
            setToggleForm(false)
        } else {
            setToggleForm(true)
        }
    }

    useEffect(() => {
        setReadingList({'listName': listName, 'description': description})
    }, [listName, description])

    return (
        <>
            {/*header*/}
            <div className={"mb-3"}>
                {/*create new reading list */}

                {   !toggleForm &&
                    <button
                        className={"btn wd-green-button float-end"}
                        onClick={handleCreateListClick}
                    >
                        <i className="bi bi-bookmarks-fill"></i> Create a new Reading List
                    </button>
                }

                {/*user's reading lists*/}
                <h4 className={"fw-bold m-0"}>Reading Lists</h4>
            </div>


            {/*reading list creation form*/}
            <div>
                {   toggleForm &&
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

                                    <h5 className={"fw-bold text-secondary"}>Create a new Reading List</h5>

                                    <label htmlFor="listName" className="form-label fw-bold wd-green">Name:</label>
                                    <input
                                        id="listName"
                                        className="form-control form-control-lg mb-3"
                                        placeholder="Fiction"
                                        onChange={(e) => setListName(e.target.value)}
                                    />

                                    <label htmlFor="description" className="form-label fw-bold wd-green">Description:</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        placeholder={"A list of my favorite Fiction books!"}
                                        rows="3"
                                        onChange={(e) => setDescription(e.target.value)}
                                    >
                                </textarea>
                                </div>
                            </div>
                            <button
                                className={"btn wd-green-button float-end"}
                                onClick={() => {
                                    if (listName === '') {
                                        setError('Please enter a name for the Reading List')
                                        return
                                    }

                                    dispatch(createReadingListThunk(readingList))
                                    setToggleForm(false)
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

export default ReadingListsForm