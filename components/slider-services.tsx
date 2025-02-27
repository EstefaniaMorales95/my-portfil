"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next'; 

import { serviceData } from '@/data';

const SliderServices = () => {
    const { t } = useTranslation(); 
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
        >

            {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="flex px-2 py-2 h-auto md:h-[200px] rounded-lg cursor-pointer bg-[rgba(123,47,47,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
                        <div className="mb-4 text-6xl text-secondary">{item.icon}</div>
                        <div>
                            <h3 className="mb-4 text-lg">{t(`services.service${index + 1}.title`)}</h3> 
                            <p className="text-sm">{t(`services.service${index + 1}.description`)}</p> 
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderServices;