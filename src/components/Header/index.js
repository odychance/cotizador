import React from 'react'
import PropTypes from 'prop-types'
import { ContenedorHeader, TextoHeader } from './styled'

const Header = ({titulo}) => {
  return (
    <ContenedorHeader>
        <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  )
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}
export default Header