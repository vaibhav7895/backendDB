import { Box, Heading, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      confirmPassword,
    }
    axios.post("localhost:8080/user/register", data,{
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>{
        console.log(res)
    })
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          mb={4}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          mb={4}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button colorScheme="blue" size="lg" width="full" mb={4} type="submit">
          Sign Up
        </Button>
      </form>
    </Box>
  );
}

export default SignupPage;
