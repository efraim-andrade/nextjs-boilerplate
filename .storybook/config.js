import { addDecorator } from '@storybook/react'

import withGlobalStyles from './withGlobalStyles'
import withCenterWrapper from './withCenterWrapper'

addDecorator(withGlobalStyles)
addDecorator(withCenterWrapper)
