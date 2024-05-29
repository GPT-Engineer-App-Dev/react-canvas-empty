import { Container, VStack, Box, Flex, Spacer, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center" justify="space-between">
        <Heading size="md">My Canvas</Heading>
        <Button as={Link} to="/" variant="ghost" colorScheme="whiteAlpha">
          Home
        </Button>
      </Flex>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="90vh">
        <VStack spacing={4}>
          <Heading fontSize="4xl">Your Blank Canvas</Heading>
          <Heading fontSize="2xl">Chat with the agent to start making edits.</Heading>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;