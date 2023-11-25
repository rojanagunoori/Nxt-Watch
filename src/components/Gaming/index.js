import {Component} from 'react'

import Cookies from 'js-cookie'

import {
  GameTopHead,
  MainGameContainer,
  GameIconCon,
  GameIcon,
  ApiContainer,
  GameSuccessContainer,
  LinkContainer,
  GameImage,
  GameHead,
  GamePara,
} from './styledComponent'

import WatchContext from '../../WatchContext'
import ErrorMessage from '../ErrorMessage'
import LoaderContainer from '../LoaderContainer'

import Header from '../Header'

const apiStatusConstants = {
  initial: '`INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, gameList: []}

  componentDidMount() {
    this.renderMethod()
  }

  renderMethod = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()

      const updateData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        gameList: updateData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccess = () => {
    const {isResults} = this.context
    const {gameList} = this.state
    return (
      <GameSuccessContainer bgColor={isResults}>
        {gameList.map(each => (
          <LinkContainer to={`/videos/${each.id}`} key={each.id}>
            <li>
              <GameImage src={each.thumbnailUrl} alt="video thumbnail" />
              <GameHead>{each.title}</GameHead>
              <GamePara>{each.viewCount} Watching Worldwide</GamePara>
            </li>
          </LinkContainer>
        ))}
      </GameSuccessContainer>
    )
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

  render() {
    return (
      <div data-testid="gaming">
        <WatchContext.Consumer>
          {value => {
            const {isResults} = value
            return (
              <>
                <Header />
                <MainGameContainer bgColor={isResults}>
                  <GameIconCon bgColor={isResults}>
                    <GameIcon />
                  </GameIconCon>
                  <GameTopHead>Gaming</GameTopHead>
                </MainGameContainer>
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

Gaming.contextType = WatchContext

export default Gaming
