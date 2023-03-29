import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";
import { HomeContainer, Product } from "../styles/pages/home.style";

import { stripe } from "../lib/stripe";
import Stripe from "stripe";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Head from "next/head";

type HomeProps = {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
};

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Shop</title>
      </Head>
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
          {products.map(({ id, name, price, imageUrl }) => (
            <SwiperSlide key={id}>
              <Link href={`/product/${id}`} prefetch={false}>
                <Product>
                  <Image src={imageUrl} width={520} height={480} alt={name} />
                  <footer>
                    <strong>{name}</strong>
                    <span>{price}</span>
                  </footer>
                </Product>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = data.map(({ id, name, images, default_price }) => {
    const price = default_price as Stripe.Price;

    return {
      id,
      name,
      imageUrl: images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, //2 hours
  };
};
