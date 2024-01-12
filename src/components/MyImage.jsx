import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState("");

  return (
    <Wrapper className="grid grid-cols-2 ">
      <div className="grid gap-5">
        {imgs.map((curElem, index) => (
          <figure key={index}>
            <img
               
              className="w-[70%] md:w-[100%]"
              src={curElem.url}
              alt={curElem.filename}
              onClick={() => setMainImage(curElem.url)}
            />
          </figure>
        ))}
      </div>

      <div className="flex  ml-3 items-center justify-center ">
        {mainImage ? (
          <img className="max-w-full h-[50%]" src={mainImage} alt="Main" />
        ) : (
          <img className="max-w-full h-auto" src={imgs[0].url} alt="Default" />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  

  .grid {
      img {
      max-width: 10rem;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
    }
  }
`;

export default MyImage;
