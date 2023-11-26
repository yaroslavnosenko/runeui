import { BottomNavigation, Dialogs } from '@/components'
import { DialogsProvider } from '@/contexts'
import { StartPage, ChatPage } from '@/pages'
import { Route, HashRouter, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <DialogsProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/:chat_id" element={<ChatPage />} />
        </Routes>
        <Dialogs />
        <BottomNavigation />
      </HashRouter>
    </DialogsProvider>
  )
}
