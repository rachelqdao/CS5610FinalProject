import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {findBookByAuthorThunk, findBookByKeywordThunk} from "../search/services/search-thunks";
import AuthorCarouselComponent from "./author-carousel";
import KeywordCarouselComponent from "./keyword-carousel";
import {findAllBookClubsThunk} from "../book-clubs/services/book-clubs-thunks";
import BrowseToReview from "../reviews/browse-to-review";
import {findAllReviewsThunk, findReviewsByUserIDThunk} from "../reviews/services/reviews-thunk";
import {findBookByIDThunk} from "../details/services/details-thunks";
import {Link} from "react-router-dom";

const HomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
    const {bookDetails} = useSelector((state) => state.bookDetails)
    const [hasReviews, setHasReviews] = useState(false)
    const [toggleVariable, setToggleVariable] = useState(false)
    const {bookClubs} = useSelector((state) => state.bookClubs);

    // dispatch apis to get book content
    const authorOfWeek = "Steven King"
    const keyword = "Christmas"

    const dispatch = useDispatch()

    // useEffects for carousels
    useEffect(() => {
        dispatch(findBookByAuthorThunk(authorOfWeek))
    }, [authorOfWeek, dispatch])

    useEffect(() => {
        dispatch(findBookByKeywordThunk(keyword))
    }, [keyword, dispatch])


    // useEffects for latest reviews
    useEffect(() => {
        if (currentUser) {
            dispatch(findReviewsByUserIDThunk(currentUser._id))
        }
    },[currentUser])

    useEffect(() => {
        if (!currentUser) {
            dispatch(findAllReviewsThunk())
        }
    }, [currentUser])

    useEffect(() => {
        if (reviews[reviews.length - 1] === undefined || reviews[reviews.length - 1] === null) {
            setHasReviews(false)
            setToggleVariable(!toggleVariable)
        }
    }, [reviews])

    useEffect(() => {
        if (reviews[reviews.length - 1]) {
            setHasReviews(true)
            setToggleVariable(!toggleVariable)
        }
    }, [reviews])

    useEffect(() => {
        if (hasReviews) {
            dispatch(findBookByIDThunk(reviews[reviews.length - 1].bookID))
        }
    }, [hasReviews, toggleVariable])

    useEffect(() => {
    }, [bookDetails, toggleVariable])


    // useEffect for book clubs
    useEffect(() => {
        dispatch(findAllBookClubsThunk())
    }, [])


    return (
        <>
        <div className={"row"}>
            {/*left gutter*/}
            <div className={"d-none d-xl-flex col-1"}></div>

            {/*main content*/}
            <div className={"col-12 col-xl-10"}>
                <div className={"row m-0"}>
                    <div className={"col-lg-6 mb-3 p-3"}>
                        <img
                            src={"https://www.svgrepo.com/show/83517/three-books-stack.svg"}
                            width={200}
                            height={200}
                            className={"mx-auto d-block mb-3"}
                            alt={"Book Cover"}
                        />

                        {
                            currentUser
                                ? <h1 className={"fw-bold wd-green"}>Welcome back, {currentUser.firstName}!</h1>
                                : <h1 className={"fw-bold wd-green"}>Welcome to Bookworm!</h1>
                        }
                        <h5 className={"mb-4 fw-bold wd-pink"}>{`Your community for all things books.`}</h5>
                        <p className={"m-0 mb-2"}>{`Join a book club, manage your books with Reading Lists or contribute to book reviews and reactions.`}</p>
                        <BrowseToReview/>

                    </div>

                    {/*latest reviews*/}
                    <div className={"col-lg-6 mb-3 bg-white border border-2 border-dark border-opacity-10 p-4 rounded"}>

                        {currentUser
                            ?
                            <div>
                                <h3 className={"fw-bold mb-1"}>📖 Jump Back In</h3>
                                <p className={"text-secondary"}>See what users are saying about this book you recently reviewed</p>
                            </div>
                            :
                            <div>
                                <h3 className={"fw-bold mb-1"}>📖 Latest Reviews </h3>
                                <p className={"text-secondary"}>See what users are saying about this book</p>
                            </div>
                        }

                        {
                            hasReviews
                                ?
                                <div>
                                    {
                                        bookDetails && reviews[reviews.length - 1] &&
                                        <Link to={`/details?identifier=${reviews[reviews.length - 1].bookID}`}>
                                            <h5 className={"d-flex fw-bold justify-content-center m-0 mb-2 px-3 text-secondary"}>
                                                <div className={"row"}>
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
                                            </h5>

                                            <h5 className={"d-flex fw-bold justify-content-center m-0 px-3"}>
                                                {   bookDetails.volumeInfo.title
                                                    ? bookDetails.volumeInfo.title
                                                    : "No title available"
                                                }
                                            </h5>

                                            <h5 className={"d-flex fw-bold justify-content-center m-0 mb-2 px-3 text-secondary"}>
                                                {   bookDetails.volumeInfo.authors
                                                    ? bookDetails.volumeInfo.authors.join(', ')
                                                    : "No authors available"
                                                }
                                            </h5>
                                        </Link>
                                    }
                                    <hr/>
                                    <h5 className={"fw-bold wd-green"}>Your Review: </h5>
                                    <div>
                                        {
                                            reviews[reviews.length - 1] &&
                                            <>
                                                <div className={"d-flex justify-content-center m-0 mb-2"}>
                                                    {
                                                        reviews[reviews.length - 1].rating === 1 &&
                                                        <span className={"text-secondary"}>⭐</span>
                                                    }

                                                    {
                                                        reviews[reviews.length - 1].rating === 2 &&
                                                        <span className={"text-secondary"}>⭐⭐</span>
                                                    }

                                                    {
                                                        reviews[reviews.length - 1].rating === 3 &&
                                                        <span className={"text-secondary"}>⭐⭐⭐</span>
                                                    }

                                                    {
                                                        reviews[reviews.length - 1].rating === 4 &&
                                                        <span className={"text-secondary"}>⭐⭐⭐⭐</span>
                                                    }

                                                    {
                                                        reviews[reviews.length - 1].rating === 5 &&
                                                        <span className={"text-secondary"}>⭐⭐⭐⭐⭐</span>
                                                    }
                                                </div>

                                                <h5 className={"d-flex fw-bold justify-content-center m-0 mb-2 px-3 text-secondary"}>
                                                    {reviews[reviews.length - 1].reviewText}
                                                </h5>
                                                <h5 className={"d-flex fw-bold justify-content-center m-0 mb-2 px-3 wd-pink"}>
                                                    <i className="bi bi-chat-left-quote-fill wd-pink me-2"></i>
                                                    <span className={"wd-green"}>{reviews[reviews.length -1].userID.username}</span>
                                                </h5>
                                            </>
                                        }


                                    </div>
                                </div>
                                :
                                currentUser
                                    ?
                                    <div>
                                        <p className={"d-flex fw-bold wd-pink justify-content-center m-0 mb-2 px-3"}>
                                            You haven't made any reviews yet!
                                        </p>
                                    </div>
                                    :
                                    <div>
                                        <p className={"d-flex fw-bold wd-pink justify-content-center m-0 mb-0 px-3"}>
                                            There aren't any reviews yet!
                                        </p>
                                        <p className={"d-flex fw-bold wd-pink justify-content-center m-0 mb-2 px-3"}>
                                            Create an account and be the first to leave a review 🥳
                                        </p>
                                    </div>

                        }

                    </div>
                </div>

                <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>
                    <h3 className={"fw-bold mb-1"}>📅 Weekly Recommendations</h3>
                    <p className={"m-0 text-secondary"}>{`Check out weekly recommendations from our featured author of the week!`}</p>
                    <p className={"m-0 text-secondary"}>{`This week's author: ${authorOfWeek}!`}</p>
                    <hr/>
                    <AuthorCarouselComponent/>
                </div>

                <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>
                    <h3 className={"fw-bold mb-1"}>🎄 Season's Picks: {keyword}</h3>
                    <p className={"m-0 text-secondary"}>The holiday season is here! Check out some of our favorite winter reads.</p>
                    <hr/>
                    <KeywordCarouselComponent/>
                </div>

                <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>
                    <h3 className={"fw-bold mb-1"}>Book Clubs to Join</h3>
                    <p className={"fw-bold m-0 text-secondary"}>Find a book club!</p>
                    <hr/>
                    <ul className="list-group">
                        {   bookClubs &&

                            JSON.stringify(bookClubs)
                       /*     bookClubs.map((bc) => {
                                return(
                                    <li className="list-group-item" key={bc._id}>
                                        <Link to={`/profile?id=${bc.ownerID}`}>{bc.name}</Link>
                                    </li>
                                )
                            })*/
                        }
                    </ul>
                </div>
            </div>

            {/*right gutter*/}
            <div className={"d-none d-xl-flex col-1"}></div>

        </div>
            </>
    )
};
export default HomeComponent;