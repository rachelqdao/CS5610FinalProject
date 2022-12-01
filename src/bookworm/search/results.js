import {useSelector} from "react-redux";
import React from "react";
import ResultsItemComponent from "./results-item";

const ResultsComponent = () => {
    const {books, loading} = useSelector((state) => state.books)

    return (
        <ul>
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
    )
}
export default ResultsComponent