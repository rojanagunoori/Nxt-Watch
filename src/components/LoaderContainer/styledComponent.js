import styled from 'styled-components'
import Loader from 'react-loader-spinner'

export const StyleLoaderContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#ebebeb')};
  height: 66.8vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const LoaderElement = styled(Loader)``
