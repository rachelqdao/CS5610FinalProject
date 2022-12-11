import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {findBookBySearchTermThunk} from "./services/search-thunks";
import ResultsComponent from "./results";

const SearchComponent = () => {
    const [searchTerms, setSearchTerms] = useState('')
    const [searchParams, setSearchParams] = useSearchParams({criteria: ''})

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findBookBySearchTermThunk(searchParams.get('criteria')))
        setSearchTerms(searchParams.get('criteria'))
    }, [searchParams, dispatch])

    return (
        <div className={"px-3"}>
            <div className={"row"}>
                <div className={'d-none d-lg-flex col-lg-1 col-xl-2'}></div>
                <div className={"col-12 col-lg-10 col-xl-8 my-4 pb-2"}>
                    <label htmlFor="username" className="form-label"><h3 className={"fw-bold"}>Search for a book</h3></label>
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
                <div className={'d-none d-lg-flex col-lg-1 col-xl-2'}></div>
            </div>
            <ResultsComponent/>
        </div>
    )
}
export default SearchComponent