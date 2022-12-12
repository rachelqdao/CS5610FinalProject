import React, {useEffect} from "react";
import ReadingListsForm from "./reading-lists-form";
import {useDispatch, useSelector} from "react-redux";
import ReadingListItemComponent from "./reading-lists-item";
import {findReadingListsByUserIDThunk} from "./services/reading-lists-thunks";
import {useSearchParams} from "react-router-dom";

const ReadingListComponent = () => {
    const {readingLists} = useSelector((state) => state.readingLists)

    const [userID] = useSearchParams({id: ''})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findReadingListsByUserIDThunk(userID.get('id')))
    }, [])

    return(
        <>
            <ReadingListsForm/>
            {
                readingLists &&
                readingLists.map((readingList) => ReadingListItemComponent(readingList))
            }

        </>
    )
}
export default ReadingListComponent