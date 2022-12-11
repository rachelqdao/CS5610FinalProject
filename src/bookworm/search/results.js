import {useSelector} from "react-redux";
import React from "react";
import ResultsItemComponent from "./results-item";

const ResultsComponent = () => {
    const {books, loading} = useSelector((state) => state.books)

    return (
        <div className={"row"}>
            <div className={'d-none d-lg-flex col-lg-1 col-xl-2'}></div>
            <ul className={'col-12 col-lg-10 col-xl-8'}>
                {
                    loading === true ?
                        <h6>Loading...</h6> :
                        (books === false ?
                                null :
                                books &&
                                books.map((book => ResultsItemComponent(book)))
                        )
                }
            </ul>
            <div className={'d-none d-lg-flex col-lg-1 col-xl-2'}></div>
        </div>
    )
}
export default ResultsComponent