import React from "react";
import {Link} from "react-router-dom";

const SearchItemComponent = (book) => {
    return (

            <li key={book.id} className="list-group-item">
                <Link to={`/details?identifier=${book.id}`}>
                    <div className={"d-flex d-inline-block"}>
                        <img src=
                                 {book.volumeInfo.imageLinks === undefined
                                     ? ""
                                     : `${book.volumeInfo.imageLinks.thumbnail}`}
                             alt={"Thumbnail"}
                             className={"h-100 me-3"}
                        />
                        <div>
                            <h5 className={"fw-bold"}>{book.volumeInfo.title}</h5>
                            <p>{book.volumeInfo.authors}</p>
                            <p>
                                {`${book.volumeInfo.description}`.length > 250
                                    ? `${book.volumeInfo.description}`.substring(0, 250).concat("...")
                                    : `${book.volumeInfo.description}`
                                }
                            </p>
                        </div>
                    </div>
                </Link>
                <hr/>
            </li>
    )
}

export default SearchItemComponent