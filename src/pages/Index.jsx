import { Box, Flex, Text, VStack, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaHome, FaChartLine, FaUserFriends, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      h="100%"
      w="60px"
      bg={useColorModeValue("gray.100", "gray.900")}
      boxShadow="md"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={4}
    >
      <IconButton aria-label="Home" icon={<FaHome />} size="lg" mb={4} />
      <IconButton aria-label="Analytics" icon={<FaChartLine />} size="lg" mb={4} />
      <IconButton aria-label="Users" icon={<FaUserFriends />} size="lg" mb={4} />
      <IconButton aria-label="Settings" icon={<FaCog />} size="lg" />
    </Box>
  );
};

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as="header"
      pos="fixed"
      top="0"
      left="60px"
      right="0"
      h="60px"
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="md"
      alignItems="center"
      justifyContent="space-between"
      p={4}
    >
      <Text fontSize="xl" fontWeight="bold">
        SMM Panel
      </Text>
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

const MainContent = () => {
  return (
    <Box
      as="main"
      ml="60px"
      mt="60px"
      p={4}
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="calc(100vh - 60px)"
    >
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the SMM Panel</Text>
        <Text>Use the sidebar to navigate through different sections.</Text>
      </VStack>
    </Box>
  );
};

const Index = () => {
  return (
    <Box>
      <Sidebar />
      <Header />
      <MainContent />
    </Box>
  );
};

export default Index;