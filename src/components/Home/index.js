import {Component} from 'react'

import Cookies from 'js-cookie'

import {formatDistanceToNow} from 'date-fns'

import {
  HomeItemContainer,
  SearchInput,
  ApiContainer,
  HomeListLi,
  HomeListPara,
  HomeListHead,
  StyledLink,
  SuccessContainer,
  Button,
  ChannelLogo,
  VideoImage,
  FlexContainer,
  SearchIcon,
  BsDotIcon,
  NoSearchContainer,
  NoSearchImage,
  NoSearchHead,
  NoSearchPara,
  NoSearchButton,
  BannerContainer,
  BannerClose,
  BannerLogo,
  BannerPara,
  BannerButton,
  ButtonClose,
} from './styledComponents'

import Header from '../Header'
import ErrorMessage from '../ErrorMessage'

import LoaderContainer from '../LoaderContainer'

import WatchContext from '../../WatchContext'

const apiStatusConstants = {
  initial: '`INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    isBanner: true,

    searchInput: '',
    homeList: [],
  }

  componentDidMount() {
    this.renderMethod()
  }

  renderMethod = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()

      const updatedData = data.videos.map(each => ({
        id: each.id,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },

        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        homeList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetryBtn = () => {
    this.renderMethod()
  }

  renderNoSearch = () => {
    const {isResults} = this.context
    return (
      <NoSearchContainer bgColor={isResults}>
        <NoSearchImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoSearchHead>No Search results found</NoSearchHead>
        <NoSearchPara>
          Try different key words or remove Search filter
        </NoSearchPara>
        <NoSearchButton type="button" onClick={this.onClickRetryBtn}>
          Retry
        </NoSearchButton>
      </NoSearchContainer>
    )
  }

  renderSuccess = () => {
    const {isResults} = this.context
    const {homeList} = this.state

    return (
      <SuccessContainer>
        {homeList.length > 0
          ? homeList.map(each => (
              <StyledLink to={`/videos/${each.id}`} key={each.id}>
                <HomeListLi key={each.id}>
                  <VideoImage src={each.thumbnailUrl} alt="video thumbnail" />
                  <FlexContainer>
                    <ChannelLogo
                      src={each.channel.profileImageUrl}
                      alt="channel logo"
                    />
                    <div>
                      <HomeListHead bgColor={isResults}>
                        {each.title}
                      </HomeListHead>
                      <HomeListPara bgColor={isResults}>
                        {each.channel.name}
                      </HomeListPara>
                      <FlexContainer>
                        <HomeListPara bgColor={isResults}>
                          {each.viewCount} Views
                        </HomeListPara>
                        <BsDotIcon />
                        <HomeListPara bgColor={isResults}>
                          {formatDistanceToNow(new Date(each.publishedAt))}
                        </HomeListPara>
                      </FlexContainer>
                    </div>
                  </FlexContainer>
                </HomeListLi>
              </StyledLink>
            ))
          : this.renderNoSearch()}
      </SuccessContainer>
    )
  }

  renderSearchInput = () => {
    const {searchInput} = this.state

    this.setState({searchInput}, this.renderMethod)
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickRetry = () => {
    this.renderMethod()
  }

  renderFailure = () => <ErrorMessage onClickRetry={this.onClickRetry} />

  renderInProgress = () => <LoaderContainer />

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

  onClickBanner = () => {
    this.setState({isBanner: false})
  }

  renderPopup = () => (
    <BannerContainer data-testid="banner">
      <ButtonClose
        type="button"
        onClick={this.onClickBanner}
        data-testid="close"
      >
        <BannerClose />
      </ButtonClose>
      <>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerPara>Buy Nxt Watch Premium prepaid plans with UPI</BannerPara>
        <BannerButton type="button">GET IT NOW</BannerButton>
      </>
    </BannerContainer>
  )

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isResults} = value

          const {searchInput, isBanner} = this.state
          return (
            <div data-testid="home">
              <Header />

              <HomeItemContainer data-testid="home" bgColor={isResults}>
                <>{isBanner && this.renderPopup()}</>
                <div style={{display: 'flex', padding: '2%'}}>
                  <SearchInput
                    onChange={this.onChangeSearchInput}
                    type="search"
                    Color={isResults}
                    placeholder="Search"
                    value={searchInput}
                  />
                  <Button
                    aria-label="button"
                    type="button"
                    data-testid="searchButton"
                    onClick={this.renderSearchInput}
                  >
                    <SearchIcon />
                  </Button>
                </div>
              </HomeItemContainer>
              <ApiContainer bgColor={isResults}>
                {this.renderApiStatus()}
              </ApiContainer>
            </div>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

Home.contextType = WatchContext

export default Home
