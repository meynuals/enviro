import React from 'react'
import { Box, Container, Typography, Grid, Paper, Avatar, Button, Card, CardContent, CardMedia } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import VisibilityIcon from '@mui/icons-material/Visibility'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PublicIcon from '@mui/icons-material/Public'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import GroupsIcon from '@mui/icons-material/Groups'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import ImageIcon from '@mui/icons-material/Image'
import TikTokIcon from '@mui/icons-material/MusicNote'

export default function About() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#0A0E27',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 60%)',
          animation: 'pulse 10s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 0.5 },
            '50%': { opacity: 1 },
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 10 }}>
        {/* Epic Hero */}
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3.5rem', md: '7rem' },
              fontWeight: 900,
              color: '#fff',
              textShadow: '0 0 40px rgba(255, 255, 255, 0.6)',
              mb: 3,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            BREATHE.<br/>BELIEVE.<br/>BECOME.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.3rem', md: '1.8rem' },
              color: '#7DD3FC',
              fontWeight: 600,
              textShadow: '0 0 20px rgba(125, 211, 252, 0.5)',
            }}
          >
            An advocacy for a renewed atmosphere
          </Typography>
        </Box>

        {/* Mission Section */}
        <Grid container spacing={6} sx={{ mb: 10 }}>
          <Grid item xs={12} md={12}>
            <Paper
              sx={{
                background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)',
                backdropFilter: 'blur(30px)',
                border: '3px solid rgba(14, 165, 233, 0.4)',
                borderRadius: '24px',
                p: { xs: 4, md: 6 },
                boxShadow: '0 30px 90px rgba(14, 165, 233, 0.5)',
                transition: 'all 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-15px)',
                  boxShadow: '0 40px 120px rgba(14, 165, 233, 0.7)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    bgcolor: '#0EA5E9',
                    boxShadow: '0 15px 50px rgba(14, 165, 233, 0.7)',
                  }}
                >
                  <RocketLaunchIcon sx={{ fontSize: 60 }} />
                </Avatar>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 900,
                    color: '#fff',
                    textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
                  }}
                >
                  Our Mission
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  color: '#E0F2FE',
                  lineHeight: 1.8,
                  fontWeight: 500,
                }}
              >
                AirVocate, an advocacy for a renewed atmosphere. We breathe life into the call to{' '}
                <Box component="span" sx={{ color: '#0EA5E9', fontWeight: 700 }}>
                  Breathe Green
                </Box>
                , inspiring everyone to become mindful stewards of God's creation. Through every action and in every digital footprint, we spark awareness, responsibility, and hope for a cleaner, greener world.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* What We Do Section */}
        <Paper
          sx={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(14, 165, 233, 0.15) 100%)',
            backdropFilter: 'blur(30px)',
            border: '3px solid rgba(6, 182, 212, 0.4)',
            borderRadius: '24px',
            p: { xs: 4, md: 6 },
            mb: 10,
            boxShadow: '0 30px 90px rgba(6, 182, 212, 0.5)',
            transition: 'all 0.4s ease',
            '&:hover': {
              transform: 'translateY(-15px)',
              boxShadow: '0 40px 120px rgba(6, 182, 212, 0.7)',
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                bgcolor: '#06B6D4',
                boxShadow: '0 15px 50px rgba(6, 182, 212, 0.7)',
              }}
            >
              <PublicIcon sx={{ fontSize: 60 }} />
            </Avatar>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 900,
                color: '#fff',
                textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
              }}
            >
              What We Do
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              color: '#E0F2FE',
              lineHeight: 1.8,
              fontWeight: 500,
              mb: 3,
            }}
          >
            As advocates of the environment, particularly in addressing air pollution, we raise awareness through our online platform on TikTok. We created and shared a Mini Educational Series that are short, fun, engaging, and educational. Through these videos, we hope to give background information on what air pollution is, how it affects us, and what we can do about it.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              color: '#E0F2FE',
              lineHeight: 1.8,
              fontWeight: 500,
            }}
          >
            These small, everyday practices may seem minor, but collectively, they make a significant difference for our planet. This reminds us that change begins with awareness, and even the smallest step can help create cleaner air and a healthier environment for all.
          </Typography>
        </Paper>

        {/* Why It Matters */}
        <Paper
          sx={{
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)',
            backdropFilter: 'blur(30px)',
            border: '3px solid rgba(14, 165, 233, 0.4)',
            borderRadius: '24px',
            p: { xs: 4, md: 6 },
            mb: 10,
            boxShadow: '0 30px 90px rgba(14, 165, 233, 0.5)',
            transition: 'all 0.4s ease',
            '&:hover': {
              transform: 'translateY(-15px)',
              boxShadow: '0 40px 120px rgba(14, 165, 233, 0.7)',
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                bgcolor: '#0EA5E9',
                boxShadow: '0 15px 50px rgba(14, 165, 233, 0.7)',
              }}
            >
              <FavoriteIcon sx={{ fontSize: 60 }} />
            </Avatar>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 900,
                color: '#fff',
                textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
              }}
            >
              Why It Matters
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              color: '#E0F2FE',
              lineHeight: 1.8,
              fontWeight: 500,
              mb: 3,
            }}
          >
            Air Pollution is an evident and rampant issue that continues to pervade both society and the environment. It has already caused significant damage, such as the deterioration of air quality, harm to human health, and the disruption of ecosystems. Prolonged exposure to polluted air leads to respiratory and cardiovascular diseases, while also accelerating climate change through the release of greenhouse gases.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              color: '#E0F2FE',
              lineHeight: 1.8,
              fontWeight: 500,
            }}
          >
            Addressing this issue matters because the air we breathe connects us all, and protecting it means protecting life itself.
          </Typography>
        </Paper>

        {/* Follow Our Journey */}
        <Paper
          sx={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(14, 165, 233, 0.15) 100%)',
            backdropFilter: 'blur(30px)',
            border: '3px solid rgba(6, 182, 212, 0.4)',
            borderRadius: '24px',
            p: { xs: 4, md: 6 },
            mb: 10,
            boxShadow: '0 30px 90px rgba(6, 182, 212, 0.5)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 900,
              color: '#fff',
              textAlign: 'center',
              mb: 2,
              textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
            }}
          >
            Follow Our Journey
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              color: '#BAE6FD',
              textAlign: 'center',
              mb: 6,
            }}
          >
            Connect with us on our social media and view our documented materials to see our stewardship at work!
          </Typography>

          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                component="a"
                href="https://www.tiktok.com/@airvocate"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.3) 0%, rgba(6, 182, 212, 0.2) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '3px solid rgba(14, 165, 233, 0.5)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  textDecoration: 'none',
                  '&:hover': {
                    transform: 'translateY(-15px) scale(1.03)',
                    boxShadow: '0 25px 70px rgba(14, 165, 233, 0.7)',
                  },
                }}
              >
                <Box
                  sx={{
                    height: 250,
                    background: 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      width: '200%',
                      height: '200%',
                      background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                      animation: 'pulse 3s ease-in-out infinite',
                    },
                  }}
                >
                  <TikTokIcon sx={{ fontSize: 120, color: 'rgba(255, 255, 255, 0.9)', zIndex: 1 }} />
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar sx={{ bgcolor: '#0EA5E9', width: 50, height: 50 }}>
                      <TikTokIcon sx={{ fontSize: 30 }} />
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff', fontSize: '1.8rem' }}>
                      TikTok
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#BAE6FD', fontSize: '1.1rem' }}>
                    Watch our mini educational series
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                component="a"
                href="https://drive.google.com/file/d/11ZIy0p621plVrmp15lrsD5Xr7cVzf-oZ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(14, 165, 233, 0.2) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '3px solid rgba(6, 182, 212, 0.5)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  textDecoration: 'none',
                  '&:hover': {
                    transform: 'translateY(-15px) scale(1.03)',
                    boxShadow: '0 25px 70px rgba(6, 182, 212, 0.7)',
                  },
                }}
              >
                <Box
                  sx={{
                    height: 250,
                    background: 'linear-gradient(135deg, #06B6D4 0%, #0EA5E9 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      width: '200%',
                      height: '200%',
                      background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                      animation: 'pulse 3s ease-in-out infinite 0.5s',
                    },
                  }}
                >
                  <VideoLibraryIcon sx={{ fontSize: 120, color: 'rgba(255, 255, 255, 0.9)', zIndex: 1 }} />
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar sx={{ bgcolor: '#06B6D4', width: 50, height: 50 }}>
                      <VideoLibraryIcon sx={{ fontSize: 30 }} />
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff', fontSize: '1.8rem' }}>
                      Short Film
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#BAE6FD', fontSize: '1.1rem' }}>
                    Watch our advocacy short film
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                component="a"
                href="https://www.canva.com/design/DAGySjhuRSU/ko2jcFjlGgsZp1vE0mQXaw/view"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.3) 0%, rgba(6, 182, 212, 0.2) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '3px solid rgba(14, 165, 233, 0.5)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  textDecoration: 'none',
                  '&:hover': {
                    transform: 'translateY(-15px) scale(1.03)',
                    boxShadow: '0 25px 70px rgba(14, 165, 233, 0.7)',
                  },
                }}
              >
                <Box
                  sx={{
                    height: 250,
                    background: 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      width: '200%',
                      height: '200%',
                      background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                      animation: 'pulse 3s ease-in-out infinite 1s',
                    },
                  }}
                >
                  <ImageIcon sx={{ fontSize: 120, color: 'rgba(255, 255, 255, 0.9)', zIndex: 1 }} />
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar sx={{ bgcolor: '#0EA5E9', width: 50, height: 50 }}>
                      <ImageIcon sx={{ fontSize: 30 }} />
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff', fontSize: '1.8rem' }}>
                      Poster
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#BAE6FD', fontSize: '1.1rem' }}>
                    View our advocacy poster
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>

        {/* Epic CTA */}
        <Paper
          sx={{
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.25) 0%, rgba(6, 182, 212, 0.2) 100%)',
            backdropFilter: 'blur(30px)',
            border: '3px solid rgba(14, 165, 233, 0.5)',
            borderRadius: '24px',
            p: { xs: 6, md: 8 },
            textAlign: 'center',
            boxShadow: '0 30px 120px rgba(14, 165, 233, 0.5)',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '3rem', md: '5rem' },
              fontWeight: 900,
              color: '#fff',
              textShadow: '0 0 40px rgba(255, 255, 255, 0.6)',
              mb: 3,
              letterSpacing: '-0.02em',
            }}
          >
            JOIN THE MOVEMENT
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              color: '#7DD3FC',
              mb: 5,
              lineHeight: 1.6,
            }}
          >
            As stewards of the environment, we are called to care for creation. Upholding this duty begins with collective action toward reducing air pollution and promoting sustainable practices. Through cooperation and awareness, we can foster a cleaner atmosphere and ensure a healthier future for generations to come.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              href="#/learn"
              sx={{
                fontSize: '1.3rem',
                fontWeight: 800,
                px: 6,
                py: 2,
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)',
                boxShadow: '0 15px 50px rgba(14, 165, 233, 0.6)',
                textTransform: 'uppercase',
                '&:hover': {
                  transform: 'scale(1.08) translateY(-3px)',
                  boxShadow: '0 20px 70px rgba(14, 165, 233, 0.8)',
                },
              }}
            >
              Learn How to Help
            </Button>
            <Button
              variant="outlined"
              href="mailto:hello@airvocate.example"
              sx={{
                fontSize: '1.3rem',
                fontWeight: 800,
                px: 6,
                py: 2,
                borderRadius: '16px',
                border: '3px solid rgba(14, 165, 233, 0.6)',
                color: '#fff',
                textTransform: 'uppercase',
                '&:hover': {
                  border: '3px solid #0EA5E9',
                  background: 'rgba(14, 165, 233, 0.1)',
                  transform: 'scale(1.08) translateY(-3px)',
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}
