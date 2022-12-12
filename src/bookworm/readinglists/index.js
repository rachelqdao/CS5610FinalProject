import React, {useEffect} from "react";
import ReadingListsForm from "./reading-lists-form";
import {useDispatch, useSelector} from "react-redux";
import ReadingListItemComponent from "./reading-lists-item";
import {findReadingListsByUserIDThunk} from "./services/reading-lists-thunks";
import {useSearchParams} from "react-router-dom";

const ReadingListComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {readingLists} = useSelector((state) => state.readingLists)

    const [userID] = useSearchParams({id: ''})
    const dispatch = useDispatch()

    useEffect(() => {

        // TODO: finds reading list based on profile id in URL,
        //  if NO params, it is the users own profile
        //  otherwise, its another users profile
        if (userID.get('id') === '') {
            dispatch(findReadingListsByUserIDThunk(currentUser._id))
        } else {
            dispatch(findReadingListsByUserIDThunk(userID.get('id')))
        }
        }, [])

    return(
        <>
            <ReadingListsForm/>
            {
                readingLists &&
                readingLists.map((readingList) => ReadingListItemComponent(readingList, userID, currentUser))
            }

        </>
    )
}
export default ReadingListComponent