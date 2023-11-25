import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#1e293b' : '#f1f1f1')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginItemContainer = styled.form`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.Color ? '#f9f9f9' : '#0f0f0f')};
  padding: 4%;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
`
export const LoginLogo = styled.img`
  width: 150px;
  height: 40px;
  margin: auto;
  display: block;
  margin-bottom: 10px;
`
export const LoginButton = styled.button`
  background-color: #4f46e5;
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border: 0;
  border-radius: 10px;
  color: #ffffff;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.Color ? 'white' : '#0f0f0f')};
`
export const InputContainer = styled.input`
  width: ${props => (props.Width ? '' : '100%')};

  height: 40px;
  border: 1px solid #475569;

  outline: none;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: transparent;
  color: ${props => (props.Color ? 'white' : '#0f0f0f')};
`
export const ErrorPara = styled.p`
  font-size: 14px;
  color: #ff0b37;
`
