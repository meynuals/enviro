import React from 'react'
import { Box, Container, Typography, Card, CardContent, Avatar, Accordion, AccordionSummary, AccordionDetails, Chip, Button, Link as MuiLink, Grid, Paper } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import BookIcon from '@mui/icons-material/Book'
import ArticleIcon from '@mui/icons-material/Article'
import PublicIcon from '@mui/icons-material/Public'
import ScienceIcon from '@mui/icons-material/Science'
import PolicyIcon from '@mui/icons-material/Policy'
import SchoolIcon from '@mui/icons-material/School'
import BusinessIcon from '@mui/icons-material/Business'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const airPollutionLinks = [
  {
    label: '66,000 Filipinos die; P4.5T lost yearly due to air pollution',
    url: 'https://mb.com.ph/2021/11/10/66000-filipinos-die-p4-5-t-lost-yearly-due-to-air-pollution-report/?utm_source=chatgpt.com',
    site: 'Manila Bulletin',
    author: 'Joseph Pedrajas',
    icon: ArticleIcon,
    color: '#0EA5E9',
  },
  {
    label: 'Plastic in the air we breathe',
    url: 'https://opinion.inquirer.net/163112/plastic-in-the-air-we-breathe?utm_source=chatgpt.com',
    site: 'Philippine Daily Inquirer',
    author: 'Anonymous',
    icon: PublicIcon,
    color: '#06B6D4',
  },
  {
    label: 'Tackling air pollution in the Philippines',
    url: 'https://www.sciencedirect.com/science/article/pii/S2542519622000651?via%3Dihub',
    site: 'ScienceDirect',
    author: 'Ourlad Alzeus G Tantengco, Renzo R Guinto',
    icon: ScienceIcon,
    color: '#0EA5E9',
  },
]

const envLinks = [
  {
    label: 'Alsons Power: Recognized for environmental stewardship across Mindanao',
    url: 'https://alsonspower.com/alsons-power-recognized-for-environmental-stewardship-across-mindanao/',
    site: 'Alsons Power',
    author: 'Alsons Power',
    desc: 'Overview of community and environmental programs led by Alsons Power in Mindanao.',
    icon: BusinessIcon,
    color: '#06B6D4',
  },
  {
    label: "IBON: A glimpse at the critical state of the Philippine environment",
    url: 'https://www.ibon.org/a-glimpse-at-the-critical-state-of-the-philippine-environment/',
    site: 'IBON Foundation',
    author: 'IBON',
    desc: 'Analysis of key environmental challenges facing the Philippines.',
    icon: PublicIcon,
    color: '#0EA5E9',
  },
  {
    label: 'James Madison University: What is environmental stewardship?',
    url: 'https://www.jmu.edu/stewardship/what-is-environmental-stewardship.shtml?utm_source=chatgpt.com',
    site: 'James Madison University',
    author: 'JMU Stewardship',
    desc: 'Definition and principles of environmental stewardship used in education and policy.',
    icon: SchoolIcon,
    color: '#06B6D4',
  },
  {
    label: 'Inquirer Opinion: Environmental stewardship is collective',
    url: 'https://opinion.inquirer.net/149290/environmental-stewardship-is-collective',
    site: 'Philippine Daily Inquirer',
    author: 'Inquirer Opinion',
    desc: 'An opinion piece arguing for shared responsibility in protecting the environment.',
    icon: ArticleIcon,
    color: '#0EA5E9',
  },
  {
    label: 'MinDA: Sustainable tourism development advocacy',
    url: 'https://minda.gov.ph/project-management-and-coordination/sustainable-tourism-new/sustainable-tourism-development-advocacy',
    site: 'Mindanao Development Authority',
    author: 'MinDA',
    desc: 'Information on sustainable tourism initiatives and advocacy in Mindanao.',
    icon: PolicyIcon,
    color: '#06B6D4',
  },
  {
    label: 'Davao City Qualifies for One Planet City Challenge',
    url: 'https://www.davaocity.gov.ph/local-government/davao-city-qualifies-for-one-planet-city-challenge/?utm_source=chatgpt.com',
    site: 'Davao City Government',
    author: 'CIO Admin',
    icon: LocationCityIcon,
    color: '#0EA5E9',
  },
  {
    label: 'IQAir adds its New Air Quality Monitor in Ateneo de Davao University',
    url: 'https://www.addu.edu.ph/blog/2023/11/10/read-iqair-adds-its-new-air-quality-monitor-in-ateneo-de-davao/?utm_source=chatgpt.com',
    site: 'Ateneo de Davao University',
    author: 'Anonymous',
    icon: SchoolIcon,
    color: '#06B6D4',
  },
]

