import {addBookToReadingListThunk} from "../readinglists/services/reading-lists-thunks";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const DetailsInfoComponent = () => {
    const {bookDetails} = useSelector((state) => state.bookDetails)
    const {readingLists} = useSelector((state) => state.readingLists)
    const [listSelection, setListSelection] = useState('')
    const [searchParams] = useSearchParams({identifier: ''})

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

            {/*buttons*/}
            <div className="input-group col-12 col-lg-6">
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
                    className="btn btn-primary"
                    type="button"
                    onClick={() => {

                        console.log(bookDetails)

                        const update = {
                            'listID': listSelection,
                            'bookID': searchParams.get('identifier')
                        }

                        dispatch(addBookToReadingListThunk(update))
                    }
                    }
                >
                    <i className="bi bi-bookmark-plus"> </i>
                    Add to Reading List
                </button>
            </div>
        </div>
    )
}

export default DetailsInfoComponent