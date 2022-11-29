import React from "react";
import {useSelector} from "react-redux";

const DetailsInfoComponent = () => {
    const {bookDetails, loading} = useSelector((state) => state.bookDetails)

    return (
        <>
            {
                loading === true ?
                    <h1>Loading...</h1> :
                    bookDetails &&
                    <div className={"d-flex d-inline-block mb-5"}>
                        <img
                            src={bookDetails.volumeInfo.imageLinks.thumbnail}
                            className={"me-4 h-50 w-50"}
                            alt={"book cover"}
                        />
                        <div>
                            <div className={"mb-3"}>
                                <h1 className={"m-0 fw-bolder"}>{bookDetails.volumeInfo.title}</h1>
                                <div>{bookDetails.volumeInfo.authors}</div>
                                <div>ISBN: 123456ABCDEF</div>
                            </div>
                            <div className={"mb-3"} dangerouslySetInnerHTML={{__html: bookDetails.volumeInfo.description}}>
                            </div>

                            <button className={"btn btn-primary me-3"}>
                                <i className="bi bi-plus"> </i>
                                Add to Reading List
                            </button>

                            <button className={"btn btn-primary me-3"}>
                                <i className="bi bi-plus"> </i>
                                Add to Finished Books
                            </button>

                            <button className={"btn btn-primary"}>
                                <i className="bi bi-chat-square-text"> </i>
                                Leave a Review
                            </button>
                        </div>
                    </div>
            }
        </>
    )
}

export default DetailsInfoComponent