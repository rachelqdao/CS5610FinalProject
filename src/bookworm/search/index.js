import React from "react";

const SearchComponent = () => {
    return (
        <div className={"px-3"}>
            <div className={"pb-5 justify-content-center"}>
                <label htmlFor="username" className="form-label"><h2>Search for a book</h2></label>
                <input type="text" id="username" className="form-control form-control-lg rounded-pill"
                       placeholder="The Great Gatsby"/>
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