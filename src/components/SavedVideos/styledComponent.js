import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {FaFire} from 'react-icons/fa'

import {BsDot} from 'react-icons/bs'

export const MainSaveVideoContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 250px;
  margin-top: 10vh;
  padding: 2%;

  background-color: ${props => (props.bgColor ? ' #0f0f0f' : '#e2e8f0')};
  color: ${props => (props.bgColor ? '#e2e8f0' : ' #0f0f0f')};
`
export const SaveVideoIconCon = styled.div`
  background-color: ${props => (props.bgColor ? ' #0f0f0f' : '#f9f9f9')};
  padding: 10px;
  width: 60px;
  margin: 10px;
  text-align: center;

  border-radius: 120px;
`

export const SaveVideoIcon = styled(FaFire)`
  color: #ff0b37;
  font-size: 25px;
`

export const SaveVideoTopHead = styled.h1`
  font-size: 25px;
`

export const ApiContainer = styled.div`
  color: ${props => (props.Color ? '#f9f9f9' : '#0f0f0f')};
  background-color: ${props => (props.bgColor ? ' #0f0f0f' : '#f9f9f9')};
  overflow-y: auto;
  margin-left: 250px;
  padding: 2%;
`

export const SavedItemContainer = styled.ul`
  list-style-type: none;
  min-height: 62vh;
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
export const SavedImage = styled.img`
  width: 300px;
  height: 200px;
  margin: 20px;
`
export const SavedHead = styled.p`
  font-size: 20px;
`
export const SavedPara = styled.p`
  font-size: 18px;
`

export const BsDotIcon = styled(BsDot)`
  font-size: 40px;
  margin-top: 10px;
`
export const NoSavedContainer = styled.div`
  color: ${props => (props.bgColor ? '#f9f9f9' : '#0f0f0f')};
  background-color: ${props => (props.bgColor ? ' #0f0f0f' : '#f9f9f9')};
  align-items: center;
  text-align: center;
  height: 63vh;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
`
export const NoSavedImage = styled.img`
  width: 30%;
  height: 30%;
`
export const NoSavedHead = styled.h1`
  font-size: 20px;
`

export const NoSavedPara = styled.p`
  font-size: 16px;
`
export const NoSavedButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #4f46e5;
  color: white;
  border: 0;
  border-radius: 10px;
`
