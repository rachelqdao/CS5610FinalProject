import {Link} from "react-router-dom";
import "../../index.css"
import React from "react";

const HomeCarouselItemComponent = (book) => {
    return (
        <div key={book.id} className="list-group-item mb-3 p-4">
            <Link to={`/details?identifier=${book.id}`} className={"wd-link-color"}>
                <img
                    src={book.bookCover}
                    className={"img-fluid w-100 rounded"}
                    alt={"Book Cover"}
                />
            </Link>
        </div>
    )
}

export default HomeCarouselItemComponent