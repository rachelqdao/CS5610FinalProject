import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const ReadingListItemComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {readingLists} = useSelector((state) => state.readingLists)
    const [isCurrentUser, setIsCurrentUser] = useState(false)

    const [userID] = useSearchParams({id: ''})

    useEffect(() => {
        if (userID.get('id') === '' || userID.get('id') === currentUser._id) {
            setIsCurrentUser(true)
        } else {
            setIsCurrentUser(false)
        }
    }, [])

    return (
        readingLists &&
        readingLists.map((readingList) =>
            <div>
                <div>
                    <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>

                        {
                            isCurrentUser &&
                            <button
                                className={"btn btn-primary float-end"}
                                onClick={() => {
                                    console.log(`is current user: ${isCurrentUser}`)
                                    }
                                }
                            >
                                Delete this List
                            </button>
                        }
                        <h5 className={"fw-bold"}>{readingList.listName}</h5>
                        <p className={"text-secondary"}>{readingList.description}</p>

                        {
                            readingList.books.map((book) => <p>{book}</p>)
                        }
                    </div>
                </div>
            </div>
        )
    )
}
export default ReadingListItemComponent