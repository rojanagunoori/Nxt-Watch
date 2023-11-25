/* eslint-disable no-nested-ternary */
import {Component} from 'react'

import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'

import {MdPlaylistAdd} from 'react-icons/md'
import {BiLike, BiDislike} from 'react-icons/bi'

import {
  VideoItemContainer,
  VideoImage,
  ListVideoItemContainer,
  VideoHead,
  VideoIconItemContainer,
  FlexContainer,
  VideoItemPara,
  BsDotIcon,
  ProfileImage,
  VideoItemDes,
  Button,
  IconButton,
  ButtonFlexContainer,
  ButtonLike,
} from './styledComponent'

import WatchContext from '../../WatchContext'
import Header from '../Header'

import ErrorMessage from '../ErrorMessage'
import LoaderContainer from '../LoaderContainer'

const apiStatusConstants = {
  initial: '`INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoList: [],

    isLiked: false,
    isDisLiked: false,

    selectedId: '',
    isVideoSaved: false,
  }

  componentDidMount() {
    this.renderMethod()
  }

  renderMethod = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      const updatedData = {
        channel: {
          name: data.video_details.channel.name,

          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        videoList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderInProgress = () => <LoaderContainer />

  onClickRetry = () => {
    this.renderMethod()
  }

  renderFailure = () => <ErrorMessage onClickRetry={this.onClickRetry} />

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderInProgress()
      case apiStatusConstants.success:
        return this.renderSuccess()
      case apiStatusConstants.failure:
        return this.renderFailure()

      default:
        return null
    }
  }

  likeVideo = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  dislikeVideo = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderSuccess = () => (
    <WatchContext.Consumer>
      {value => {
        const {addToSaveVideo, removeSavedVideos} = value
        const {videoList, isVideoSaved} = this.state
        const {
          id,
          channel,
          description,
          viewCount,
          videoUrl,
          title,
          publishedAt,
        } = videoList
        const {name, profileImageUrl, subscriberCount} = channel

        const {isResults} = this.context

        const addOrRemoveItem = () => {
          if (isVideoSaved === true) {
            removeSavedVideos(id)
          } else {
            addToSaveVideo({...videoList, isVideoSaved: true})
          }
        }

        const onSaveButton = () => {
          this.setState(
            prev => ({
              isVideoSaved: !prev.isVideoSaved,
            }),
            addOrRemoveItem,
          )
        }
        const {isLiked, isDisLiked} = this.state
        const likeColor = isLiked ? '#2563eb' : '#64748b'
        const disLikeColor = isDisLiked ? '#2563eb' : '#64748b'

        return (
          <ListVideoItemContainer>
            <VideoImage
              controls
              width="90%"
              height="500px"
              url={videoList.videoUrl}
            />

            <VideoHead>{title}</VideoHead>
            <VideoIconItemContainer>
              <FlexContainer>
                <VideoItemPara>{viewCount} Views</VideoItemPara>
                <BsDotIcon />
                <VideoItemPara>
                  {formatDistanceToNow(new Date(publishedAt))}
                </VideoItemPara>
              </FlexContainer>

              <ButtonFlexContainer>
                <div style={{display: 'flex'}}>
                  <ButtonLike type="button" onClick={this.likeVideo}>
                    <BiLike
                      style={{margin: '10px'}}
                      size={25}
                      color={likeColor}
                    />
                    <VideoItemPara style={{color: likeColor}}>
                      Like
                    </VideoItemPara>
                  </ButtonLike>
                  <ButtonLike type="button" onClick={this.dislikeVideo}>
                    <BiDislike
                      style={{margin: '10px'}}
                      size={25}
                      color={disLikeColor}
                    />
                    <VideoItemPara style={{color: disLikeColor}}>
                      Dislike
                    </VideoItemPara>
                  </ButtonLike>
                </div>

                <Button
                  saved={isVideoSaved}
                  bgColor={isResults}
                  type="button"
                  onClick={onSaveButton}
                  color={isVideoSaved ? '#4f46e5' : '#181818'}
                >
                  <IconButton as={MdPlaylistAdd} />
                  <VideoItemPara color={isVideoSaved ? '#4f46e5' : '#181818'}>
                    {isVideoSaved ? 'Saved' : 'Save'}
                  </VideoItemPara>
                </Button>
              </ButtonFlexContainer>
            </VideoIconItemContainer>

            <hr />

            <FlexContainer>
              <ProfileImage src={profileImageUrl} alt="channel logo" />
              <div>
                <VideoItemPara>{name}</VideoItemPara>
                <VideoItemPara>{subscriberCount}</VideoItemPara>
                <VideoItemDes>{description}</VideoItemDes>
              </div>
            </FlexContainer>
          </ListVideoItemContainer>
        )
      }}
    </WatchContext.Consumer>
  )

  render() {
    return (
      <div data-testid="videoItemDetails">
        <WatchContext.Consumer>
          {value => {
            const {isResults} = value
            const darkThemeBackground = isResults
              ? {backgroundColor: '#0f0f0f'}
              : {}

            return (
              <>
                <Header />
                <VideoItemContainer
                  bgColor={isResults}
                  style={darkThemeBackground}
                >
                  {this.renderApiStatus()}
                </VideoItemContainer>
              </>
            )
          }}
        </WatchContext.Consumer>
      </div>
    )
  }
}

VideoItemDetails.contextType = WatchContext

export default VideoItemDetails
