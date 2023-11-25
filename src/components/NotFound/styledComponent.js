import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 90vh;
  margin-left: 250px;
  margin-top: 10vh;
  align-items: center;
  background-color: ${props => (props.bgColor ? ' #0f0f0f' : '#ebebeb')};
  color: ${props => (props.bgColor ? '#f8fafc' : ' #0f0f0f')};
`

export const NotFoundImage = styled.img`
  width: 30%;
  height: 30%;
`

export const NotFoundHead = styled.h1`
  font-size: 20px;
`

export const NotFoundPara = styled.p`
  font-size: 16px;
`
