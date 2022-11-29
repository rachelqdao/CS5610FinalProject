import React from "react";

const ReviewsComponent = () => {
    return (
        <div>
            <div className={"mb-4"}>
                <h3 className={"m-0 fw-bold"}>User Reviews</h3>
                <div className={"text-secondary"}>123 Reviews</div>
            </div>

            <div className={"d-flex d-inline-block"}>
                {/*icon*/}
                <div className={"me-3"}>
                    <img
                        src={"https://cdn.shopify.com/s/files/1/2040/0303/products/Happy_Cute_Kawaii_Fruit_Cartoon_Emoji_-_Apple_697267840_1200x1200.jpg?v=1501028335"}
                        height={72}
                        width={72}
                        alt={"user icon"}
                    />
                </div>

                {/*comment content*/}
                <div className={"bg-light rounded mb-4"}>
                    <div className={"py-3 px-4"}>
                        <div className={"mb-3"}>
                            <div className={"fw-bold"}>Username</div>
                            <div>123 Reviews</div>
                        </div>

                        <div>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star text-warning"></i>
                            <i className="bi bi-star text-warning"></i>
                        </div>
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
    )
}
export default ReviewsComponent