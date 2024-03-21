import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const img =
    "https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png";
  const CheckoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:7000/api/v1/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:7000/api/v1/checkout", {
      amount,
    });
   

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Abhishek Lodha",
      description: "Test Transaction",
      image:
        "https://github.com/Abhisheklodha01/personal-portfolio/blob/master/src/assets/HeroImage.jpg?raw=true",
      order_id: order.id,
      callback_url: "http://localhost:7000/api/v1/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };

    const razor = new window.Razorpay(options);
       razor.open()
  };

  return (
    <Box>
      <Stack
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={["column", "row"]}
      >
        <Card amount={5000} img={img} CheckoutHandler={CheckoutHandler} />
        <Card
          amount={3000}
          img={
            "http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
          }
          CheckoutHandler={CheckoutHandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
