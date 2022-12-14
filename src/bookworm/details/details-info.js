import {addBookToReadingListThunk} from "../readinglists/services/reading-lists-thunks";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const DetailsInfoComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {bookDetails} = useSelector((state) => state.bookDetails)
    const {readingLists} = useSelector((state) => state.readingLists)
    const [listSelection, setListSelection] = useState('')

    const dispatch = useDispatch()

    return (
        <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>

            {/*book cover on xs, sm and md screens*/}
            <div className={"row d-lg-none d-lg-block mb-3"}>
                <div className={"col-4"}></div>
                <div className={"col-4"}>
                    <img
                        src={bookDetails.bookCover}
                        className={'img-fluid w-100 rounded'}
                        alt={"Cover Thumbnail"}
                    />
                </div>
                <div className={"col-4"}></div>
            </div>

            {/*title and authors on lg, xl and xxl screens*/}
            <div className={"d-none d-lg-block mb-3"}>
                {
                    bookDetails.volumeInfo.title
                        ? <h3 className={"fw-bolder"}>{bookDetails.volumeInfo.title}</h3>
                        : <h3 className={"fw-bolder"}>No title available</h3>
                }
                {
                    bookDetails.volumeInfo.authors
                        ? <h5 className={"text-secondary fw-bold"}>{bookDetails.volumeInfo.authors.join(', ')}</h5>
                        : <h5 className={"text-secondary fw-bold"}>No authors available</h5>
                }
            </div>

            {/*title and authors on xs, sm and md screens*/}
            <div className={"d-lg-none mb-3"}>
                <h3 className={"d-flex justify-content-center fw-bolder"}>{bookDetails.volumeInfo.title}</h3>
                {
                    bookDetails.volumeInfo.authors
                        ? <h5 className={"d-flex justify-content-center text-secondary fw-bold"}>{bookDetails.volumeInfo.authors.join(', ')}</h5>
                        : <h5 className={"d-flex justify-content-center text-secondary fw-bold"}>No authors available</h5>
                }
            </div>

            {/*other details*/}
            <div className={"mb-3"}>
                <span className={"fw-bold wd-green"}>Details:</span>
                {
                    bookDetails.volumeInfo.publisher
                        ? <div className={"text-secondary"}>
                            <span className={"fw-bold"}>Published by:</span> {bookDetails.volumeInfo.publisher}, {bookDetails.volumeInfo.publishedDate}
                        </div>
                        : null
                }
                {
                    bookDetails.volumeInfo.industryIdentifiers
                        ? <div className={"text-secondary"}>
                            <span className={"fw-bold"}>ISBN:</span> {bookDetails.volumeInfo.industryIdentifiers[0].identifier}
                        </div>
                        : null
                }
                {
                    bookDetails.volumeInfo.pageCount
                        ? <div className={"text-secondary"}>
                            <span className={"fw-bold"}>Page Count:</span> {bookDetails.volumeInfo.pageCount}
                        </div>
                        : null
                }
            </div>

            <hr/>

            <div className={"row"}>

                {/*buttons*/}
                <div className="input-group col-12 mb-3">
                    <select
                        className="form-select"
                        onChange={(e) => {
                            setListSelection(e.target.value)
                        }
                        }
                    >
                        <option>Select a Reading List</option>
                        {
                            readingLists &&
                            readingLists.map(readingList => <option value={readingList._id}>{readingList.listName}</option>)
                        }
                    </select>

                    <button
                        className="btn wd-green-button"
                        type="button"
                        onClick={() => {

                            const bookInfo = {
                                id: bookDetails.id,
                                bookCover: bookDetails.bookCover,
                                title: bookDetails.volumeInfo.title,
                                authors: bookDetails.volumeInfo.authors
                            }

                            // find the selected reading list
                            const list = readingLists.filter((readingList) => readingList._id === listSelection)[0]

                            // find if the book is in the list
                            const bookInList = list.books.find((book) => book.id === bookInfo.id)

                            // add only if unique
                            if (!bookInList) {
                                const bookList = [...list.books, bookInfo]

                                const update = {
                                    'listID': listSelection,
                                    'bookList': bookList
                                }

                                dispatch(addBookToReadingListThunk(update))
                            }
                        }
                        }
                    >
                        <i className="bi bi-bookmark-plus"> </i>
                        Add to Reading List
                    </button>
                </div>


                {/*TODO: Set as Book Club's current book functionality*/}
                <div className={"col-12"}>
                    {
                        currentUser && currentUser.userType === 'BOOK CLUB OWNER' &&
                        <button className={"btn wd-green-button float-end"}>
                            Set as Book Club's Current Book
                        </button>
                    }
                </div>

            </div>
        </div>
    )
}

export default DetailsInfoComponent