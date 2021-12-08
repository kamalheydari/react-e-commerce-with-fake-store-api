import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EmptyCart = () => {
  return (
    <main>
      <Wrapper className="page-w-b  ">
        <div className="empty-cart">
          <h2>
            Your cart is <span>empty</span>
          </h2>
          <Link to="/products" className="green-box">
            Shop now
          </Link>
        </div>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  place-items: center;
  .empty-cart {
    text-align: center;
    h2 {
      margin-bottom: 1.5rem;
      span {
        color: var(--red-color-1);
      }
    }
  }
`;
export default EmptyCart;