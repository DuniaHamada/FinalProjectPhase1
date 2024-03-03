import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from "./Home.module.css";


function Home() {
  const [categories, setProducts] = useState([]);
  const getProducts = async () => {
    const { data } = await axios.get(
      `https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`
    );
    setProducts(data.categories);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Swiper
      className={style.swiper + " mt-5"}
      spaceBetween={20}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {categories.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="products">
            <img src={product.image.secure_url} alt="this is a product image" className="img-fluid w-2"/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Home;
