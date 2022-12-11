import React from "react";
import ReadingListsForm from "./reading-lists-form";

const ReadingListComponent = () => {

    return(
        <>
            <ReadingListsForm/>

            {/*display all reading lists and books in each*/}
            <div>
                <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>
                    <h5 className={"fw-bold"}>Nonfiction</h5>
                </div>

                <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>
                    <h5 className={"fw-bold"}>Fantasy</h5>
                </div>
            </div>
        </>
    )
}
export default ReadingListComponent