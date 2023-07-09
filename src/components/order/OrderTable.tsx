import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppSelector } from "store/store";
import { outhAxios } from "config";
import { OrderedProduct } from "type";
import type { FC } from "react";
import { Stack } from "@mui/system";
import Moment from "react-moment";
import useTokenRequst from "feature/useTokenRequst";
const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-button: 50px;
`;
const ImageShowCase = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin: 5px;
`;

const OrderTable: FC = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const [orders, setOrders] = useState<OrderedProduct[]>();
  const api = useTokenRequst();

  useEffect(() => {
    try {
      const fetchOrders = async () => {
        const res = await api.get("cart/" + currentUser?._id);
        setOrders(res.data);
      };
      fetchOrders();
      console.log(orders);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Stack alignItems="center" minWidth="320px" marginBottom="50px">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, maxWidth: 700 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Shoes</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Size</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders?.map((item) => (
                <TableRow key={item._id}>
                  <ImageShowCase src={item.productImg} />
                  <TableCell align="left">{item.productName}</TableCell>
                  <TableCell align="left">{item.productSize}</TableCell>
                  <TableCell align="left">{item.productPrice}</TableCell>
                  <TableCell align="left">
                    <Moment format="YYYY/MM/DD">
                      {item.createdAt.toString()}
                    </Moment>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Container>
  );
};

export default OrderTable;
