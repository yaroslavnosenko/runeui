import { MainInput, Menu } from '@/components'

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-6 pt-8 bg-gradient-to-t from-base-100 to-transparent via-base-100">
      <div className="container px-6 mx-auto max-w-prose grid gap-6">
        <Menu />
        <MainInput />
        <div className="flex gap-4 justify-center text-sm">
          <p className="link link-hover">RuneUI</p>
          <p className="link link-hover">About</p>
          <p className="link link-hover">GitHub</p>
        </div>
      </div>
    </footer>
  )
}
