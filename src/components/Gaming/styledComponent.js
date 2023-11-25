import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'

export const MainGameContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 250px;
  margin-top: 10vh;
  padding: 2%;

  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#e2e8f0')};
  color: ${props => (props.bgColor ? '#e2e8f0' : '#0f0f0f')};
`
export const GameIconCon = styled.div`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  padding: 10px;
  width: 60px;
  margin: 10px;
  text-align: center;

  border-radius: 120px;
`

export const GameIcon = styled(SiYoutubegaming)`
  color: #ff0b37;
  font-size: 25px;
`

export const GameTopHead = styled.h1`
  font-size: 25px;
`

export const ApiContainer = styled.div`
  color: ${props => (props.bgColor ? 'white' : '#0f0f0f')};
  background-color: ${props => (props.bgColor ? ' #0f0f0f' : '#f9f9f9')};
  overflow-y: auto;
  margin-left: 250px;
  padding: 2%;
`
export const GameSuccessContainer = styled.ul`
  list-style-type: none;
  background-color: ${props => (props.bgColor ? ' #0f0f0f' : '#f9f9f9')};
  color: ${props => (props.bgColor ? 'white' : '#0f0f0f')};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const LinkContainer = styled(Link)`
  color: inherit;
  text-decoration: none;
`

export const GameImage = styled.img`
  width: 250px;
  height: 350px;
  margin: 10px;
`

export const GameHead = styled.p`
  font-size: 20px;
`

export const GamePara = styled.p`
  font-size: 16px;
`
