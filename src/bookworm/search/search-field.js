import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {findBookBySearchTermThunk} from "./services/search-thunks";
import {useSearchParams} from "react-router-dom";
import ResultsComponent from "./results";

const SearchFieldComponent = () => {
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
            <ResultsComponent/>
        </div>
    )
}
export default SearchFieldComponent