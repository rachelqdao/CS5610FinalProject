import React from "react";
import {useSelector} from "react-redux";

const DescriptionComponent = () => {
    const {bookDetails} = useSelector((state) => state.bookDetails)

    return (
        <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-5"}>
            <div>
                <span className={"fw-bold wd-green"}>Description</span>
                {
                    bookDetails.volumeInfo.description
                        ? <div className={"mt-1 mb-3"}
                               dangerouslySetInnerHTML={{__html: bookDetails.volumeInfo.description}}>
                        </div>
                        : <div className={"mt-1 mb-3"}>No description available</div>
                }
            </div>
        </div>
    )
}

export default DescriptionComponent