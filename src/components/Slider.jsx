import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "animate.css";

const Slider = () => {
    return (
        <div className="hidden md:flex w-1/2 h-screen md:px-5 md:py-25 lg:py-50 ">
            <Swiper
                modules={[Autoplay]}
                loop
                autoplay={{ delay: 3500 }}
                className="w-full h-full"
            >
                <SwiperSlide>
                    <div className="rounded-2xl overflow-hidden h-full relative flex items-center justify-center overflow-hidden">

                        <div
                            className="absolute inset-0 scale-110 "
                            style={{
                                backgroundImage: "url('/hero1.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "blur(8px)",
                            }}
                        />

                        <div className="absolute inset-0 bg-black/50"></div>

                        <div className="relative text-center text-white px-6 max-w-lg">
                            <h1 className="text-4xl md:text-6xl font-bold animate__animated animate__fadeInDown">
                                Summer Sale 50% OFF
                            </h1>
                            <p className="mt-4 text-lg text-gray-200">
                                Grab your favorite items before it ends
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="rounded-2xl overflow-hidden h-full relative flex items-center justify-center overflow-hidden">

                        <div
                            className="absolute inset-0 scale-110"
                            style={{
                                backgroundImage: "url('/hero2.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "blur(8px)",
                            }}
                        />

                        <div className="absolute inset-0 bg-black/50"></div>

                        <div className="relative text-center text-white px-6 max-w-lg">
                            <h1 className="text-4xl md:text-6xl font-bold">
                                Hot Deals 🔥
                            </h1>
                            <p className="mt-4 text-lg text-gray-200">
                                Limited time offers you can’t miss
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;