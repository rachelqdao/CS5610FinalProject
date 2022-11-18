import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findBookBySearchTermThunk} from "../../services/bookworm-thunks";

const SearchFieldComponent = () => {

    const [searchTerms, setSearchTerms] = useState('')
    const {books, loading} = useSelector((state) => state.books)

    const dispatch = useDispatch()

    return(
        <div>
            <div className={"pb-2"}>
                <label htmlFor="username" className="form-label"><h3>Search for a book</h3></label>
                <div className={"input-group input-group-lg"}>
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        onChange={(e) =>
                            {setSearchTerms(e.target.value)}
                        }
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                dispatch(findBookBySearchTermThunk(searchTerms))
                            }
                        }}
                        placeholder="The Great Gatsby"/>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                                dispatch(findBookBySearchTermThunk(searchTerms))
                            }
                        }>
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </div>

            <ul>
                {
                    loading && <li>Loading...</li>
                }
                {
                    books && books.map((book =>
                        <li key={book.id} className="list-group-item">
                            <div className={"d-flex d-inline-block"}>
                                <img src=
                                    {book.volumeInfo.imageLinks === undefined
                                        ? ""
                                        : `${book.volumeInfo.imageLinks.thumbnail}`}
                                     alt={"Thumbnail"}
                                     className={"h-100 me-3"}
                                />
                                <div>
                                    <h5>{book.volumeInfo.title}</h5>
                                    <p>{book.volumeInfo.authors}</p>
                                    <p>
                                        {`${book.volumeInfo.description}`.length > 250
                                            ? `${book.volumeInfo.description}`.substring(0, 250).concat("...")
                                            : `${book.volumeInfo.description}`
                                        }</p>
                                </div>
                            </div>
                            <hr/>
                        </li>))
                }
            </ul>
        </div>
    )

}
export default SearchFieldComponent