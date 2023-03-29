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
import { responseHandler } from "../Exports/responseHandler";
import Notifications from "./Notifications";
import Loading from "./Loading";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(1000);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [responseMsg, setResponseMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const contactRef = useRef(null);
  const talkRef = useRef(null);
  const inputRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email || !message) {
      setResponseMsg("All fields required to submit.");
      setSeverity("warning");
      setOpen(true);
      return;
    }
    setIsLoading(true);
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const data = await response.json();

    responseHandler(response, setSeverity, setResponseMsg, data);

    setIsLoading(false);

    setOpen(true);
    setName("");
    setEmail("");
    setMessage("");
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
            sx={{ color: "white" }}
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
            sx={{ color: "white" }}
          />
        </FormControl>

        <FormControl sx={{ width: "90%", mb: 2 }}>
          <TextareaAutosize
            ref={inputRef}
            id="message"
            value={message}
            onChange={handleTextareaChange}
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

        {isLoading ? (
          <Loading loading={isLoading} />
        ) : (
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
        )}

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
      <Notifications
        open={open}
        setOpen={setOpen}
        severity={severity}
        responseMsg={responseMsg}
      />
    </>
  );
}
