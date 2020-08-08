import styled from 'styled-components'
import { StoryFn } from '@storybook/addons'

const Center = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #e5e5e5;
`

const withCenterWrapper = (storyFn: StoryFn) => <Center>{storyFn()}</Center>

export default withCenterWrapper
