import React from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";

const CuteForm = styled.form`
  border: 1px solid ${(props) => props.theme.color};
  font-family: courier;
  margin: 0 50px 25px;
  padding: 10px 25px 25px;
  text-align: center;
  transform: scale(1);
  transition: transform 0.3s;

  ${(props) =>
    props.image &&
    css`
      background-image: url("${props.image}");
    `}

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

function BuyForm(props) {
  const [quantity, setQuantity] = React.useState(0);

  const removeQuantity = () => {
    setQuantity(quantity - 1);
  };
  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <CuteForm onMouseEnter={() => props.updateTheme()}>
      <p>¿Cuántos boletos para {props.movie}?</p>

      <div>
        <Button text="-" power={removeQuantity} disabled={quantity <= 0} />

        <span> {quantity} </span>

        <Button
          text="+"
          power={addQuantity}
          disabled={quantity >= props.available}
        />
      </div>
    </CuteForm>
  );
}

export { BuyForm };
