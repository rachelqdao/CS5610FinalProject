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
            <div key={readingList._id}>
                <div>
                    <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>

                        {/*reading list header*/}
                        <div>
                            {
                                isCurrentUser &&
                                <button
                                    className={"btn wd-pink-button float-end"}
                                    onClick={() => {
                                        dispatch(deleteReadingListThunk(readingList._id))
                                    }
                                    }
                                >
                                    Delete this List
                                </button>
                            }
                            <div className={"mb-4"}>
                                <h5 className={"fw-bold wd-green"}>{readingList.listName}</h5>
                                <p className={"text-secondary"}>{readingList.description}</p>
                            </div>
                        </div>

                        <hr/>

                        {/*display books in reading list*/}
                        <div className={"row row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-1 d-flex"}>
                            {
                                readingList.books &&
                                readingList.books.map((book) =>
                                        <div className={"col"}>
                                            {
                                                isCurrentUser &&
                                                <button
                                                    className={"btn btn-sm wd-pink-button float-end mb-2"}
                                                    onClick={() => {
                                                        const update = {
                                                            listID: readingList._id,
                                                            bookInfo: book
                                                        }

                                                        dispatch(deleteBookFromReadingListThunk(update))
                                                    }}
                                                >
                                                    <i className={"bi bi-x-lg"}></i>
                                                </button>
                                            }
                                            <Link to={`/details?identifier=${book.id}`}>
                                                <img
                                                    src={book.bookCover}
                                                    className={'w-100 rounded mb-3 d-none d-md-block'}
                                                    alt={"Cover Thumbnail"}
                                                />
                                            </Link>
                                            <div>
                                                <Link to={`/details?identifier=${book.id}`}>
                                                    <div className={"mb-2"}>
                                                        {
                                                            book.title &&
                                                            <p className={"fw-bold m-0"}>{book.title}</p>
                                                        }

                                                        {
                                                            book.authors &&
                                                            <p className={"text-secondary m-0"}>{book.authors.join(', ')}</p>
                                                        }
                                                    </div>
                                                </Link>
                                            </div>
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