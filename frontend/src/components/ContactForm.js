import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // send form data to server
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "600px",
        margin: "1rem auto",
        backgroundColor: "#F5FEFD",
        padding: "1rem",
        outline: "#40aafe solid 8px",
        width: "90vw",

        // es-lint-disable-next-line
      }}
    >
      <FormControl sx={{ width: "100%", mb: 2 }}>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </FormControl>

      <FormControl sx={{ width: "100%", mb: 2 }}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FormControl>

      <FormControl sx={{ width: "100%", mb: 2 }}>
        <TextareaAutosize
          id="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          minRows={5}
          maxRows={10}
          cols={50}
          maxLength={1000}
          sx={{
            width: "100%",
            padding: "0.35rem",
            boxSizing: "border-box",
          }}
        />
      </FormControl>

      <Button
        variant="contained"
        type="submit"
        onClick={handleSubmit}
        sx={{ width: "100%", mb: 2 }}
      >
        Send
      </Button>

      <FormHelperText>
        We'll never share your email with anyone else.
      </FormHelperText>
    </Box>
  );
}
