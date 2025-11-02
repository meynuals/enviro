import React from 'react'
import { Box } from '@mui/material'
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import LearnMore from './pages/LearnMore'

function Router() {
  const [route, setRoute] = React.useState(() => location.hash.replace('#', '') || '/')

  React.useEffect(() => {
    const onHash = () => setRoute(location.hash.replace('#', '') || '/')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (route === '/about') return <About />
  if (route === '/team') return <Team />
  if (route === '/learn') return <LearnMore />
  return <Home />
}

export default function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#F8FAFB' }}>
      <Header />
      <Nav />
      <Box component="main" sx={{ flex: 1 }}>
        <Router />
      </Box>
      <Footer />
    </Box>
  )
}
