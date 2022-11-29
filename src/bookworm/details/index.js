import React, {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {findBookByIDThunk} from "./services/details-thunks";
import DetailsInfoComponent from "./details-info";
import ReviewsComponent from "./reviews";

const DetailsComponent = () => {
    const [searchParams] = useSearchParams({identifier: ''})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findBookByIDThunk(searchParams.get('identifier')))
    }, [searchParams, dispatch])

    return (
        <>
            <DetailsInfoComponent/>
            <ReviewsComponent/>
        </>
    )

}
export default DetailsComponent