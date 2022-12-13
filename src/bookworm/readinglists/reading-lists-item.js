import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";
import {deleteBookFromReadingListThunk, deleteReadingListThunk} from "./services/reading-lists-thunks";

const ReadingListItemComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {readingLists} = useSelector((state) => state.readingLists)
    const [isCurrentUser, setIsCurrentUser] = useState(false)

    const [userID] = useSearchParams({id: ''})
    const dispatch = useDispatch()

    useEffect(() => {
        if (userID.get('id') === '' || userID.get('id') === currentUser._id) {
            setIsCurrentUser(true)
        } else {
            setIsCurrentUser(false)
        }
    }, [])

    return (
        readingLists &&
        readingLists.map((readingList) =>
            <div>
                <div>
                    <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>

                        {/*reading list header*/}
                        <div>
                            {
                                isCurrentUser &&
                                <button
                                    className={"btn btn-primary float-end"}
                                    onClick={() => {
                                        dispatch(deleteReadingListThunk(readingList._id))
                                    }
                                    }
                                >
                                    Delete this List
                                </button>
                            }
                            <div className={"mb-4"}>
                                <h5 className={"fw-bold"}>{readingList.listName}</h5>
                                <p className={"text-secondary"}>{readingList.description}</p>
                            </div>
                        </div>

                        <hr/>

                        {/*display books in reading list*/}
                        <div className={"row d-flex align-items-end mb-2"}>
                            {
                                readingList.books &&
                                readingList.books.map((book) =>
                                        <div className={"col-2"}>
                                            <i
                                                className="bi bi-x-square-fill wd-pink fs-4 float-end"
                                                onClick={() => {
                                                    const update = {
                                                        listID: readingList._id,
                                                        bookInfo: book
                                                    }

                                                    dispatch(deleteBookFromReadingListThunk(update))
                                                }
                                                }
                                            ></i>
                                            <Link to={`/details?identifier=${book.id}`}>
                                                <img
                                                    src={book.bookCover}
                                                    className={'img-fluid w-100 rounded'}
                                                    alt={"Cover Thumbnail"}
                                                />
                                            </Link>
                                        </div>
                                )
                            }
                        </div>

                        <div className={"row d-flex align-items-start"}>
                            {
                                readingList.books &&
                                readingList.books.map((book) =>
                                    <div className={"col-2"}>
                                        <Link to={`/details?identifier=${book.id}`}>
                                            <div className={"mb-2"}>
                                                <p className={"fw-bold m-0"}>{book.title}</p>
                                                <p className={"text-secondary m-0"}>{book.authors.join(', ')}</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        )
    )
}
export default ReadingListItemComponent