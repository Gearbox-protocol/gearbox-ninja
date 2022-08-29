import React from 'react'
import styled from 'styled-components'
import { RootState } from '../../store/reducer'

import Pause from '../pause'
import Form from '../form'
import { useSelector } from 'react-redux'
const Page = () => {
  const form = useSelector((state: RootState) => state.form)
  return (
    <Layout>
      {/* Paused */}
      {/* <Pause /> */}
      {/* Forms */}
      {!form.isHidden && <Form />}
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
