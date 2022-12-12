import React, {useEffect} from "react";
import ReadingListsForm from "./reading-lists-form";
import {useSelector} from "react-redux";
import ReadingListItemComponent from "./reading-lists-item";

const ReadingListComponent = () => {
    const {readingLists} = useSelector((state) => state.readingLists)

/*    TODO: profile routing to display reading lists, not sure why it displays sometimes
    const [userID] = useSearchParams({id: ''})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findReadingListsByUserIDThunk(userID.get('id')))
    }, [])*/

    useEffect(() => {

    }, [readingLists])

    return(
        <>
            <ReadingListsForm/>

            {/*display all reading lists and books in each*/}
            {
                readingLists &&
                readingLists.map((readingList) => ReadingListItemComponent(readingList))
            }
        </>
    )
}
export default ReadingListComponent