import { useState } from "react";
import type { FC } from "react";
import { useLocation } from "react-router-dom";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import Navbar from "components/navbar";
import Footer from "components/footer";
import OrderTable from "components/order";
import Favourites from "components/favorit";

const Profile: FC = () => {
  const location = useLocation();
  const sectionParam = location.pathname.split("/")[2];
  const [section, setSection] = useState(
    sectionParam ? sectionParam : "favourites"
  );

  return (
    <Stack direction="column">
      <Navbar />
      <Stack direction="column">
        <Stack direction="row" justifyContent="center" gap={3} margin="15px">
          <Button
            variant="text"
            color={section === "order" ? "info" : "inherit"}
            onClick={() => setSection("order")}
          >
            Order
          </Button>
          <Button
            variant="text"
            color={section === "favourites" ? "info" : "inherit"}
            onClick={() => setSection("favourites")}
          >
            Favourites
          </Button>
        </Stack>
        {section === "order" && <OrderTable />}
        {section === "favourites" && <Favourites />}
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Profile;
