import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import Header from '../Header'

import WatchContext from '../../WatchContext'

import {
  MainSaveVideoContainer,
  SaveVideoIconCon,
  SaveVideoIcon,
  SaveVideoTopHead,
  ApiContainer,
  SavedItemContainer,
  LinkContainer,
  TrendFlexContainer,
  SavedImage,
  SavedHead,
  SavedPara,
  BsDotIcon,
  NoSavedContainer,
  NoSavedImage,
  NoSavedHead,
  NoSavedPara,
  NoSavedButton,
} from './styledComponent'

class SavedVideos extends Component {
  NoSavedVideos = () => {
    const {isResults, savedVideos} = this.context
    if (savedVideos.length === 0) {
      return (
        <NoSavedContainer bgColor={isResults}>
          <NoSavedImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
            alt="no saved videos"
          />
          <NoSavedHead>No saved videos found</NoSavedHead>
          <p>Save your videos by clicking a button</p>
          <NoSavedButton type="button" onClick={this.onClickRetryBtn}>
            Retry
          </NoSavedButton>
        </NoSavedContainer>
      )
    }

    return null
  }

  renderApiStatus = () => {
    const {isResults, savedVideos} = this.context
    const filteredSavedVideos = savedVideos.filter(video => !video.isRemoved)
    const savedLength = filteredSavedVideos.length > 0

    return (
      <SavedItemContainer bgColor={isResults}>
        {savedLength
          ? filteredSavedVideos.map(each => (
              <LinkContainer to={`/videos/${each.id}`} key={each.id}>
                <li>
                  <TrendFlexContainer>
                    <SavedImage src={each.thumbnailUrl} alt="video thumbnail" />
                    <div>
                      <SavedHead>{each.title}</SavedHead>
                      <SavedPara>{each.channel.name}</SavedPara>
                      <TrendFlexContainer>
                        <SavedPara>{each.viewCount} Views</SavedPara>
                        <BsDotIcon />
                        <SavedPara>
                          {formatDistanceToNow(new Date(each.publishedAt))}
                        </SavedPara>
                      </TrendFlexContainer>
                    </div>
                  </TrendFlexContainer>
                </li>
              </LinkContainer>
            ))
          : this.NoSavedVideos()}
      </SavedItemContainer>
    )
  }

  render() {
    return (
      <div data-testid="savedVideos">
        <WatchContext.Consumer>
          {value => {
            const {isResults} = value
            return (
              <>
                <Header />
                <MainSaveVideoContainer bgColor={isResults}>
                  <SaveVideoIconCon bgColor={isResults}>
                    <SaveVideoIcon />
                  </SaveVideoIconCon>
                  <SaveVideoTopHead>Saved Videos</SaveVideoTopHead>
                </MainSaveVideoContainer>
                <ApiContainer bgColor={isResults}>
                  {this.renderApiStatus()}
                </ApiContainer>
              </>
            )
          }}
        </WatchContext.Consumer>
      </div>
    )
  }
}

SavedVideos.contextType = WatchContext

export default SavedVideos
