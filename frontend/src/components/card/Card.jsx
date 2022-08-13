import React from "react";
import { CardContainer, CardTitle, CardDescription } from "./Card.styled.js";

const Card = () => {
  return (
    <>
      <CardContainer>
        <CardTitle>Ut porttitor orci nec eros maximus bibendum. Sed lobortis massa a rutrum tincidunt.</CardTitle>
        <CardDescription>Aliquam erat volutpat. Fusce congue est et ante venenatis facilisis. In vestibulum dui velit, at feugiat leo tempus at. Quisque quis pellentesque neque.</CardDescription>
      </CardContainer>
    </>
  );
};

export default Card;
