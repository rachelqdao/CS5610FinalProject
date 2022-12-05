import React from "react";
import {Link} from "react-router-dom";

const ResultsItemComponent = (book) => {
    return (
        <li key={book.id} className="list-group-item">
            <Link to={`/details?identifier=${book.id}`}>
                <div className={"row"}>
                    <div className={"d-none d-sm-block col-lg-2 col-md-3 col-sm-4"}>
                        <img src=
                                 {book.volumeInfo.imageLinks
                                     ? `${book.volumeInfo.imageLinks.thumbnail}`
                                     : ''}
                             alt={'Book Cover'}
                        />
                    </div>
                    <div className={"col-lg-10 col-md-9 col-sm-8"}>
                        <h5 className={"fw-bold"}>{book.volumeInfo.title}</h5>
                        <p className={"text-secondary"}>
                            {book.volumeInfo.authors
                                ? book.volumeInfo.authors.join(', ')
                                : 'No authors available'}
                        </p>
                        <p className={"d-none d-lg-block"}>
                            {book.volumeInfo.description ?
                                `${book.volumeInfo.description}`.length > 250
                                ? `${book.volumeInfo.description}`.substring(0, 250).concat("...")
                                : `${book.volumeInfo.description}` :
                                'No description available'
                            }
                        </p>

                        <p className={"d-none d-sm-block d-md-block d-lg-none"}>
                            {book.volumeInfo.description ?
                                `${book.volumeInfo.description}`.length > 150
                                    ? `${book.volumeInfo.description}`.substring(0, 150).concat("...")
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