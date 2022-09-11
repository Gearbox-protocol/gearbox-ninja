import React from 'react'
import styled from 'styled-components'
import { RootState } from '../../store/reducer'
import { useSelector } from 'react-redux'

import Pause from '../pause'
import Form from '../pools'
import Notification from '../notification'
import Video from '../video'

const Page = () => {
  const isPaused = useSelector((state: RootState) => state.game.isPaused)
  const form = useSelector((state: RootState) => state.form)
  return (
    <Layout>
      {/* Paused */}
      {/* Forms */}
      {!form.isHidden && <Form />}
      {/* Notification */}
      {isPaused && <Pause />}
      <Notification />
      <Video />
    </Layout>
  )
}

const Layout = styled.main`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 50;
  font-weight: 800;
  font-family: 'Courier New', Courier, monospace;
`

export default Page
