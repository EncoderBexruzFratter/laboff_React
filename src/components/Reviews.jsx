import React from 'react'
import work from "../img/works/work.png";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperBtns from "./swiper/SwiperBtns";
import ruka from "../img/works/ruka.png"
import reveiws from "../img/works/reweivs.png"

export default function Reviews() {
    return (
        <div>
            <section className="bg-white md:pt-[120px] py-[84px] md:pb-[190px]">
                <div className="max-w-[1206px]  relative mx-auto px-5">
                    <h2 className="mb-8 md:mb-[42px] font-bold text-[32px] font-[Bebas Neue] text-[#197FAF] md:text-[64px]">
                        Отзывы
                    </h2>
                    <div className="max-w-[960px] w-full mx-auto mb-8 ">
                        <Swiper
                            modules={[Navigation]}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            navigation={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1.1,
                                    spaceBetween: 10,
                                },
                                400: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper "

                        >
                            <SwiperSlide>
                                <div className="w-full">
                                    <img
                                        src={reveiws}
                                        alt=""
                                        className="w-full mb-6 md:mb-0 md:h-[595px] h-[436px] md:rounded-none rounded-[24px]"
                                    />
                                    <div
                                        className="md:hidden flex items-center gap-4 font-medium text-sm font-[Montserrat
                          ] text-[#197FAF]"
                                    >
                                        <img src={ruka} alt="" />
                                        Листайте влево
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full">
                                    <img
                                        src={reveiws}
                                        alt=""
                                        className="w-full mb-6 md:mb-0 md:h-[595px] h-[436px] md:rounded-none rounded-[24px]"
                                    />
                                    <div
                                        className="md:hidden flex items-center gap-4 font-medium text-sm font-[Montserrat
                          ] text-[#197FAF]"
                                    >
                                        <img src={ruka} alt="" />
                                        Листайте влево
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full">
                                    <img
                                        src={reveiws}
                                        alt=""
                                        className="w-full mb-6 md:mb-0 md:h-[595px] h-[436px] md:rounded-none rounded-[24px]"
                                    />
                                    <div
                                        className="md:hidden flex items-center gap-4 font-medium text-sm font-[Montserrat
                          ] text-[#197FAF]"
                                    >
                                        <img src={ruka} alt="" />
                                        Листайте влево
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full">
                                    <img
                                        src={reveiws}
                                        alt=""
                                        className="w-full mb-6 md:mb-0 md:h-[595px] h-[436px] md:rounded-none rounded-[24px]"
                                    />
                                    <div
                                        className="md:hidden flex items-center gap-4 font-medium text-sm font-[Montserrat
                          ] text-[#197FAF]"
                                    >
                                        <img src={ruka} alt="" />
                                        Листайте влево
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full">
                                    <img
                                        src={reveiws}
                                        alt=""
                                        className="w-full mb-6 md:mb-0 md:h-[595px] h-[436px] md:rounded-none rounded-[24px]"
                                    />
                                    <div
                                        className="md:hidden flex items-center gap-4 font-medium text-sm font-[Montserrat
                          ] text-[#197FAF]"
                                    >
                                        <img src={ruka} alt="" />
                                        Листайте влево
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full">
                                    <img
                                        src={reveiws}
                                        alt=""
                                        className="w-full mb-6 md:mb-0 md:h-[595px] h-[436px] md:rounded-none rounded-[24px]"
                                    />
                                    <div
                                        className="md:hidden flex items-center gap-4 font-medium text-sm font-[Montserrat
                          ] text-[#197FAF]"
                                    >
                                        <img src={ruka} alt="" />
                                        Листайте влево
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full">
                                    <img
                                        src={reveiws}
                                        alt=""
                                        className="w-full mb-6 md:mb-0 md:h-[595px] h-[436px] md:rounded-none rounded-[24px]"
                                    />
                                    <div
                                        className="md:hidden flex items-center gap-4 font-medium text-sm font-[Montserrat
                          ] text-[#197FAF]"
                                    >
                                        <img src={ruka} alt="" />
                                        Листайте влево
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperBtns />
                        </Swiper>
                    </div>
                    <button
                        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                        className="md:max-w-[400px] hover:bg-black slow__default w-full flex items-center justify-center gap-6 md:gap-4 font-medium text-lg md:text-2xl  text-white py-4 md:py-6 px-16 rounded-[60px] bg-[#197FAF]"
                    >
                        Посмотреть ещё
                        <div className="md:max-w-[43px] max-w-[23px]">
                            <svg
                                className="w-full"
                                viewBox="0 0 43 43"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M31.1532 42.4338C37.4197 42.4338 42.4997 37.3538 42.4997 31.0873C42.4997 24.8207 37.4197 19.7407 31.1532 19.7407C24.8867 19.7407 19.8066 24.8207 19.8066 31.0873C19.8066 37.3538 24.8867 42.4338 31.1532 42.4338Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M9.82455 36.3688C12.7415 36.3688 15.1061 34.0042 15.1061 31.0872C15.1061 28.1703 12.7415 25.8057 9.82455 25.8057C6.90761 25.8057 4.54297 28.1703 4.54297 31.0872C4.54297 34.0042 6.90761 36.3688 9.82455 36.3688Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M31.1538 17.0615C35.1873 17.0615 38.457 13.7918 38.457 9.75831C38.457 5.72485 35.1873 2.45508 31.1538 2.45508C27.1204 2.45508 23.8506 5.72485 23.8506 9.75831C23.8506 13.7918 27.1204 17.0615 31.1538 17.0615Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M9.82489 19.0834C14.9749 19.0834 19.1498 14.9085 19.1498 9.75848C19.1498 4.60849 14.9749 0.433594 9.82489 0.433594C4.6749 0.433594 0.5 4.60849 0.5 9.75848C0.5 14.9085 4.6749 19.0834 9.82489 19.0834Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
            </section>
        </div>
    )
}
