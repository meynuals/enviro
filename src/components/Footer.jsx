import React from 'react'
import { Box, Container, Typography, Link, Grid, Avatar } from '@mui/material'
import AirIcon from '@mui/icons-material/Air'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.95) 0%, rgba(14, 165, 233, 0.1) 100%)',
        color: '#BAE6FD',
        py: 8,
        mt: 15,
        borderTop: '3px solid rgba(14, 165, 233, 0.4)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Avatar
                sx={{
                  width: 70,
                  height: 70,
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)',
                  boxShadow: '0 10px 40px rgba(14, 165, 233, 0.6)',
                  border: '3px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <AirIcon sx={{ fontSize: 45, color: '#fff' }} />
              </Avatar>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #ffffff 0%, #BAE6FD 100%)',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  textShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
                }}
              >
                AirVocate
              </Typography>
            </Box>
            <Typography 
              variant="body1" 
              sx={{ 
                opacity: 0.9,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#7DD3FC',
                textShadow: '0 0 10px rgba(125, 211, 252, 0.3)',
              }}
            >
              Fighting air pollution through education, advocacy, and community action. Every breath matters.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 800, 
                mb: 3,
                color: '#fff',
                textShadow: '0 0 20px rgba(14, 165, 233, 0.6)',
                fontSize: '1.8rem',
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {['Home', 'About Us', 'Team', 'Learn More'].map((item, idx) => (
                <Link 
                  key={idx}
                  href={`#/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '')}`}
                  sx={{ 
                    color: '#7DD3FC', 
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    '&:hover': { 
                      color: '#fff',
                      transform: 'translateX(10px)',
                      textShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
                    } 
                  }}
                >
                  → {item}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '2px solid rgba(14, 165, 233, 0.3)',
            pt: 4,
            mt: 4,
            textAlign: 'center',
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#7DD3FC',
              textShadow: '0 0 10px rgba(125, 211, 252, 0.3)',
            }}
          >
            © {new Date().getFullYear()} AirVocate. All rights reserved. | Every breath counts. 🌬️
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
