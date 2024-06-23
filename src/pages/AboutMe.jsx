import { Box, Text, Switch, VStack, Heading, Flex, Spacer } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const AboutMe = () => {
  const [netWorth, setNetWorth] = useState(0);
  const [isEarning, setIsEarning] = useState(false);
  const [walletBalance, setWalletBalance] = useState(0);

  useEffect(() => {
    // Fetch user data from an API or other source
    // For now, we'll use hardcoded values
    setNetWorth(1000000);
    setIsEarning(true);
    setWalletBalance(5000);
  }, []);

  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl">About Me</Heading>
        <Text fontSize="lg">Net Worth: ${netWorth.toLocaleString()}</Text>
        <Text fontSize="lg">Earning Status: {isEarning ? "On" : "Off"}</Text>
        <Text fontSize="lg">Wallet Balance: ${walletBalance.toLocaleString()}</Text>
        <Box>
          <Text fontSize="lg" display="inline">Toggle Earning Status: </Text>
          <Switch isChecked={isEarning} onChange={() => setIsEarning(!isEarning)} />
        </Box>
      </VStack>
    </Box>
  );
};

export default AboutMe;