export default function LearnMore() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#0A0E27',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Particles */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
          animation: 'drift 15s ease-in-out infinite',
          '@keyframes drift': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(50px, 30px)' },
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 10 }}>
        {/* Epic Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3.5rem', md: '7rem' },
              fontWeight: 900,
              color: '#fff',
              textShadow: '0 0 50px rgba(14, 165, 233, 0.8)',
              mb: 3,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            LEARN. ACT.<br/>TRANSFORM.
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
            Knowledge is power. Start your journey here.
          </Typography>
        </Box>

        {/* Air Pollution Articles */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 900,
              color: '#fff',
              textShadow: '0 0 30px rgba(14, 165, 233, 0.6)',
              mb: 2,
              textAlign: 'center',
            }}
          >
            Air Pollution Resources
          </Typography>
          <Typography
            sx={{
              fontSize: '1.3rem',
              color: '#BAE6FD',
              textAlign: 'center',
              mb: 6,
            }}
          >
            Essential reading on air pollution and its impact
          </Typography>

          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {airPollutionLinks.map((resource) => {
              const Icon = resource.icon
              return (
                <Grid item xs={12} sm={6} md={4} key={resource.url}>
                  <Card
                    component="a"
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      height: '100%',
                      background: `linear-gradient(135deg, ${resource.color}20 0%, ${resource.color}10 100%)`,
                      backdropFilter: 'blur(20px)',
                      border: `3px solid ${resource.color}50`,
                      borderRadius: '20px',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        transform: 'translateY(-15px) scale(1.02)',
                        border: `3px solid ${resource.color}`,
                        boxShadow: `0 25px 70px ${resource.color}70`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Avatar
                        sx={{
                          width: 80,
                          height: 80,
                          bgcolor: resource.color,
                          mb: 3,
                          boxShadow: `0 10px 30px ${resource.color}60`,
                        }}
                      >
                        <Icon sx={{ fontSize: 50 }} />
                      </Avatar>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: '1.4rem',
                          fontWeight: 700,
                          color: '#fff',
                          mb: 2,
                          lineHeight: 1.3,
                        }}
                      >
                        {resource.label}
                      </Typography>
                      <Box sx={{ mt: 'auto' }}>
                        <Typography sx={{ fontSize: '0.95rem', color: '#7DD3FC', mb: 0.5 }}>
                          📰 {resource.site}
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: '#BAE6FD', opacity: 0.8 }}>
                          ✍️ {resource.author}
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1, color: resource.color }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1rem' }}>
                          Read Article
                        </Typography>
                        <OpenInNewIcon sx={{ fontSize: 20 }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Box>

        {/* Environmental Stewardship Section */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 900,
              color: '#fff',
              textShadow: '0 0 30px rgba(14, 165, 233, 0.6)',
              mb: 2,
              textAlign: 'center',
            }}
          >
            Environmental Stewardship
          </Typography>
          <Typography
            sx={{
              fontSize: '1.3rem',
              color: '#BAE6FD',
              textAlign: 'center',
              mb: 6,
            }}
          >
            Policies, initiatives, and local action
          </Typography>

          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {envLinks.map((resource) => {
              const Icon = resource.icon
              return (
                <Grid item xs={12} sm={6} md={4} key={resource.url}>
                  <Paper
                    component="a"
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      background: `linear-gradient(135deg, ${resource.color}15 0%, ${resource.color}08 100%)`,
                      backdropFilter: 'blur(20px)',
                      border: `2px solid ${resource.color}40`,
                      borderRadius: '16px',
                      p: 4,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      display: 'block',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        border: `2px solid ${resource.color}`,
                        boxShadow: `0 20px 50px ${resource.color}50`,
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          bgcolor: resource.color,
                          boxShadow: `0 8px 25px ${resource.color}50`,
                        }}
                      >
                        <Icon sx={{ fontSize: 35 }} />
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: '1.3rem',
                            fontWeight: 700,
                            color: '#fff',
                            mb: 1,
                            lineHeight: 1.3,
                          }}
                        >
                          {resource.label}
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: '#7DD3FC' }}>
                          📰 {resource.site} • ✍️ {resource.author}
                        </Typography>
                      </Box>
                    </Box>
                    {resource.desc && (
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          color: '#BAE6FD',
                          lineHeight: 1.6,
                          mb: 2,
                        }}
                      >
                        {resource.desc}
                      </Typography>
                    )}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: resource.color }}>
                      <Typography sx={{ fontWeight: 700 }}>
                        Learn More
                      </Typography>
                      <OpenInNewIcon sx={{ fontSize: 18 }} />
                    </Box>
                  </Paper>
                </Grid>
              )
            })}
          </Grid>
        </Box>

        {/* Epic CTA */}
        <Paper
          sx={{
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)',
            backdropFilter: 'blur(30px)',
            border: '3px solid rgba(14, 165, 233, 0.4)',
            borderRadius: '24px',
            p: { xs: 6, md: 8 },
            textAlign: 'center',
            boxShadow: '0 30px 120px rgba(14, 165, 233, 0.4)',
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
            READY TO TAKE ACTION?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              color: '#7DD3FC',
              mb: 5,
              lineHeight: 1.6,
            }}
          >
            Every voice matters. Every action counts. Join us in the fight for clean air.
          </Typography>
          <Button
            variant="contained"
            href="#/team"
            sx={{
              fontSize: '1.5rem',
              fontWeight: 800,
              px: 8,
              py: 2.5,
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)',
              boxShadow: '0 15px 50px rgba(14, 165, 233, 0.6)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.08) translateY(-3px)',
                boxShadow: '0 20px 70px rgba(14, 165, 233, 0.8)',
              },
            }}
          >
            Join Our Team
          </Button>
        </Paper>
      </Container>
    </Box>
  )
}
