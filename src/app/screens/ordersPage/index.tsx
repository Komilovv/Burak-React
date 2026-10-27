import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/order.css";

export default function OrdersPage() {
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"order-page"}>
      <Container className="order-container">
        {/* ============ LEFT: tabs + orders ============== */}
        <Stack className={"order-left"}>
          <TabContext value={value}>
            <Box className={"order-nav-frame"}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="order tabs"
                className={"table_list"}
              >
                <Tab label="Paused Order" value={"1"} />
                <Tab label="Process Order" value={"2"} />
                <Tab label="Finished Orders" value={"3"} />
              </Tabs>
            </Box>
            <Stack className={"order-main-content"}>
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        {/* ============ RIGHT: user + payment ============== */}
        <Stack className={"order-right"}>
          {/* user card */}
          <Box className={"order-info-box"}>
            <Box className={"member-box"}>
              <div className={"order-user-img"}>
                <img
                  src={"/icons/default-user.svg"}
                  className={"order-user-avatar"}
                  alt="user avatar"
                />
                <div className={"order-user-icon-box"}>
                  <img
                    src={"/icons/user-badge.svg"}
                    className={"order-user-prof-img"}
                    alt="user badge"
                  />
                </div>
              </div>
              <span className={"order-user-name"}>Oscar</span>
              <span className={"order-user-prof"}>User</span>
            </Box>
            <div className={"liner"}></div>
            <Box className={"order-user-address"}>
              <LocationOnIcon />
              <div className={"spec-address-txt"}>South Korea, Busan</div>
            </Box>
          </Box>

          {/* payment card */}
          <Box className={"order-info-box payment-box"}>
            <input
              type="text"
              className={"card-input"}
              placeholder="Card number : 5243 4090 2002 7495"
            />
            <div className={"card-half"}>
              <input
                type="text"
                className={"card-input"}
                placeholder="07 / 24"
              />
              <input
                type="text"
                className={"card-input"}
                placeholder="CVV : 010"
              />
            </div>
            <input
              type="text"
              className={"card-input"}
              placeholder="Justin Robertson"
            />
            <div className={"cards-box"}>
              <img src={"/icons/western-card.svg"} alt="Western Union" />
              <img src={"/icons/master-card.svg"} alt="Mastercard" />
              <img src={"/icons/paypal-card.svg"} alt="PayPal" />
              <img src={"/icons/visa-card.svg"} alt="Visa" />
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
