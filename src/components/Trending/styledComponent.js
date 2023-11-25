import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {FaFire} from 'react-icons/fa'
import {BsDot} from 'react-icons/bs'

export const TopTrendItemContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 250px;
  margin-top: 10vh;
  padding: 2%;

  background-color: ${props => (props.bgColor ? ' #0f0f0f' : '#f9f9f9')};
  color: ${props => (props.bgColor ? '#f9f9f9' : '#0f0f0f')};
`
export const TrendIconCon = styled.div`
  background-color: ${props => (props.bgColor ? ' #0f0f0f' : '#f9f9f9')};
  padding: 10px;
  width: 60px;
  margin: 10px;
  text-align: center;

  border-radius: 120px;
`

export const TrendIcon = styled(FaFire)`
  color: #ff0b37;
  font-size: 25px;
`

export const TrendTopHead = styled.h1`
  font-size: 25px;
`

export const ApiContainer = styled.div`
  color: ${props => (props.Color ? '#f9f9f9' : '#0f0f0f')};
  background-color: ${props => (props.bgColor ? ' #0f0f0f' : '#f9f9f9')};
  overflow-y: auto;
  margin-left: 250px;
  padding: 2%;
`

export const TrendingItemContainer = styled.div`
  color: ${props => (props.bgColor ? '#f9f9f9' : '#0f0f0f')};
  background-color: ${props => (props.bgColor ? ' #0f0f0f' : '#f9f9f9')};
`
export const LinkContainer = styled(Link)`
  color: inherit;
  text-decoration: none;
`
export const TrendFlexContainer = styled.div`
  display: flex;
`
export const TrendImage = styled.img`
  width: 300px;
  height: 200px;
  margin: 20px;
`
export const TrendHead = styled.p`
  font-size: 20px;
`
export const TrendPara = styled.p`
  font-size: 18px;
`

export const BsDotIcon = styled(BsDot)`
  font-size: 40px;
  margin-top: 10px;
`
