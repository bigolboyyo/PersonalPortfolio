import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import GithubLink from "./GithubLink";
import gsap from "gsap";

function MainCard({ details }) {
  const [showDetails, setShowDetails] = useState(false);
  const contentRef = useRef(null);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        maxHeight: showDetails ? contentRef.current.scrollHeight : 0,
        duration: 0.7,
        ease: "Power3.easeInOut",
      });
    }
  }, [showDetails]);

  return (
    <Card
      sx={{
        maxWidth: 1000,
        marginBottom: "2rem",
        width: "40vmax",
        padding: 0,
        paddingBottom: "0.5rem",
        backgroundColor: "transparent",
        backdropFilter: "blur(7px) contrast(0.6)",
      }}
    >
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          image={details.displayImg}
          alt="Voxion project image"
        />
        <CardContent>
          <Typography
            sx={{
              color: "white",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "clamp(32px, 3rem, 64px)",
              padding: "1rem",
            }}
            variant="h5"
            component="div"
          >
            {details.title}
          </Typography>
          <CardContent
            ref={contentRef}
            sx={{
              maxHeight: showDetails ? contentRef.current.scrollHeight : 0,
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            {showDetails && (
              <>
                <Divider variant="middle" sx={{ backgroundColor: "white" }} />
                <Typography
                  sx={{
                    color: "white",
                    justifyContent: "center",
                    padding: "1rem",
                    textAlign: "center",
                    fontSize: "clamp(14px, 1.5rem, 48px)",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  {details.description}
                </Typography>
                <Divider variant="middle" sx={{ backgroundColor: "white" }} />
                <GithubLink
                  name={`${details.title}-repo-link`}
                  href={details.repo}
                />
                <Divider
                  // variant="middle"
                  sx={{
                    backgroundColor: "white",
                    width: "33.3%",
                    margin: "0 auto",
                  }}
                />
                <Typography
                  sx={{
                    color: "white",
                    justifyContent: "center",
                    padding: "1rem",
                    textAlign: "center",
                    fontSize: "clamp(8px, 0.8rem, 20px)",
                  }}
                >
                  {details.status}
                </Typography>
              </>
            )}
          </CardContent>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MainCard;
