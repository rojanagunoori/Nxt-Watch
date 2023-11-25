import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import {BsDot} from 'react-icons/bs'
import {MdClose} from 'react-icons/md'

export const HomeItemContainer = styled.div`
  display: flex;

  margin-left: 250px;
  margin-top: 10vh;

  flex-direction: column;
  background-color: ${props => (props.bgColor ? ' #181818' : '#f9f9f9')};
  color: ${props => (props.bgColor ? '#f9f9f9' : ' #181818')};
`
export const SearchInput = styled.input`
  width: 50%;
  background-color: transparent;
  padding: 10px;
  height: 40px;
  color: ${props => (props.Color ? '#f9f9f9' : '#181818')};
  border: 1px solid #475569;
  outline: none;
`

export const ApiContainer = styled.div`
  color: ${props => (props.Color ? '#f9f9f9' : '#181818')};
  background-color: ${props => (props.bgColor ? ' #181818' : '#f9f9f9')};
  overflow-y: auto;
  margin-left: 250px;
  padding: 2%;
`

export const HomeListLi = styled.li`
  list-style-type: none;
  width: 320px;
`
export const HomeListPara = styled.p`
  color: ${props => (props.bgColor ? '#f9f9f9' : '#181818')};
  background-color: ${props => (props.bgColor ? ' #181818' : '#f9f9f9')};
  font-size: 16px;

  padding-right: 10px;
  margin-top: 0;
`

export const BsDotIcon = styled(BsDot)`
  font-size: 30px;
  margin-top: 0;
`

export const HomeListHead = styled.p`
  color: ${props => (props.bgColor ? '#f9f9f9' : '#181818')};
  background-color: ${props => (props.bgColor ? ' ##181818' : '#f9f9f9')};
  font-size: 20px;
  font-weight: 600;
`
export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  padding: 1%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  height: 41px;
  border: 1px solid #475569;
`
export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  margin: 10px;
`

export const VideoImage = styled.img`
  width: 300px;
  height: 200px;
`
export const FlexContainer = styled.div`
  display: flex;
`
export const SearchIcon = styled(FaSearch)`
  background-color: transparent;

  padding: 7px;
  width: 40px;
  height: 40px;
  color: #475569;
`
export const NoSearchContainer = styled.div`
  color: ${props => (props.bgColor ? '#f9f9f9' : '#181818')};
  background-color: ${props => (props.bgColor ? ' #181818' : '#f9f9f9')};
  align-items: center;
  text-align: center;
  height: 66vh;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
`
export const NoSearchImage = styled.img`
  width: 30%;
  height: 30%;
`
export const NoSearchHead = styled.h1`
  font-size: 20px;
`

export const NoSearchPara = styled.p`
  font-size: 16px;
`
export const NoSearchButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #4f46e5;
  color: white;
  border: 0;
  border-radius: 10px;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 20%;
  padding: 2%;
`

export const BannerClose = styled(MdClose)`
  font-size: 30px;
`

export const BannerLogo = styled.img`
  width: 150px;
  height: 45px;
`
export const BannerPara = styled.p`
  font-size: 18px;
  color: #212121;
  font-weight: 400;
`

export const BannerButton = styled.button`
  color: #212121;
  border: 2px solid #212121;
  width: 100px;
  font-weight: 400;
  height: 40px;
  background-color: transparent;
`
export const ButtonClose = styled.button`
  background-color: transparent;
  border: 0;
  width: 100%;
  display: block;
  margin-left: auto;
`
