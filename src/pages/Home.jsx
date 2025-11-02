import React, { useState } from "react";
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AirIcon from "@mui/icons-material/Air";
import CloudIcon from "@mui/icons-material/Cloud";
import TsunamiIcon from "@mui/icons-material/Tsunami";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FactoryIcon from "@mui/icons-material/Factory";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ForestIcon from "@mui/icons-material/Forest";
import VolcanoIcon from "@mui/icons-material/Volcano";
import SpaIcon from "@mui/icons-material/Spa";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import PeopleIcon from "@mui/icons-material/People";

export default function Home() {
  const theme = useTheme();

  const humanCauses = [
    {
      title: "Burning of Fossil Fuels",
      desc: "This includes gasoline in vehicles, natural gas for electricity, and coal in power plants.",
      icon: LocalFireDepartmentIcon,
      color: "#0EA5E9",
    },
    {
      title: "Industrial Operations",
      desc: "Occurs when factories release harmful gases and particulates into the air.",
      icon: FactoryIcon,
      color: "#06B6D4",
    },
    {
      title: "Traffic Congestion",
      desc: "Heavy vehicle emissions contribute to smog and poor air quality.",
      icon: DirectionsCarIcon,
      color: "#0EA5E9",
    },
    {
      title: "Urbanization",
      desc: "Construction, energy use, and increased waste generation add pollutants to the atmosphere.",
      icon: LocationCityIcon,
      color: "#06B6D4",
    },
    {
      title: "Deforestation",
      desc: "This reduces natural air filters and increases airborne dust and particulates.",
      icon: ForestIcon,
      color: "#0EA5E9",
    },
  ];

  const naturalCauses = [
    {
      title: "Volcanic Eruptions",
      desc: "It releases ash and sulfur dioxide into the atmosphere.",
      icon: VolcanoIcon,
      color: "#06B6D4",
    },
    {
      title: "Wildfires",
      desc: "Emit large amounts of smoke, carbon monoxide, and carbon dioxide.",
      icon: LocalFireDepartmentIcon,
      color: "#0EA5E9",
    },
    {
      title: "Dust Storms",
      desc: "Carry fine particles that contribute to air pollution.",
      icon: CloudIcon,
      color: "#06B6D4",
    },
  ];

  const environmentalEffects = [
    "Atmospheric alteration – contamination by chemical, physical, or biological agents changes the air's natural balance.",
    'Ozone layer depletion – gases like carbon monoxide and nitrogen oxides can damage the ozone layer, creating "ozone holes."',
    "Global warming – greenhouse gases trap heat, increasing the Earth's temperature.",
    "Damage to plants and ecosystems – polluted air disrupts photosynthesis, harms vegetation, and affects biodiversity.",
    "Soil and water pollution – airborne pollutants settle on land and water, leading to acidification and contamination.",
  ];

  const healthEffects = [
    "Respiratory problems – exposure to pollutants leads to asthma, bronchitis, and other lung diseases.",
    "Cardiovascular diseases – prolonged exposure can cause heart problems.",
    "Increased mortality risk – air pollution heightens risks of disease and premature death.",
    "Overall decline in public health – worsened air quality doubles the rate of respiratory illnesses in urban areas.",
  ];

  const economicEffects = [
    "Reduced productivity – health issues affect workforce performance.",
    "Increased healthcare costs – treatment of pollution-related diseases strains public health systems.",
    "Decreased quality of life – polluted air contributes to discomfort, stress, and lower well-being in urban areas.",
  ];

  const individualActions = [
    "Reduce vehicle use – walk, bike, carpool, or use public transportation instead of driving alone.",
    "Conserve energy – turn off lights and unplug devices when not in use; choose energy-efficient appliances.",
    "Avoid burning waste – properly dispose of garbage and avoid open burning that releases harmful smoke.",
    "Support clean energy – use renewable sources like solar panels if possible or support companies that do.",
    "Plant trees and greenery – trees absorb carbon dioxide and release oxygen, improving air quality.",
    "Use eco-friendly products – choose biodegradable, non-toxic, and sustainable household items.",
    "Reduce consumption and waste – practice the 3Rs: Reduce, Reuse, Recycle.",
    "Advocate online – share awareness content on platforms like TikTok to inspire others to act responsibly.",
  ];

  const communityActions = [
    "Promote public awareness – organize seminars, campaigns, and social media drives about the causes and dangers of air pollution.",
    "Implement clean-up drives and tree-planting projects – strengthen community involvement in environmental restoration.",
    "Encourage sustainable transportation – promote bike lanes, electric vehicles, and improved public transit.",
    "Collaborate with local governments and organizations – push for stricter air quality regulations and sustainable policies.",
    "Support renewable energy projects – advocate for community-level initiatives like solar-powered facilities or clean energy partnerships.",
    "Practice collective stewardship – build community habits that prioritize sustainability and shared responsibility for the environment.",
  ];

  return (
    <Box
      sx={{
        bgcolor: "#0A0E27",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Particles */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(2, 132, 199, 0.08) 0%, transparent 50%)",
          animation: "pulse 8s ease-in-out infinite",
          "@keyframes pulse": {
            "0%, 100%": { opacity: 0.6 },
            "50%": { opacity: 1 },
          },
        }}
      />

      {/* MEGA Hero Section */}
      <Box
        sx={{
          position: "relative",
          background:
            "linear-gradient(180deg, rgba(14, 165, 233, 0.9) 0%, rgba(6, 182, 212, 0.8) 50%, rgba(2, 132, 199, 0.9) 100%)",
          py: { xs: 12, md: 20 },
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            animation: "drift 30s linear infinite",
          },
          "@keyframes drift": {
            "0%": { transform: "translate(0, 0)" },
            "100%": { transform: "translate(50px, 50px)" },
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box sx={{ textAlign: "center", color: "white" }}>
            {/* Floating Icons */}
            <Box
              sx={{
                mb: 4,
                display: "flex",
                justifyContent: "center",
                gap: 3,
                flexWrap: "wrap",
              }}
            >
              {[CloudIcon, AirIcon, TsunamiIcon, BoltIcon, FilterDramaIcon].map(
                (Icon, i) => (
                  <Avatar
                    key={i}
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(10px)",
                      animation: `float${i} ${3 + i}s ease-in-out infinite`,
                      "@keyframes float0": {
                        "0%, 100%": { transform: "translateY(0px)" },
                        "50%": { transform: "translateY(-20px)" },
                      },
                      "@keyframes float1": {
                        "0%, 100%": { transform: "translateY(0px)" },
                        "50%": { transform: "translateY(-25px)" },
                      },
                      "@keyframes float2": {
                        "0%, 100%": { transform: "translateY(0px)" },
                        "50%": { transform: "translateY(-15px)" },
                      },
                      "@keyframes float3": {
                        "0%, 100%": { transform: "translateY(0px)" },
                        "50%": { transform: "translateY(-30px)" },
                      },
                      "@keyframes float4": {
                        "0%, 100%": { transform: "translateY(0px)" },
                        "50%": { transform: "translateY(-18px)" },
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: 50, color: "#fff" }} />
                  </Avatar>
                )
              )}
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3rem", md: "6rem" },
                fontWeight: 900,
                mb: 3,
                background:
                  "linear-gradient(to right, #ffffff, #E0F2FE, #ffffff)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 3s ease-in-out infinite",
                backgroundSize: "200% auto",
                "@keyframes shimmer": {
                  "0%": { backgroundPosition: "0% center" },
                  "100%": { backgroundPosition: "200% center" },
                },
                textShadow: "0 0 80px rgba(255,255,255,0.5)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              EVERY BREATH
              <br />
              MATTERS
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.3rem", md: "2rem" },
                fontWeight: 600,
                mb: 4,
                opacity: 0.95,
                textShadow: "0 0 20px rgba(255,255,255,0.3)",
              }}
            >
              Join the movement for clean air and a healthier planet
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="#/about"
              sx={{
                fontSize: "1.5rem",
                fontWeight: 800,
                px: 8,
                py: 2.5,
                borderRadius: "50px",
                background: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(10px)",
                border: "3px solid rgba(255,255,255,0.3)",
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255,255,255,0.35)",
                  transform: "scale(1.1) translateY(-5px)",
                  boxShadow: "0 30px 80px rgba(255,255,255,0.4)",
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      <Container
        maxWidth="xl"
        sx={{ position: "relative", zIndex: 1, pt: 10, pb: 0 }}
      >
        {/* CAUSES Section */}
        <Box sx={{ mb: 15, mt: 8 }}>
          {/* Title at the top */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "3rem", md: "5rem" },
              fontWeight: 900,
              color: "#fff",
              textAlign: "center",
              textShadow: "0 0 40px rgba(14, 165, 233, 0.7)",
              mb: 2,
            }}
          >
            CAUSES OF AIR POLLUTION
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              color: "#BAE6FD",
              textAlign: "center",
              mb: 6,
            }}
          >
            Understanding the sources of air pollution
          </Typography>

          {/* Stats and Video Side by Side */}
          <Grid
            container
            spacing={4}
            sx={{ mb: 8, alignItems: "center", justifyContent: "center" }}
          >
            {/* Left Side - Stats Boxes in Triangle Pattern */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  alignItems: "center",
                  maxWidth: "450px",
                  width: "100%",
                }}
              >
                {/* First Row - 2 boxes side by side */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 2.5,
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Paper
                    sx={{
                      background:
                        "linear-gradient(135deg, #0EA5E920 0%, #0EA5E910 100%)",
                      backdropFilter: "blur(20px)",
                      border: "3px solid #0EA5E950",
                      borderRadius: "20px",
                      p: 3,
                      textAlign: "center",
                      boxShadow: "0 15px 50px #0EA5E940",
                      transition: "all 0.4s ease",
                      flex: "0 0 45%",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 20px 60px #0EA5E960",
                      },
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: "2.5rem",
                        fontWeight: 900,
                        color: "#fff",
                        textShadow: "0 0 30px rgba(255,255,255,0.6)",
                        mb: 1,
                      }}
                    >
                      7 Million
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        color: "#BAE6FD",
                        fontWeight: 600,
                      }}
                    >
                      Deaths per year from air pollution
                    </Typography>
                  </Paper>
                  <Paper
                    sx={{
                      background:
                        "linear-gradient(135deg, #06B6D420 0%, #06B6D410 100%)",
                      backdropFilter: "blur(20px)",
                      border: "3px solid #06B6D450",
                      borderRadius: "20px",
                      p: 3,
                      textAlign: "center",
                      boxShadow: "0 15px 50px #06B6D440",
                      transition: "all 0.4s ease",
                      flex: "0 0 45%",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 20px 60px #06B6D460",
                      },
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: "2.5rem",
                        fontWeight: 900,
                        color: "#fff",
                        textShadow: "0 0 30px rgba(255,255,255,0.6)",
                        mb: 1,
                      }}
                    >
                      4.2M
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        color: "#BAE6FD",
                        fontWeight: 600,
                      }}
                    >
                      Outdoor air pollution deaths annually
                    </Typography>
                  </Paper>
                </Box>
                {/* Second Row - 1 box centered below */}
                <Paper
                  sx={{
                    background:
                      "linear-gradient(135deg, #0EA5E920 0%, #0EA5E910 100%)",
                    backdropFilter: "blur(20px)",
                    border: "3px solid #0EA5E950",
                    borderRadius: "20px",
                    p: 3,
                    textAlign: "center",
                    boxShadow: "0 15px 50px #0EA5E940",
                    transition: "all 0.4s ease",
                    width: "45%",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 20px 60px #0EA5E960",
                    },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "2.5rem",
                      fontWeight: 900,
                      color: "#fff",
                      textShadow: "0 0 30px rgba(255,255,255,0.6)",
                      mb: 1,
                    }}
                  >
                    99%
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#BAE6FD",
                      fontWeight: 600,
                    }}
                  >
                    Of world population breathes polluted air
                  </Typography>
                </Paper>
              </Box>
            </Grid>

            {/* Right Side - Watch & Learn Video (MUCH BIGGER!) */}
            <Grid item xs={12} md={8}>
              <Paper
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(14, 165, 233, 0.25) 0%, rgba(6, 182, 212, 0.2) 100%)",
                  backdropFilter: "blur(40px)",
                  border: "4px solid rgba(14, 165, 233, 0.6)",
                  borderRadius: "28px",
                  p: { xs: 3, md: 5 },
                  boxShadow: "0 30px 100px rgba(14, 165, 233, 0.6)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 40px 120px rgba(14, 165, 233, 0.8)",
                    border: "4px solid rgba(14, 165, 233, 0.9)",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2.2rem", md: "3rem" },
                    fontWeight: 900,
                    color: "#fff",
                    textAlign: "center",
                    textShadow: "0 0 40px rgba(255, 255, 255, 0.8)",
                    mb: 4,
                    letterSpacing: "0.05em",
                  }}
                >
                  WATCH & LEARN
                </Typography>
                <Box
                  sx={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                    overflow: "hidden",
                    borderRadius: "20px",
                    border: "3px solid rgba(14, 165, 233, 0.8)",
                    boxShadow:
                      "0 20px 60px rgba(14, 165, 233, 0.7), inset 0 0 30px rgba(14, 165, 233, 0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow:
                        "0 25px 80px rgba(14, 165, 233, 0.9), inset 0 0 40px rgba(14, 165, 233, 0.3)",
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: 0,
                    }}
                    src="https://www.youtube.com/embed/e6rglsLy1Ys"
                    title="Air Pollution Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* Human Activities */}
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontWeight: 800,
              color: "#0EA5E9",
              mb: 4,
              textShadow: "0 0 25px rgba(14, 165, 233, 0.6)",
              textAlign: "left",
              pl: { xs: 0, md: 20 },
            }}
          >
            Human Activities
          </Typography>
          <Grid container spacing={3} sx={{ mb: 8, justifyContent: "center" }}>
            {humanCauses.map((cause, idx) => {
              const Icon = cause.icon;
              return (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Card
                    sx={{
                      background: `linear-gradient(135deg, ${cause.color}20 0%, ${cause.color}10 100%)`,
                      backdropFilter: "blur(20px)",
                      border: `3px solid ${cause.color}50`,
                      borderRadius: "20px",
                      height: "100%",
                      width: "100%",
                      maxWidth: "100%",
                      transition: "all 0.4s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        border: `3px solid ${cause.color}`,
                        boxShadow: `0 20px 60px ${cause.color}60`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          bgcolor: cause.color,
                          mb: 2,
                          boxShadow: `0 10px 30px ${cause.color}60`,
                        }}
                      >
                        <Icon sx={{ fontSize: 35 }} />
                      </Avatar>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: 800,
                          color: "#fff",
                          mb: 1.5,
                          textShadow: "0 0 15px rgba(255,255,255,0.3)",
                        }}
                      >
                        {cause.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          color: "#BAE6FD",
                          lineHeight: 1.5,
                        }}
                      >
                        {cause.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          {/* Natural Causes */}
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontWeight: 800,
              color: "#06B6D4",
              mb: 4,
              textShadow: "0 0 25px rgba(6, 182, 212, 0.6)",
              textAlign: "left",
              pl: { xs: 0, md: 8 },
            }}
          >
            Natural Causes
          </Typography>
          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            {naturalCauses.map((cause, idx) => {
              const Icon = cause.icon;
              return (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Card
                    sx={{
                      background: `linear-gradient(135deg, ${cause.color}20 0%, ${cause.color}10 100%)`,
                      backdropFilter: "blur(20px)",
                      border: `3px solid ${cause.color}50`,
                      borderRadius: "20px",
                      height: "100%",
                      width: "100%",
                      maxWidth: "100%",
                      transition: "all 0.4s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        border: `3px solid ${cause.color}`,
                        boxShadow: `0 20px 60px ${cause.color}60`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          bgcolor: cause.color,
                          mb: 2,
                          boxShadow: `0 10px 30px ${cause.color}60`,
                        }}
                      >
                        <Icon sx={{ fontSize: 35 }} />
                      </Avatar>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: 800,
                          color: "#fff",
                          mb: 1.5,
                          textShadow: "0 0 15px rgba(255,255,255,0.3)",
                        }}
                      >
                        {cause.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          color: "#BAE6FD",
                          lineHeight: 1.5,
                        }}
                      >
                        {cause.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* EFFECTS Section */}
        <Box sx={{ mb: 15 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "3rem", md: "5rem" },
              fontWeight: 900,
              color: "#fff",
              textAlign: "center",
              textShadow: "0 0 40px rgba(14, 165, 233, 0.7)",
              mb: 2,
            }}
          >
            EFFECTS OF AIR POLLUTION
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              color: "#BAE6FD",
              textAlign: "center",
              mb: 8,
            }}
          >
            Impact on environment, health, and society
          </Typography>

          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            {/* Environmental Effects */}
            <Grid item xs={12} sm={12} md={4}>
              <Paper
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)",
                  backdropFilter: "blur(30px)",
                  border: "3px solid rgba(14, 165, 233, 0.4)",
                  borderRadius: "24px",
                  p: 4,
                  height: "100%",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 25px 70px rgba(14, 165, 233, 0.5)",
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 90,
                    height: 90,
                    bgcolor: "#0EA5E9",
                    mb: 3,
                    mx: "auto",
                    boxShadow: "0 15px 40px rgba(14, 165, 233, 0.6)",
                  }}
                >
                  <SpaIcon sx={{ fontSize: 50 }} />
                </Avatar>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "#fff",
                    textAlign: "center",
                    mb: 3,
                    textShadow: "0 0 20px rgba(255,255,255,0.4)",
                  }}
                >
                  Environmental Effects
                </Typography>
                <List>
                  {environmentalEffects.map((effect, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 35 }}>
                        <CheckCircleIcon
                          sx={{ color: "#0EA5E9", fontSize: 24 }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={effect}
                        primaryTypographyProps={{
                          sx: {
                            fontSize: "1rem",
                            color: "#E0F2FE",
                            lineHeight: 1.5,
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* Human Health Effects */}
            <Grid item xs={12} sm={12} md={4}>
              <Paper
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(14, 165, 233, 0.15) 100%)",
                  backdropFilter: "blur(30px)",
                  border: "3px solid rgba(6, 182, 212, 0.4)",
                  borderRadius: "24px",
                  p: 4,
                  height: "100%",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 25px 70px rgba(6, 182, 212, 0.5)",
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 90,
                    height: 90,
                    bgcolor: "#06B6D4",
                    mb: 3,
                    mx: "auto",
                    boxShadow: "0 15px 40px rgba(6, 182, 212, 0.6)",
                  }}
                >
                  <HealthAndSafetyIcon sx={{ fontSize: 50 }} />
                </Avatar>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "#fff",
                    textAlign: "center",
                    mb: 3,
                    textShadow: "0 0 20px rgba(255,255,255,0.4)",
                  }}
                >
                  Human Health Effects
                </Typography>
                <List>
                  {healthEffects.map((effect, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 35 }}>
                        <CheckCircleIcon
                          sx={{ color: "#06B6D4", fontSize: 24 }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={effect}
                        primaryTypographyProps={{
                          sx: {
                            fontSize: "1rem",
                            color: "#E0F2FE",
                            lineHeight: 1.5,
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* Societal and Economic Effects */}
            <Grid item xs={12} sm={12} md={4}>
              <Paper
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)",
                  backdropFilter: "blur(30px)",
                  border: "3px solid rgba(14, 165, 233, 0.4)",
                  borderRadius: "24px",
                  p: 4,
                  height: "100%",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 25px 70px rgba(14, 165, 233, 0.5)",
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 90,
                    height: 90,
                    bgcolor: "#0EA5E9",
                    mb: 3,
                    mx: "auto",
                    boxShadow: "0 15px 40px rgba(14, 165, 233, 0.6)",
                  }}
                >
                  <AttachMoneyIcon sx={{ fontSize: 50 }} />
                </Avatar>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "#fff",
                    textAlign: "center",
                    mb: 3,
                    textShadow: "0 0 20px rgba(255,255,255,0.4)",
                  }}
                >
                  Societal & Economic
                </Typography>
                <List>
                  {economicEffects.map((effect, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 35 }}>
                        <CheckCircleIcon
                          sx={{ color: "#0EA5E9", fontSize: 24 }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={effect}
                        primaryTypographyProps={{
                          sx: {
                            fontSize: "1rem",
                            color: "#E0F2FE",
                            lineHeight: 1.5,
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* SOLUTIONS Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "3rem", md: "5rem" },
              fontWeight: 900,
              color: "#fff",
              textAlign: "center",
              textShadow: "0 0 40px rgba(14, 165, 233, 0.7)",
              mb: 2,
            }}
          >
            SOLUTIONS
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              color: "#BAE6FD",
              textAlign: "center",
              mb: 8,
            }}
          >
            Actions we can take to combat air pollution
          </Typography>

          <Grid container spacing={6} sx={{ justifyContent: "center" }}>
            {/* Individual Level Actions */}
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(14, 165, 233, 0.25) 0%, rgba(6, 182, 212, 0.2) 100%)",
                  backdropFilter: "blur(30px)",
                  border: "3px solid rgba(14, 165, 233, 0.5)",
                  borderRadius: "24px",
                  p: 5,
                  height: "100%",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 30px 90px rgba(14, 165, 233, 0.6)",
                  },
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 3, mb: 4 }}
                >
                  <Avatar
                    sx={{
                      width: 100,
                      height: 100,
                      bgcolor: "#0EA5E9",
                      boxShadow: "0 15px 50px rgba(14, 165, 233, 0.7)",
                    }}
                  >
                    <PeopleIcon sx={{ fontSize: 60 }} />
                  </Avatar>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "2rem", md: "3.5rem" },
                      fontWeight: 900,
                      color: "#fff",
                      textShadow: "0 0 30px rgba(255,255,255,0.5)",
                    }}
                  >
                    Individual Actions
                  </Typography>
                </Box>
                <List>
                  {individualActions.map((action, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 1.5 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <CheckCircleIcon
                          sx={{ color: "#0EA5E9", fontSize: 28 }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={action}
                        primaryTypographyProps={{
                          sx: {
                            fontSize: "1.15rem",
                            color: "#E0F2FE",
                            lineHeight: 1.6,
                            fontWeight: 500,
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* Community Level Actions */}
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(14, 165, 233, 0.2) 100%)",
                  backdropFilter: "blur(30px)",
                  border: "3px solid rgba(6, 182, 212, 0.5)",
                  borderRadius: "24px",
                  p: 5,
                  height: "100%",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 30px 90px rgba(6, 182, 212, 0.6)",
                  },
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 3, mb: 4 }}
                >
                  <Avatar
                    sx={{
                      width: 100,
                      height: 100,
                      bgcolor: "#06B6D4",
                      boxShadow: "0 15px 50px rgba(6, 182, 212, 0.7)",
                    }}
                  >
                    <GroupsIcon sx={{ fontSize: 60 }} />
                  </Avatar>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "2rem", md: "3.5rem" },
                      fontWeight: 900,
                      color: "#fff",
                      textShadow: "0 0 30px rgba(255,255,255,0.5)",
                    }}
                  >
                    Community Actions
                  </Typography>
                </Box>
                <List>
                  {communityActions.map((action, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 1.5 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <CheckCircleIcon
                          sx={{ color: "#06B6D4", fontSize: 28 }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={action}
                        primaryTypographyProps={{
                          sx: {
                            fontSize: "1.15rem",
                            color: "#E0F2FE",
                            lineHeight: 1.6,
                            fontWeight: 500,
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Epic CTA */}
        <Paper
          sx={{
            background:
              "linear-gradient(135deg, rgba(14, 165, 233, 0.3) 0%, rgba(6, 182, 212, 0.25) 100%)",
            backdropFilter: "blur(40px)",
            border: "4px solid rgba(14, 165, 233, 0.6)",
            borderRadius: "32px",
            p: { xs: 6, md: 10 },
            mb: 0,
            textAlign: "center",
            boxShadow: "0 40px 150px rgba(14, 165, 233, 0.6)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
            },
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "3rem", md: "6rem" },
                fontWeight: 900,
                color: "#fff",
                textShadow: "0 0 60px rgba(255, 255, 255, 0.8)",
                mb: 4,
                letterSpacing: "-0.03em",
              }}
            >
              TAKE ACTION TODAY
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.3rem", md: "1.8rem" },
                color: "#E0F2FE",
                mb: 6,
                maxWidth: "900px",
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              Every small action counts. Join us in the fight for clean air and
              a sustainable future. Together, we can make a difference.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                href="#/about"
                sx={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  px: 8,
                  py: 2.5,
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)",
                  boxShadow: "0 15px 50px rgba(14, 165, 233, 0.6)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  "&:hover": {
                    transform: "scale(1.08) translateY(-3px)",
                    boxShadow: "0 20px 70px rgba(14, 165, 233, 0.8)",
                  },
                }}
              >
                Learn More
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#/team"
                sx={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  px: 8,
                  py: 2.5,
                  borderRadius: "16px",
                  border: "3px solid rgba(255, 255, 255, 0.6)",
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  "&:hover": {
                    border: "3px solid #fff",
                    background: "rgba(255, 255, 255, 0.1)",
                    transform: "scale(1.08) translateY(-3px)",
                  },
                }}
              >
                Join Our Team
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
