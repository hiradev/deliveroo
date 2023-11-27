import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

import styles from "../styles/DynamicCarousel.module.css";
import Link from "next/link";

interface DynamicCarouselProps {
  images: string[];
}

SwiperCore.use([Autoplay]);

const DynamicCarousel = ({ images }: DynamicCarouselProps) => {
  const [swiper, setSwiper] = useState<any>(null);

  useEffect(() => {
    if (swiper) {
      const interval = setInterval(() => {
        swiper.slideNext();
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [swiper]);

  const allImages = [...images, ...images];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.row}>
        <Swiper
          effect="slide"
          slidesPerView={"auto"}
          direction="horizontal"
          autoplay={{ delay: 9000 }}
          onSwiper={setSwiper}
          loop
          spaceBetween={20}
          allowTouchMove={false}
          className={styles.carousel}
        >
          <SwiperSlide>
            <Link href="/second">
              <div className={styles.imageContainer}>
                {allImages.map((imageUrl, index) => (
                  <Image
                    key={index}
                    src={imageUrl}
                    alt={`Image ${index}`}
                    width={200}
                    height={200}
                    style={{
                      width: "200px",
                      height: "auto",
                      marginRight: "10px",
                    }}
                  />
                ))}
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.row}>
        <Swiper
          effect="slide"
          slidesPerView={"auto"}
          direction="horizontal"
          autoplay={{ delay: 9000 }}
          onSwiper={setSwiper}
          loop
          spaceBetween={20}
          allowTouchMove={false}
          className={styles.carousel}
        >
          <SwiperSlide>
            <Link href="/second">
              <div className={styles.imageContainer}>
                {allImages.map((imageUrl, index) => (
                  <Image
                    key={index}
                    src={imageUrl}
                    alt={`Image ${index}`}
                    width={200}
                    height={200}
                    style={{
                      width: "200px",
                      height: "auto",
                      marginRight: "10px",
                    }}
                  />
                ))}
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default DynamicCarousel;
