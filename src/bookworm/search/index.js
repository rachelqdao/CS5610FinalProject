import React from "react";
import ResultsComponent from "./results"
import SearchFieldComponent from "./search-field";

const SearchComponent = () => {
    return (
        <div className={"px-3"}>
            <SearchFieldComponent/>
            <div>
                <ResultsComponent/>

            </div>


            <div>
                <h3 className={"text-secondary pb-3"}>
                    ...or check out some recommended books in the meantime!
                </h3>

                <div className={"d-flex justify-content-between"}>
                    <div>
                        <h5>To Kill a Mockingbird</h5>
                        <p>by Harper Lee</p>
                    </div>

                    <div>
                        <h5>To Kill a Mockingbird</h5>
                        <p>by Harper Lee</p>
                    </div>

                    <div>
                        <h5>To Kill a Mockingbird</h5>
                        <p>by Harper Lee</p>
                    </div>

                    <div>
                        <h5>To Kill a Mockingbird</h5>
                        <p>by Harper Lee</p>
                    </div>

                    <div>
                        <h5>To Kill a Mockingbird</h5>
                        <p>by Harper Lee</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchComponent