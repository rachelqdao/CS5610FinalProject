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
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }

            {
                currentUser === null ?
                    <>
                        <h1 className={"fw-bold"}>Weekly Recommendations</h1>
                        <AuthorCarouselComponent/>
                    </>
                :
                    <>
                        <h1 className={"fw-bold"}>Your Reviews</h1>
                        <ReviewItemComponent/>
                    </>
            }

            <hr/>

            <h1 className={"fw-bold"}>Season's Picks: {keyword}</h1>
            <KeywordCarouselComponent/>
        </>
    )
};
export default HomeComponent;