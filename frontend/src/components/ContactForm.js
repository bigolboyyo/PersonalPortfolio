import { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { animateBubbles } from "../animations/animateBubbles";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(1000);

  const contactRef = useRef(null);
  const talkRef = useRef(null);
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // send form data to server
  };

  const handleTextareaChange = (e) => {
    const input = e.target.value;
    setCharCount(1000 - input.length);
    setMessage(input);
  };

  useEffect(() => {
    talkRef.current.style.opacity = 0;
    animateBubbles(contactRef.current);
    setTimeout(() => {
      talkRef.current.style.opacity = 1;
      animateBubbles(talkRef.current);
    }, 250);
  }, []);

  return (
    <>
      <Typography
        ref={talkRef}
        variant="h1"
        sx={{
          margin: "0 auto",
          fontSize: "clamp(1.5rem, 4rem, 25vw)",
          background: "transparent",
          backdropFilter: "blur(7px) contrast(0.6)",
          padding: "0.35rem",
          outline: "solid transparent",
          borderRadius: "20px",
          textShadow: "2px 4px black",
        }}
      >
        Let's Talk!
      </Typography>
      <Box
        ref={contactRef}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "600px",
          maxHeight: "calc(100vh - 64px)",
          margin: "1rem auto",
          backgroundColor: "transparent",
          padding: "1rem",
          width: "90vw",
          borderRadius: "20px",
          backdropFilter: "blur(7px) contrast(0.6)",
          overflowY: "auto",

          // es-lint-disable-next-line
        }}
      >
        <FormControl sx={{ width: "90%", mb: 2 }}>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>

        <FormControl sx={{ width: "90%", mb: 2 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>

        <FormControl sx={{ width: "90%", mb: 2 }}>
          <TextareaAutosize
            ref={inputRef}
            id="message"
            // placeholder="Message"
            value={message}
            // onChange={(e) => setMessage(e.target.value)}
            onChange={handleTextareaChange}
            required
            minRows={8}
            maxRows={10}
            cols={50}
            maxLength={1000}
            style={{
              width: "100%",
              padding: "0.35rem",
              boxSizing: "border-box",
              fontFamily: "Freckle Face",
              fontSize: "1rem",
              letterSpacing: "0.15rem",
              textAlign: "center",
              caretColor: "#40AAFE",
            }}
          />
          <Typography
            sx={{
              fontSize: "0.8rem",
              textAlign: "right",
              color: "white",
              padding: "0.35rem",
              letterSpacing: "0.15rem",
              textShadow: "2px 4px black",
            }}
          >
            {charCount} characters left
          </Typography>
        </FormControl>

        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          sx={{
            width: "25%",
            mb: 2,
            fontFamily: "Freckle Face",
            letterSpacing: "0.15rem",
          }}
        >
          Send
        </Button>

        <FormHelperText
          sx={{
            color: "white",
            fontFamily: "Freckle Face",
            letterSpacing: "0.15rem",
            textAlign: "center",
            textShadow: "2px 4px black",
          }}
        >
          I'll never share your email with anyone else.
        </FormHelperText>
      </Box>
    </>
  );
}
