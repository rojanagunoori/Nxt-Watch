import styled from 'styled-components'

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 66vh;
  color: ${props => (props.bgColor ? '#ebebeb' : '#0f0f0f')};
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#ebebeb')};
`
export const ErrorImage = styled.img`
  width: 20%;
  height: 20%;
`
export const ErrorHead = styled.h1`
  font-size: 20px;
`
export const ErrorPara = styled.p`
  font-size: 16px;
`
export const ErrorButton = styled.button`
  width: 80px;
  border: 0;
  color: white;
  height: 40px;
  background-color: #4f46e5;
  border-radius: 10px;
`
