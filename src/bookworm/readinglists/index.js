import React from "react";
import ReadingListsForm from "./reading-lists-form";
import {useSelector} from "react-redux";
import ReadingListItemComponent from "./reading-lists-item";

const ReadingListComponent = () => {
    const {readingLists} = useSelector((state) => state.readingLists)

/*    TODO: profile routing to display reading lists
    const [userID] = useSearchParams({id: ''})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findReadingListsByUserIDThunk(userID.get('id')))
    }, [])*/

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