import {useSelector} from "react-redux";
import React from "react";
import HomeCarouselItemComponent from "./home-carousel-item"
import Slider from "react-slick";
import "../../index.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const KeywordCarouselComponent = () => {
    const {booksByKeyword, loading} = useSelector((state) => state.booksByKeyword)

    var sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: true,
        accessibility: true
    };

    return (
        <div className="container">
            <Slider {...sliderSettings}>
                {
                    loading === true ? <h6>Loading...</h6> :
                        (booksByKeyword === false ? null :
                                booksByKeyword &&
                                booksByKeyword.map((book => HomeCarouselItemComponent(book)))
                        )
                }
            </Slider>
        </div>
    )
}

export default KeywordCarouselComponent