import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FiSun} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'

export const HomeNavContainer = styled.div`
  font-weight: 200px;
  background-color: ${props => (props.bgColor ? ' #212121' : '#f9f9f9')};
  color: ${props => (props.bgColor ? '#f8fafc' : ' #0f0f0f')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 90vh;
  margin-top: 10vh;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`

export const UlNavContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const LiNavContainer = styled.li`
  list-style: none;
  text-decoration: none;
  outline: none;
  display: flex;
  flex-direction: row;
  color: ${props => (props.bgColor ? '#f8fafc' : ' #0f0f0f')};
  width: 100%;
  background-color: ${props => {
    if (props.bgColor) {
      if (props.condition) {
        return ' #606060'
      }
      return '#212121'
    }
    if (props.condition) {
      return '#cbd5e1'
    }
    return '#f8fafc'
  }};
  border: 0;
`

export const StyleReactIcon = styled.div`
  font-size: 22px;
  margin: 14px;
  color: ${({condition}) => (condition === 'true' ? 'red' : '#7e858e')};
`
export const ContactContainer = styled.div`
  font-weight: 300px;
  padding: 10px;
`
export const ContactHead = styled.p`
  font-size: 20px;
`
export const ContactIcon = styled.div`
  display: flex;
  flex-direction: row;
`
export const ContactPara = styled.p`
  font-size: 15px;
  font-weight: bold;
`
export const ContactLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  margin: 10px;
`
export const HeaderNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  padding: 20px;
  background-color: ${props => (props.bgColor ? ' #212121' : '#f9f9f9')};
  color: ${props => (props.bgColor ? '#f8fafc' : ' #0f0f0f')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`
export const HeaderProfile = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const LogoutButton = styled.button`
  border: ${props =>
    props.bgColor ? '1px solid #ffffff' : '1px solid #4f46e5'};
  color: ${props => (props.bgColor ? '#ffffff' : '#4f46e5')};
  background-color: transparent;
  width: 80px;
  height: 40px;
`
export const LinkedStyle = styled(Link)`
  color: inherit;
  text-decoration: none;
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.bgColor ? ' #212121' : '#f9f9f9')};
  color: ${props => (props.bgColor ? '#f8fafc' : ' #0f0f0f')};
  text-align: center;
  width: 300px;
`
export const ConformButton = styled.button`
  background-color: #4f46e5;
  color: white;
  width: 80px;
  height: 30px;
  border: 0;
  margin: 10px;
`
export const CancelButton = styled.button`
  background-color: transparent;
  color: white;
  width: 80px;
  height: 30px;
  border: ${props =>
    props.bgColor ? '1px solid #ffffff' : '1px solid #0f0f0f'};
  color: ${props => (props.bgColor ? '#f8fafc' : ' #0f0f0f')};
`
export const MainPopupContainer = styled.div`
  color: ${props => (props.bgColor ? '#f8fafc' : ' #0f0f0f')};
  width: 300px;
`
export const LogoutLogo = styled.img`
  width: 140px;
  height: 40px;
`
export const ButtonIcon = styled.button`
  background-color: transparent;
  border: 0;
`
export const Profile = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  margin-right: 20px;
`
export const SunIcon = styled(FiSun)`
  font-size: 30px;
  color: white;
`
export const MoonIcon = styled(FaMoon)`
  font-size: 30px;
`

export const UlContainer = styled.ul`
  list-style-type: none;
`
