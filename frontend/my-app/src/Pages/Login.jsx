import { Box, Heading, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add signup logic here
  };

  return (
    <Box p={4} maxW="400px" mx="auto">
      <Heading as="h2" mb={6} textAlign="center">
        Sign Up
      </Heading>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          mb={4}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          mb={4}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          mb={4}
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <Button colorScheme="blue" size="lg" width="full" mb={4} type="submit">
          Sign Up
        </Button>
      </form>
    </Box>
  );
}

export default SignupPage;
