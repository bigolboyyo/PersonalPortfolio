import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { gsap } from "gsap";
import GithubLink from "./ProjectLink";

function SmallCard({ details }) {
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
        width: "30vmax",
        maxWidth: 300,
        marginBottom: "2rem",
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
          alt="Small project image"
          sx={{
            objectFit: "cover",
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
        <CardContent>
          <Typography
            sx={{
              color: "white",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "clamp(16px, 1.75rem, 48px)",
              padding: "0.5rem",
              paddingBottom: 0,
            }}
            gutterBottom
            variant="h6"
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
                    padding: "0.5rem",
                    textAlign: "center",
                    fontSize: "clamp(16px, 1.5rem, 36px)",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  {details.description}
                </Typography>
                <Divider variant="middle" sx={{ backgroundColor: "white" }} />
                <GithubLink name={details.title} href={details.repo} />
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

export default SmallCard;
