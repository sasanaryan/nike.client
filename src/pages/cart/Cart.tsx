import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Collapse, List, Typography } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import { useAppSelector } from "store/store";
import { mobile, tablet } from "theme";
import Navbar from "components/navbar";
import Footer from "components/footer/Footer";
import Button from "components/button";
import CartItem from "components/cartItem";
import useStatus from "feature/useStatus";
import useTokenRequst from "feature/useTokenRequst";

const Container = styled.div`
  width: 100wv;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  vertical-align: top;
  margin: 0px auto 40px;
  max-width: 1100px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
  ${tablet({ padding: "15px", flexDirection: "column" })}
`;

const Info = styled.div`
  flex-basis: 66.6667%;
  max-width: 66.6667%;
  ${tablet({ flexBasis: "100%", maxWidth: "100%" })}
  ${mobile({ flexBasis: "100%", maxWidth: "100%" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  margin: 20px 0 20px 0;
  border: none;
  height: 1px;
`;
const HrSummary = styled.hr`
  background-color: #eee;
  margin: 20px 0 20px 0;
  border: none;
  height: 1px;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;

const Summary = styled.div`
  vertical-align: top;
  margin-bottom: 16px;
  padding-left: 10px;
  padding-right: 8px;
  -webkit-box-flex: 1;
  flex-grow: 1;

  ${tablet({
    marginTop: "10px",
    padding: "8px",
    flex: "1",
    flexBasis: "100%",
    maxWidth: "100%",
  })}
  ${mobile({
    marginTop: "10px",
    padding: "0",
    flex: "1",
    flexBasis: "100%",
    maxWidth: "100%",
  })}
`;

type product = {
  _id: string;
  title: string;
  desc: string;
  img: string[];
  categories: string;
  gender: string;
  price: number;
  size: number;
  quality: string;
  existedSize: number[];
  selectedSize: string;
  orderedProductId: string;
};

const Cart: FC = () => {
  const cart = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.user);
  const currentUser = user.currentUser;
  const { purchasedStatus } = useStatus();
  const navigate = useNavigate();
  const api = useTokenRequst();
  const makeOrder = (product: product, currentUserId?: string) => {
    return {
      userId: currentUserId,
      productId: product._id,
      productImg: product.img[0],
      productName: product.title,
      productSize: product.selectedSize,
      productPrice: product.price,
    };
  };
  const orders = cart.products.map((p) => makeOrder(p, currentUser?._id));

  const checkout = async () => {
    if (currentUser) {
      try {
        const res = await api.post(`cart`, orders);
        setTimeout(() => navigate("/profile/order"), 2000);
        purchasedStatus();
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Info>
            <List>
              <TransitionGroup>
                {cart.products &&
                  cart.products.map((product: product) => (
                    <Collapse key={product.orderedProductId}>
                      <CartItem product={product} />
                    </Collapse>
                  ))}
              </TransitionGroup>
            </List>
            <Hr />
          </Info>
          <Summary>
            <Typography fontSize="25px" margin="20px 0 20px 0">
              Summary
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Typography>Do you have a Promo Code?</Typography>
              <Typography>
                <ArrowForwardIosIcon />
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Typography>Subtotal</Typography>
              <Typography>${cart.total}</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Typography>Estimated Delivery & Handling</Typography>
              <Typography>Free</Typography>
            </Stack>
            <HrSummary />
            <Stack
              direction="row"
              justifyContent="space-between"
              marginBottom="10px"
            >
              <Typography>Total</Typography>
              <Typography>$ {cart.total}</Typography>
            </Stack>
            <HrSummary />
            <Button onClick={checkout}>
              <Typography>Go to Checkout</Typography>
            </Button>
          </Summary>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
