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
                <label htmlFor="username" className="form-label"><h4>Search for a book</h4></label>
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
                    books && books.map((book =>
                        <li key={book.id} className="list-group-item"> {book.volumeInfo.title}
                        </li>))
                }
            </ul>
        </div>
    )

}
export default SearchFieldComponent