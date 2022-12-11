import {useSelector} from "react-redux";

const ReadingListComponent = () => {
    const {currentUser} = useSelector((state) => state.users)

    return(
        <>
            <div className={"mb-3"}>
                <button className={"btn btn-primary float-end"}>
                    <i className="bi bi-bookmarks-fill"></i> Create a new Reading List
                </button>

                <h4 className={"fw-bold m-0"}>Your Reading Lists</h4>
            </div>

            <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>
                <h5 className={"fw-bold"}>Nonfiction</h5>
            </div>

            <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>
                <h5 className={"fw-bold"}>Fantasy</h5>
            </div>
        </>
    )
}
export default ReadingListComponent