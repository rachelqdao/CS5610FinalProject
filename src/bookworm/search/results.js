import {useSelector} from "react-redux";
import React from "react";
import ResultsItemComponent from "./results-item";

const ResultsComponent = () => {
    const {books, loading} = useSelector((state) => state.books)

    return (
        <div className={"row"}>
{/*            <div className={"row"}>
                <div className="d-block d-sm-none fa-2x">XS</div>
                <div className="d-none d-sm-block d-md-none fa-2x">S</div>
                <div className="d-none d-md-block d-lg-none fa-2x">M</div>
                <div className="d-none d-lg-block d-xl-none fa-2x">L</div>
                <div className="d-none d-xl-block d-xxl-none fa-2x">XL</div>
                <div className="d-none d-xxl-block fa-2x">XXL</div>
            </div>*/}

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