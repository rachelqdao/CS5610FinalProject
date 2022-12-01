import React from "react";
import {Link} from "react-router-dom";

const ResultsItemComponent = (book) => {
    return (
        <li key={book.id} className="list-group-item">
            <Link to={`/details?identifier=${book.id}`}>
                <div className={"d-flex d-inline-block"}>
                    <img src=
                             {book.volumeInfo.imageLinks
                                 ? `${book.volumeInfo.imageLinks.thumbnail}`
                                 : ''}
                         alt={"Cover Thumbnail"}
                         className={"h-100 me-3"}
                    />
                    <div>
                        <h5 className={"fw-bold"}>{book.volumeInfo.title}</h5>
                        <p className={"text-secondary"}>
                            {book.volumeInfo.authors
                                ? book.volumeInfo.authors.join(', ')
                                : 'No authors available'}
                        </p>
                        <p>
                            {book.volumeInfo.description ?
                                `${book.volumeInfo.description}`.length > 250
                                ? `${book.volumeInfo.description}`.substring(0, 250).concat("...")
                                : `${book.volumeInfo.description}` :
                                'No description available'
                            }
                        </p>
                    </div>
                </div>
            </Link>
            <hr/>
        </li>
    )
}

export default ResultsItemComponent