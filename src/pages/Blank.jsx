import { Box, Text, VStack, Heading, Flex, Spacer, Button, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import AboutMe from "./AboutMe.jsx";

const Blank = () => {
  return (
    <Box p={4}>
      <Box p={4} bg="gray.100" borderRadius="md" boxShadow="md">
        <VStack spacing={8} align="center">
          <Image src="/images/hero-image.jpg" alt="Hero Image" borderRadius="full" boxSize="150px" />
          <Heading as="h1" size="2xl">Welcome to My Portfolio</Heading>
          <Text fontSize="lg" textAlign="center">I am a passionate developer with expertise in modern web technologies. Check out my work and connect with me on social media!</Text>
          <Flex justify="center" spacing={4}>
            <Button as="a" href="https://github.com" target="_blank" leftIcon={<FaGithub />} colorScheme="teal" variant="outline">GitHub</Button>
            <Button as="a" href="https://linkedin.com" target="_blank" leftIcon={<FaLinkedin />} colorScheme="teal" variant="outline">LinkedIn</Button>
            <Button as="a" href="https://twitter.com" target="_blank" leftIcon={<FaTwitter />} colorScheme="teal" variant="outline">Twitter</Button>
          </Flex>
        </VStack>
      </Box>
      <Box p={4} mt={8}>
        <VStack spacing={8} align="start" animation="fadeIn 2s">
          <Heading as="h2" size="xl">About Me</Heading>
          <AboutMe />
        </VStack>
      </Box>
    </Box>
  );
};

export default Blank;