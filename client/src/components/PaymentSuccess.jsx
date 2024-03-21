import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];

  const referenceNum = searchQuery.get("reference");

  return (
    <Box>
      <VStack h={"100vh"} justifyContent={"center"}>
        <Heading textTransform={"uppercase"}>
          <span style={{ color: "green" }}>Order SuccessFull</span>
        </Heading>
        <Text>
          <span style={{ color: "orange" }}>Reference No:</span> {referenceNum}
        </Text>
        <Link to={'/'}>Go to Home</Link>
      </VStack>

    </Box>
  );
};

export default PaymentSuccess;
