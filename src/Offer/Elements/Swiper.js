import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import {itemData} from "../../AboutUs/Elements/itemData";
import '../Offer.scss';
import {Box} from "@mui/material";

export default function ImgSwiper () {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={32}
            effect={"fade"}
            centeredSlides={true}
            navigation={true}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, EffectFade, Navigation]}
            className="mySwiper"
        >

            {itemData.map((item) => (
                <SwiperSlide>
                    <Box className={`swiper-box`}>
                    <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        className={`offer-img-shadow`}
                    />
                        </Box>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}