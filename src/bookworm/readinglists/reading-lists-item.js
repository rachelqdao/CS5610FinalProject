import React from "react";

const ReadingListItemComponent = (readingList) => {
    return (
        <div>
            <div>
                <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>
                    <h5 className={"fw-bold"}>{readingList.listName}</h5>
                    <p className={"text-secondary"}>{readingList.description}</p>
                </div>
            </div>
        </div>
    )
}
export default ReadingListItemComponent