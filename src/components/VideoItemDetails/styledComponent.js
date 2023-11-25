import styled from 'styled-components'

import ReactPlayer from 'react-player'

import {BsDot} from 'react-icons/bs'

export const VideoItemContainer = styled.div`
  background-color: ${props => (props.bgColor ? ' #0f0f0f' : '##f9f9f9')};
  color: ${props => (props.bgColor ? '#f9f9f9' : ' #0f0f0f')};
  min-height: 90vh;
  margin-left: 250px;
  margin-top: 10vh;
`
export const VideoLoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`
export const ListVideoItemContainer = styled.div`
  padding: 2%;
`
export const VideoImage = styled(ReactPlayer)`
  width: 100%;
  height: 30%;
`
export const VideoHead = styled.p`
  font-size: 18px;
  font-weight: 600;
`
export const VideoIconItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 4px;
`

export const VideoItemPara = styled.p`
  font-size: 14px;
`
export const VideoItemDes = styled.p`
  font-size: 15px;
`
export const BsDotIcon = styled(BsDot)`
  font-size: 30px;
  margin: 10px;
`
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`
export const Button = styled.button`
  display: flex;
  font-size: 20px;
  border: 0;
  background-color: transparent;
  width: 100px;
  margin-right: 6px;

  color: ${props => {
    if (props.bgColor) {
      if (props.saved) {
        return '#4f46e5'
      }
      return '#f9f9f9'
    }
    if (props.saved) {
      return '#4f46e5'
    }

    return '#181818'
  }};
`

export const ButtonLike = styled.button`
  display: flex;
  font-size: 20px;
  border: 0;
  background-color: transparent;
  width: 100px;
  margin-right: 6px;

  color: ${props => {
    if (props.bgColor) {
      if (props.condition) {
        return '#2563eb'
      }
      return '#64748b'
    }
    if (props.condition) {
      return '#2563eb'
    }
    return '#64748b'
  }};
`

export const IconButton = styled.div`
  font-size: 25px;
  margin: 5px; ;
`

export const ButtonFlexContainer = styled.div`
  display: flex;
`
