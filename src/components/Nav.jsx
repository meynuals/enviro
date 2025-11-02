import React from 'react'
import { AppBar, Toolbar, Container, Box, Link } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import GroupIcon from '@mui/icons-material/Group'
import MenuBookIcon from '@mui/icons-material/MenuBook'

export default function Nav() {
  const navLinks = [
    { label: 'Home', href: '#/', icon: HomeIcon },
    { label: 'About Us', href: '#/about', icon: InfoIcon },
    { label: 'Team', href: '#/team', icon: GroupIcon },
    { label: 'Learn More', href: '#/learn', icon: MenuBookIcon },
  ]

  return (
    <AppBar 
      position="sticky" 
      sx={{
        background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.95) 0%, rgba(14, 165, 233, 0.15) 100%)',
        backdropFilter: 'blur(30px)',
        boxShadow: '0 8px 40px rgba(14, 165, 233, 0.4)',
        borderBottom: '2px solid rgba(14, 165, 233, 0.3)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ px: 0, gap: { xs: 2, md: 5 }, py: 2, justifyContent: 'center' }}>
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  fontSize: { xs: '1rem', md: '1.3rem' },
                  fontWeight: 700,
                  color: '#BAE6FD',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
                  border: '2px solid rgba(14, 165, 233, 0.3)',
                  transition: 'all 0.3s ease',
                  textShadow: '0 0 10px rgba(186, 230, 253, 0.5)',
                  boxShadow: '0 4px 15px rgba(14, 165, 233, 0.2)',
                  '&:hover': {
                    color: '#fff',
                    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.3) 0%, rgba(6, 182, 212, 0.2) 100%)',
                    border: '2px solid rgba(14, 165, 233, 0.7)',
                    transform: 'translateY(-3px) scale(1.05)',
                    boxShadow: '0 10px 30px rgba(14, 165, 233, 0.5)',
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
                  },
                }}
              >
                <Icon sx={{ 
                  fontSize: { xs: 24, md: 28 },
                  filter: 'drop-shadow(0 0 8px rgba(14, 165, 233, 0.6))',
                }} />
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {link.label}
                </Box>
              </Link>
            )
          })}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
