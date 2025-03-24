import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(()=>{
    swiper.on("slideChange", () => {
      // to set the state when ever we change the slide, to control conditional rendering of Right arrow button
      setIsEnd(swiper.isEnd)
  })
  },[swiper]);

//   swiper.on("slideChange", function () {
//     setIsEnd(swiper.isEnd);
//   });

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}