import { BottomNavigation, Dialogs } from '@/components'
import { DialogsProvider } from '@/contexts'
import { StartPage, ChatPage } from '@/pages'
import { AnimatePresence } from 'framer-motion'
import { Route, HashRouter, Routes, useLocation } from 'react-router-dom'

const AppRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<StartPage />} />
        <Route path="/:chat_id" element={<ChatPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export const App = () => {
  return (
    <DialogsProvider>
      <HashRouter>
        <AppRoutes />
        <Dialogs />
        <BottomNavigation />
      </HashRouter>
    </DialogsProvider>
  )
}
