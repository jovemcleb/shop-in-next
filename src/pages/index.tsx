import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { HomeContainer, Product } from "../styles/pages/home.style";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import tShirt1 from "../assets/1.png";
import tShirt2 from "../assets/2.png";
import tShirt3 from "../assets/3.png";
import tShirt4 from "../assets/4.png";
import tShirt5 from "../assets/5.png";

export default function Home() {
  return (
    <HomeContainer>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Product>
            <Image src={tShirt1} width={520} height={480} alt="Camisa 1" />
            <footer>
              <strong>Camisa Beyond</strong>
              <span>R$ 03,00</span>
            </footer>
          </Product>
        </SwiperSlide>

        <SwiperSlide>
          <Product>
            <Image src={tShirt2} width={520} height={480} alt="Camisa 1" />
            <footer>
              <strong>Camisa Beyond</strong>
              <span>R$ 03,00</span>
            </footer>
          </Product>
        </SwiperSlide>

        <SwiperSlide>
          <Product>
            <Image src={tShirt3} width={520} height={480} alt="Camisa 1" />
            <footer>
              <strong>Camisa Beyond</strong>
              <span>R$ 03,00</span>
            </footer>
          </Product>
        </SwiperSlide>

        <SwiperSlide>
          <Product>
            <Image src={tShirt4} width={520} height={480} alt="Camisa 1" />
            <footer>
              <strong>Camisa Beyond</strong>
              <span>R$ 03,00</span>
            </footer>
          </Product>
        </SwiperSlide>

        <SwiperSlide>
          <Product>
            <Image src={tShirt5} width={520} height={480} alt="Camisa 1" />
            <footer>
              <strong>Camisa Beyond</strong>
              <span>R$ 03,00</span>
            </footer>
          </Product>
        </SwiperSlide>
      </Swiper>
    </HomeContainer>
  );
}
