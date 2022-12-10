import React from "react";


const ReviewItemComponent = () => {
    return (
        <>
            <div className={"mb-3"}>
                <div className={"d-flex d-inline-block bg-white border border-dark border-2 border-opacity-10 rounded p-4"}>

                    {/*comment content*/}
                    <div className={"rounded"}>

                        {/*user information*/}
                        <div className={"mb-3"}>

                            {/*username*/}
                            <h5 className={"fw-bold wd-green m-1"}>dan123</h5>

                            {/*user rating*/}
                            <div>
                                ⭐⭐⭐
                            </div>
                        </div>

                        {/*user review*/}
                        <p className={"m-0"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewItemComponent