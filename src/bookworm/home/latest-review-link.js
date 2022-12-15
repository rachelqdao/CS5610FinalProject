import React from "react";
import {useSelector} from "react-redux";

const LatestReviewLinkComponent = () => {
    const {bookDetails} = useSelector((state) => state.bookDetails)

    console.log(bookDetails)

    return(
        <></>
    )

    /*return (
        <>
            {currentUser
                ?
                <>
                    <h3 className={"fw-bold mb-1"}>📖 Jump Back In</h3>
                    <p className={"text-secondary"}>See what users are saying about this book you recently reviewed</p>
                </>
                :
                <>
                    <h3 className={"fw-bold mb-1"}>📖 Latest Reviews </h3>
                    <p className={"text-secondary"}>See what users are saying about this book</p>
                </>
            }

            {
                hasReviews
                    ?
                    <>
                        <h1>{bookDetails.volumeInfo.title}</h1>
                        <hr/>
                        <h5 className={"fw-bold wd-green"}>Your Review: </h5>




                    </>
                    :
                    currentUser
                        ?
                        <>
                            <p className={"d-flex fw-bold wd-pink justify-content-center m-0 mb-2 px-3"}>
                                You haven't made any reviews yet!
                            </p>
                        </>
                        :
                        <>
                            <p className={"d-flex fw-bold wd-pink justify-content-center m-0 mb-0 px-3"}>
                                There aren't any reviews yet!
                            </p>
                            <p className={"d-flex fw-bold wd-pink justify-content-center m-0 mb-2 px-3"}>
                                Create an account and be the first to leave a review 🥳
                            </p>
                        </>

            }

        </>
    )*/

/*    return (
        <>
            {/!*book cover, title and authors*!/}
            <Link to={`/details?identifier=${bookDetails.id}`}>
                <div className={"mb-3"}>
                    <div className={"row"}>
                        <div className={"col-3"}></div>
                        <div className={"col-6"}>
                            <img
                                src={bookDetails.bookCover}
                                className={'img-fluid w-100 rounded mb-3'}
                                alt={"Cover Thumbnail"}
                            />
                        </div>
                        <div className={"col-3"}></div>
                    </div>

                    {/!*title and authors*!/}
                    <div>
                        {
                            bookDetails.volumeInfo.title
                                ?
                                <h5 className={"d-flex justify-content-center fw-bold mb-2"}>{bookDetails.volumeInfo.title}</h5>
                                :
                                <h5 className={"d-flex justify-content-center fw-bold mb-2"}>No title available</h5>

                        }
                        {
                            bookDetails.volumeInfo.authors
                                ?
                                <h6 className={"d-flex justify-content-center fw-bold m-0 text-secondary"}>{bookDetails.volumeInfo.authors.join(', ')}</h6>
                                :
                                <h6 className={"d-flex justify-content-center fw-bold m-0 text-secondary"}>No authors available</h6>
                        }

                    </div>
                </div>
            </Link>

        </>
    )*/
}

export default LatestReviewLinkComponent