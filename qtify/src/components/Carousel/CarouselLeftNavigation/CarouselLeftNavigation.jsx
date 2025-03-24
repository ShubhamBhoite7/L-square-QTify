import React, { useEffect, useState } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(()=>{
    swiper.on("slideChange", () => {
      // to set the state when ever we change the slide, to control conditional rendering of left arrow button
      setIsBeginning(swiper.isBeginning)
  })
  },[swiper]);
//   swiper.on("slideChange", function () {
//     setIsBeginning(swiper.isBeginning);
//   });

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
}