"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "animate.css";

const HeroSection = () => {
    return (
        <div className="container mx-auto my-5">

            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 3000 }}
            >

                <SwiperSlide>
                    <div className="h-[500px] w-full relative flex items-center justify-center rounded-2xl overflow-hidden">

                        <div
                            className="absolute inset-0 scale-110"
                            style={{
                                backgroundImage: "url('/hero1.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "blur(6px)",
                            }}
                        ></div>

                        <div className="absolute inset-0 bg-black/40"></div>

                        <div className="relative flex flex-col items-center text-center text-white px-6">

                            <h1 className="text-3xl md:text-6xl font-bold animate__animated animate__fadeInDown">
                                Summer Sale 50% OFF
                            </h1>

                            <p className="mt-4 text-sm md:text-lg text-gray-200 animate__animated animate__fadeInUp">
                                Grab your favorite items now before the offer ends
                            </p>

                            <div className="mt-6 flex gap-4 animate__animated animate__zoomIn">
                                <button className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
                                    Shop Now
                                </button>

                                <button className="px-6 py-2 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                                    Explore
                                </button>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[500px] w-full relative flex items-center justify-center rounded-2xl overflow-hidden">

                        <div
                            className="absolute inset-0 scale-110"
                            style={{
                                backgroundImage: "url('/hero2.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "blur(6px)",
                            }}
                        ></div>

                        <div className="absolute inset-0 bg-black/40"></div>

                        <div className="relative flex flex-col items-center text-center text-white px-6">

                            <h1 className="text-3xl md:text-6xl font-bold animate__animated animate__fadeInDown">
                                Hot Deals 🔥
                            </h1>

                            <p className="mt-4 text-sm md:text-lg text-gray-200 animate__animated animate__fadeInUp">
                                Limited time offers you can’t miss
                            </p>

                            <div className="mt-6 flex gap-4 animate__animated animate__zoomIn">
                                <button className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
                                    Shop Now
                                </button>

                                <button className="px-6 py-2 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                                    View Deals
                                </button>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default HeroSection;