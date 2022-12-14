import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {findBookByAuthorThunk, findBookByKeywordThunk} from "../search/services/search-thunks";
import AuthorCarouselComponent from "./author-carousel";
import KeywordCarouselComponent from "./keyword-carousel";
import ReviewItemComponent from "../reviews/review-item";

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

    return (
        <>
        <div className={"row"}>
            {/*left gutter*/}
            <div className={"d-none d-xl-flex col-1"}></div>

            {/*main content*/}
            <div className={"col-12 col-xl-10"}>

                {
                    currentUser &&
                    <h4 className={"fw-bold wd-green"}>Welcome, {currentUser.username}!</h4>
                }

                {
                    currentUser === null ?
                        null
                        :
                        <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>
                            <h3 className={"fw-bold mb-1"}>📚 Your Reviews</h3>
                            <ReviewItemComponent/>
                        </div>
                }

                <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>
                    <h3 className={"fw-bold mb-1"}>📅 Weekly Recommendations</h3>
                    <p className={"fw-bold m-0 text-secondary"}>{`Check out weekly recommendations from our featured author of the week!`}</p>
                    <p className={"fw-bold m-0 text-secondary"}>{`This week's author: ${authorOfWeek}!`}</p>
                    <hr/>
                    <AuthorCarouselComponent/>
                </div>

                <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>
                    <h3 className={"fw-bold mb-1"}>🎄 Season's Picks: {keyword}</h3>
                    <p className={"fw-bold m-0 text-secondary"}>The holiday season is here! Check out some of our favorite holiday reads.</p>
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