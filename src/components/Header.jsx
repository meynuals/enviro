import React from 'react'
import { AppBar, Toolbar, Box, Typography, Container } from '@mui/material'

export default function Header() {
  return (
    <AppBar 
      position="static" 
      sx={{
        background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.98) 0%, rgba(14, 165, 233, 0.2) 100%)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 15px 60px rgba(14, 165, 233, 0.5)',
        borderBottom: '3px solid rgba(14, 165, 233, 0.4)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 3, px: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flex: 1 }}>
            <Box 
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 40px rgba(14, 165, 233, 0.6)',
                border: '3px solid rgba(255, 255, 255, 0.2)',
                animation: 'pulse 3s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%, 100%': {
                    transform: 'scale(1)',
                    boxShadow: '0 10px 40px rgba(14, 165, 233, 0.6)',
                  },
                  '50%': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 15px 60px rgba(14, 165, 233, 0.8)',
                  },
                },
              }}
            >
              <Box
                component="img"
                src="/images/logo.svg"
                alt="AirVocate Logo"
                sx={{
                  width: 160,
                  height: 160,
                  filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))',
                }}
              />
            </Box>
            <Box>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 900, 
                  color: '#fff',
                  margin: 0,
                  letterSpacing: '-0.02em',
                  fontSize: { xs: '2rem', md: '3rem' },
                  textShadow: '0 0 30px rgba(14, 165, 233, 0.8)',
                  background: 'linear-gradient(135deg, #ffffff 0%, #BAE6FD 100%)',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                }}
              >
                AirVocate
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#7DD3FC',
                  display: 'block',
                  marginTop: 0.5,
                  fontSize: { xs: '0.9rem', md: '1.1rem' },
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textShadow: '0 0 10px rgba(125, 211, 252, 0.5)',
                }}
              >
                Taking a Stand Against Air Pollution
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
