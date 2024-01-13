import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/Productcontext";
import PageNavigation from "../components/PageNavigation";
import MyImage from "../components/MyImage";
import FormatPrice from "../Helper/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "../components/Star";
import AddToCart from "./AddToCart";
import { motion } from "framer-motion";
import Loader from "./Loader";
const conainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 2.5,
    },
  },
  exit: {
    y: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  // console.log(singleProduct)

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;
  // console.log(singleProduct.image )

  const Newdescription = description?.slice(0, 100) + "...";
  // console.log(Newdescription);

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
    // console.log(getSingleProduct(`${API}?id=${id}`))
  }, []);

  if (isSingleLoading) {
    return <Loader />;
  }

  return (
    <motion.div
      variants={conainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Wrapper>
        <PageNavigation title={name} />
        <div className=" py-10 flex justify-center items-center">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-20 md:w-[70%] w-[95%]">
            {/* product Images  */}
            <div className="product_images">
              <MyImage imgs={image} />
              {/* {console.log(image)} */}
            </div>

            {/* product dAta  */}
            <div className="product-data capitalize">
              <h2 className="font-bold">{name}</h2>
              <Star stars={stars} reviews={reviews} />

              <p className="product-data-price">
                MRP :
                <del className="text-red-700">
                  <FormatPrice price={price + 250000} />
                </del>
              </p>
              <p className="product-data-price product-data-real-price">
                Deal of the Day:{" "}
                <span className="text-green-700">
                  {" "}
                  <FormatPrice price={price} />
                </span>
              </p>
              <p>{Newdescription}</p>
              <div className="product-data-warranty flex">
                <div className="product-warranty-data  ">
                  <TbTruckDelivery className="warranty-icon mx-auto" />
                  <p>Free Delivery</p>
                </div>

                <div className="product-warranty-data">
                  <TbReplace className="warranty-icon mx-auto" />
                  <p>30 Days Replacement</p>
                </div>

                <div className="product-warranty-data">
                  <GiCash className="warranty-icon mx-auto" />
                  <p>Cash on Delivery Available</p>
                </div>

                <div className="product-warranty-data">
                  <MdSecurity className="warranty-icon mx-auto" />
                  <p>2 Year Warranty </p>
                </div>
              </div>

              <div className="product-data-info">
                <p>
                  Available:
                  <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
                </p>
                <p>
                  ID : <span> {id} </span>
                </p>
                <p>
                  Brand :<span> {company} </span>
                </p>
              </div>
              <hr />
              {stock > 0 && <AddToCart products={singleProduct} />}
            </div>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 5rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          padding: 0.5rem;
          color: green;
        }
        p {
          font-size: 0.8rem;
          padding-top: 0.3rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default SingleProduct;
