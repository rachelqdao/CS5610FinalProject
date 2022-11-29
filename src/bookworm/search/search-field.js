import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findBookBySearchTermThunk} from "./services/search-thunks";
import SearchItemComponent from "./search-item";
import {useSearchParams} from "react-router-dom";

const SearchFieldComponent = () => {
    const {books, loading} = useSelector((state) => state.books)
    const [searchTerms, setSearchTerms] = useState('')
    const [searchParams, setSearchParams] = useSearchParams({criteria: ''})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findBookBySearchTermThunk(searchParams.get('criteria')))
        setSearchTerms(searchParams.get('criteria'))
    }, [searchParams, dispatch])

    return(
        <div>
            <div className={"pb-2"}>
                <label htmlFor="username" className="form-label"><h3>Search for a book</h3></label>
                <div className={"input-group input-group-lg mb-4"}>
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        onChange={(e) =>
                            {setSearchTerms(e.target.value)}
                        }
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setSearchParams({'criteria': searchTerms})
                            }
                        }}
                        placeholder="The Great Gatsby"/>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                                setSearchParams({'criteria': searchTerms})
                            }
                        }>
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </div>

            <ul>
                {
                    loading === true ?
                        <h6>Loading...</h6> :
                        (books === false ?
                                null :
                                books &&
                                books.map((book => SearchItemComponent(book)))
                        )
                }
            </ul>
        </div>
    )
}
export default SearchFieldComponent