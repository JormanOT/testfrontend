import { SignedOut, SignedIn, RedirectToSignIn } from "@clerk/clerk-react"
import { useUser } from '@clerk/clerk-react'
import NavBar from './components/NavBar'
import UserBar from "./components/UserBar"
import FilesContainer from "./components/filesContainer"
import styled from 'styled-components'
import { Toaster } from 'react-hot-toast'

function App() {
  const { user } = useUser();

  return (
    <Top>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <NavBar />

        <UserBar />

        <FilesContainer />

        <Toaster />

      </SignedIn>
    </Top>
  )
}

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap : 2em;
`

export default App
