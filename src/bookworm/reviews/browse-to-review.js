import React from "react";
import {useNavigate} from "react-router-dom";

const BrowseToReview = () => {
    const navigate = useNavigate()
    const handleBrowseToReviewBtnClick = () => {
        navigate('/search')
    }

    return (
        <div>
            <>
                <button
                    className={"btn wd-green-button me-2 mb-2"}
                    onClick={handleBrowseToReviewBtnClick}
                >
                    <i className="bi bi-search"> </i>
                    Browse
                </button>
            </>
        </div>
    )
}

export default BrowseToReview