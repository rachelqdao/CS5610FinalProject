import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {findBookByAuthorThunk, findBookByKeywordThunk} from "../search/services/search-thunks";
import AuthorCarouselComponent from "./author-carousel";
import KeywordCarouselComponent from "./keyword-carousel";
import BrowseToReview from "../reviews/browse-to-review";
import LatestReviewComponent from "./latest-review";
import {findAllReviewsThunk, findReviewsByUserIDThunk} from "../reviews/services/reviews-thunk";

const HomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users)

    // dispatch apis to get book content
    const authorOfWeek = "Steven King"
    const keyword = "Christmas"

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findBookByAuthorThunk(authorOfWeek))
    }, [authorOfWeek, dispatch])

    useEffect(() => {
        dispatch(findBookByKeywordThunk(keyword))
    }, [keyword, dispatch])

    useEffect(() => {
        if (currentUser) {
            dispatch(findReviewsByUserIDThunk(currentUser._id))
            console.log('finding reviews by user ID')
        } else {
            dispatch(findAllReviewsThunk())
            console.log('finding all reviews')

        }
    },[currentUser])

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

                    <div className={"col-lg-6 mb-3 bg-white border border-2 border-dark border-opacity-10 p-4 rounded"}>
                        <LatestReviewComponent/>
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
            </div>

            {/*right gutter*/}
            <div className={"d-none d-xl-flex col-1"}></div>

        </div>
            </>
    )
};
export default HomeComponent;