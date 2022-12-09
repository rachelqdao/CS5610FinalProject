import React from "react";


const ReviewItemComponent = () => {
    return (
        <>
            <div className={"mb-3"}>
                <div className={"d-flex d-inline-block bg-white border border-dark border-2 border-opacity-10 rounded p-4"}>

                    {/*icon*/}
                    <div className={"d-none d-md-flex me-4"}>
                        <img
                            src={"https://cdn.shopify.com/s/files/1/2040/0303/products/Happy_Cute_Kawaii_Fruit_Cartoon_Emoji_-_Apple_697267840_1200x1200.jpg?v=1501028335"}
                            height={72}
                            width={72}
                            alt={"user icon"}
                        />
                    </div>

                    {/*comment content*/}
                    <div className={"rounded"}>
                        <div className={""}>

                            {/*user information*/}
                            <div className={"mb-3"}>
                                <h5 className={"fw-bold wd-green"}>dan123</h5>

                                {/*user rating*/}
                                <div>

                                    <i className="bi bi-star-fill wd-pink"> </i>
                                    <i className="bi bi-star-fill wd-pink"> </i>
                                    <i className="bi bi-star-fill wd-pink"> </i>
                                    <i className="bi bi-star wd-pink"> </i>
                                    <i className="bi bi-star wd-pink"> </i>
                                </div>
                            </div>

                            {/*user review*/}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewItemComponent