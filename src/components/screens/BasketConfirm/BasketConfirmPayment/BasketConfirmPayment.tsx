import { Container, Stack } from "@mui/material";
import { useTypedSelector } from "@store/index";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PaymentForm from "./PaymentForm";

const BasketConfirmPayment = () => {
  return (
    <Container>
      <PaymentForm />
    </Container>
  );
};

export default BasketConfirmPayment;
