import {Component} from 'react'

import Cookies from 'js-cookie'

import {formatDistanceToNow} from 'date-fns'

import WatchContext from '../../WatchContext'
import Header from '../Header'
import ErrorMessage from '../ErrorMessage'
import LoaderContainer from '../LoaderContainer'

import {
  TopTrendItemContainer,
  TrendIconCon,
  TrendIcon,
  TrendTopHead,
  ApiContainer,
  TrendingItemContainer,
  LinkContainer,
  TrendFlexContainer,
  TrendImage,
  TrendHead,
  TrendPara,
  BsDotIcon,
} from './styledComponent'

const apiStatusConstants = {
  initial: '`INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, tendList: []}

  componentDidMount() {
    this.renderMethod()
  }

  renderMethod = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const JwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`

    const options = {
      methods: 'GET',
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      const updatedData = data.videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },

        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        tendList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccess = () => {
    const {isResults} = this.context
    const {tendList} = this.state
    return (
      <TrendingItemContainer bgColor={isResults}>
        {tendList.map(each => (
          <LinkContainer to={`/videos/${each.id}`} key={each.id}>
            <li>
              <TrendFlexContainer>
                <TrendImage src={each.thumbnailUrl} alt="video thumbnail" />
                <div>
                  <TrendHead>{each.title}</TrendHead>
                  <TrendPara>{each.channel.name}</TrendPara>
                  <TrendFlexContainer>
                    <TrendPara>{each.viewCount} Views</TrendPara>
                    <BsDotIcon />
                    <TrendPara>
                      {formatDistanceToNow(new Date(each.publishedAt))}
                    </TrendPara>
                  </TrendFlexContainer>
                </div>
              </TrendFlexContainer>
            </li>
          </LinkContainer>
        ))}
      </TrendingItemContainer>
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
      <div data-testid="trending">
        <WatchContext.Consumer>
          {value => {
            const {isResults} = value
            return (
              <>
                <Header />
                <TopTrendItemContainer bgColor={isResults}>
                  <TrendIconCon bgColor={isResults}>
                    <TrendIcon />
                  </TrendIconCon>
                  <TrendTopHead>Trending</TrendTopHead>
                </TopTrendItemContainer>
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

Trending.contextType = WatchContext

export default Trending
