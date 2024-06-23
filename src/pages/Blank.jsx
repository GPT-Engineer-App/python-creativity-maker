import { Box, Text, VStack, Heading, Flex, Spacer } from "@chakra-ui/react";
import AboutMe from "./AboutMe.jsx";

const Blank = () => {
  return (
    <Box p={4}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl">Welcome to My Portfolio</Heading>
        <AboutMe />
      </VStack>
    </Box>
  );
};

export default Blank;