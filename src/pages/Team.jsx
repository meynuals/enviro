import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Stack,
  Avatar,
  Chip,
} from "@mui/material";

const teamMembers = [
  {
    name: "Nicole Andrea Marasigan",
    role: "Founder",
    img: "n1.png",
    color: "#0EA5E9",
  },
  {
    name: "Grette Manbiotan",
    role: "TikTok Manager",
    img: "n3.JPG",
    color: "#06B6D4",
  },
  {
    name: "Meynard Roi Manuel",
    role: "Web Developer",
    img: "ss.jpg",
    color: "#0EA5E9",
  },
  {
    name: "Daniel Mendez",
    role: "Video Editor",
    img: "n4.jpg",
    color: "#06B6D4",
  },
  {
    name: "Precious Miñonza",
    role: "Creatives Editor",
    img: "n5.jpg",
    color: "#0EA5E9",
  },
];

export default function Team() {
  return (
    <Box
      sx={{
        bgcolor: "#0A0E27",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 25% 35%, rgba(14, 165, 233, 0.18) 0%, transparent 50%), radial-gradient(circle at 75% 65%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)",
          animation: "pulse 12s ease-in-out infinite",
          "@keyframes pulse": {
            "0%, 100%": { opacity: 0.4 },
            "50%": { opacity: 0.8 },
          },
        }}
      />

      {/* EPIC Hero */}
      <Box
        sx={{
          position: "relative",
          background:
            "linear-gradient(135deg, rgba(14, 165, 233, 0.95) 0%, rgba(6, 182, 212, 0.9) 50%, rgba(2, 132, 199, 0.95) 100%)",
          py: { xs: 15, md: 25 },
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 30l30-30v60L30 30z" fill="rgba(255,255,255,0.05)" fill-rule="evenodd"/%3E%3C/svg%3E")',
            opacity: 0.3,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box sx={{ textAlign: "center", color: "white" }}>
            <Typography
              variant="overline"
              sx={{
                fontSize: "1.5rem",
                fontWeight: 800,
                letterSpacing: "0.3em",
                display: "block",
                mb: 3,
                textShadow: "0 0 20px rgba(255,255,255,0.5)",
              }}
            >
              OUR TEAM
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3.5rem", md: "7rem" },
                fontWeight: 900,
                textShadow: "0 0 50px rgba(255,255,255,0.8)",
                mb: 4,
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              WARRIORS FOR
              <br />
              CLEAN AIR
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.3rem", md: "2rem" },
                fontWeight: 600,
                maxWidth: "900px",
                mx: "auto",
                opacity: 0.95,
                lineHeight: 1.6,
                textShadow: "0 0 15px rgba(255,255,255,0.3)",
              }}
            >
              A dedicated team passionate about a future of clean air
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Leadership Team */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: 12 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "3rem", md: "5rem" },
              fontWeight: 900,
              color: "#fff",
              textShadow: "0 0 40px rgba(14, 165, 233, 0.7)",
              mb: 2,
              letterSpacing: "-0.02em",
            }}
          >
            MEET THE TEAM
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#BAE6FD",
              fontWeight: 600,
            }}
          >
            Driven by passion, united by purpose
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 15, justifyContent: "center" }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={index < 2 ? 6 : 4} key={index}>
              <Card
                sx={{
                  background: `linear-gradient(135deg, ${member.color}20 0%, ${member.color}10 100%)`,
                  backdropFilter: "blur(30px)",
                  border: `3px solid ${member.color}50`,
                  borderRadius: "24px",
                  overflow: "hidden",
                  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  boxShadow: `0 10px 50px ${member.color}30`,
                  "&:hover": {
                    transform: "translateY(-20px) scale(1.03)",
                    border: `3px solid ${member.color}`,
                    boxShadow: `0 30px 80px ${member.color}70`,
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Avatar
                    src={member.img ? `/images/${member.img}` : undefined}
                    sx={{
                      width: 120,
                      height: 120,
                      bgcolor: member.color,
                      fontSize: "3rem",
                      border: "4px solid rgba(255, 255, 255, 0.2)",
                      boxShadow: `0 10px 40px ${member.color}80`,
                      mx: "auto",
                      mb: 3,
                    }}
                  >
                    {!member.img && member.name.charAt(0)}
                  </Avatar>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "#fff",
                      mb: 1,
                      textShadow: "0 0 20px rgba(255,255,255,0.3)",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Chip
                    label={member.role}
                    sx={{
                      bgcolor: `${member.color}40`,
                      color: "#E0F2FE",
                      fontWeight: 700,
                      fontSize: "1rem",
                      px: 2,
                      py: 2.5,
                      height: "auto",
                      border: `2px solid ${member.color}60`,
                      boxShadow: `0 5px 20px ${member.color}40`,
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Open Positions Teaser */}
        <Paper
          sx={{
            background:
              "linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)",
            backdropFilter: "blur(30px)",
            border: "3px solid rgba(14, 165, 233, 0.4)",
            borderRadius: "24px",
            p: { xs: 4, md: 6 },
            textAlign: "center",
            mb: 10,
            boxShadow: "0 25px 80px rgba(14, 165, 233, 0.4)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 900,
              color: "#fff",
              textShadow: "0 0 30px rgba(255, 255, 255, 0.6)",
              mb: 3,
            }}
          >
            JOIN OUR MISSION
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#E0F2FE",
              mb: 4,
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            We're always looking for passionate individuals who want to make a
            difference in the fight against air pollution.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mb: 4 }}
          >
            <Chip
              label="15+ Open Positions"
              sx={{
                bgcolor: "rgba(14, 165, 233, 0.3)",
                color: "#E0F2FE",
                fontSize: "1.1rem",
                fontWeight: 700,
                px: 3,
                py: 3,
                height: "auto",
                border: "2px solid rgba(14, 165, 233, 0.5)",
              }}
            />
            <Chip
              label="Remote OK"
              sx={{
                bgcolor: "rgba(6, 182, 212, 0.3)",
                color: "#E0F2FE",
                fontSize: "1.1rem",
                fontWeight: 700,
                px: 3,
                py: 3,
                height: "auto",
                border: "2px solid rgba(6, 182, 212, 0.5)",
              }}
            />
            <Chip
              label="Global Teams"
              sx={{
                bgcolor: "rgba(14, 165, 233, 0.3)",
                color: "#E0F2FE",
                fontSize: "1.1rem",
                fontWeight: 700,
                px: 3,
                py: 3,
                height: "auto",
                border: "2px solid rgba(14, 165, 233, 0.5)",
              }}
            />
          </Stack>
          <Button
            variant="contained"
            size="large"
            href="mailto:careers@airvocate.example"
            sx={{
              fontSize: "1.4rem",
              fontWeight: 800,
              px: 8,
              py: 2.5,
              borderRadius: "16px",
              background: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)",
              boxShadow: "0 15px 50px rgba(14, 165, 233, 0.6)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              "&:hover": {
                transform: "scale(1.08) translateY(-3px)",
                boxShadow: "0 20px 70px rgba(14, 165, 233, 0.8)",
              },
            }}
          >
            Apply Now
          </Button>
        </Paper>

        {/* Epic CTA */}
        <Paper
          sx={{
            position: "relative",
            background:
              "linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(14, 165, 233, 0.2) 100%)",
            backdropFilter: "blur(30px)",
            border: "3px solid rgba(6, 182, 212, 0.5)",
            borderRadius: "24px",
            p: { xs: 6, md: 10 },
            textAlign: "center",
            overflow: "hidden",
            boxShadow: "0 30px 120px rgba(6, 182, 212, 0.5)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.1)"/%3E%3C/svg%3E")',
              animation: "move 20s linear infinite",
            },
            "@keyframes move": {
              "0%": { backgroundPosition: "0 0" },
              "100%": { backgroundPosition: "50px 50px" },
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "3rem", md: "6rem" },
              fontWeight: 900,
              color: "#fff",
              textShadow: "0 0 50px rgba(255, 255, 255, 0.7)",
              mb: 4,
              letterSpacing: "-0.03em",
              position: "relative",
              zIndex: 1,
            }}
          >
            BREATHE CHANGE.
            <br />
            BE THE CHANGE.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", md: "1.6rem" },
              color: "#E0F2FE",
              mb: 6,
              maxWidth: "900px",
              mx: "auto",
              lineHeight: 1.7,
              position: "relative",
              zIndex: 1,
            }}
          >
            Together, we can create a world where every breath is clean, every
            community is healthy, and every voice matters in the fight for our
            planet's future.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
