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
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

type HomeProps = {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
};

export default function Home({ products }: HomeProps) {
  return (
    <HomeContainer>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        navigation={true}
        loopFillGroupWithBlank={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map(({id, name, price, imageUrl}) => (
          <SwiperSlide key={id}>
            <Product>
            <Image src={imageUrl} width={520} height={480} alt={name} />
            <footer>
              <strong>{name}</strong>
              <span>{price}</span>
            </footer>
            </Product>
          </SwiperSlide>
        ))}
      </Swiper>
    </HomeContainer>
  );
}

export const getServerSideProps = async () => {
  const { data } = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = data.map(({ id, name, images, default_price }) => {
    const price = default_price as Stripe.Price;

    return {
      id,
      name,
      imageUrl: images[0],
      price: price.unit_amount! / 100,
    };
  });

  return {
    props: {
      products,
    },
  };
};
