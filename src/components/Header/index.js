import {Component} from 'react'

import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  HomeNavContainer,
  ContactContainer,
  LiNavContainer,
  StyleReactIcon,
  ContactHead,
  ContactIcon,
  ContactPara,
  ContactLogo,
  HeaderNavContainer,
  HeaderProfile,
  LogoutButton,
  LinkedStyle,
  ConformButton,
  CancelButton,
  PopupContainer,
  MainPopupContainer,
  LogoutLogo,
  ButtonIcon,
  Profile,
  SunIcon,
  MoonIcon,
  UlContainer,
} from './styledComponents'

import WatchContext from '../../WatchContext'

const details = [
  {id: 1, name: 'Home', icon: IoMdHome, path: '/'},
  {id: 2, name: 'Trending', icon: FaFire, path: '/trending'},
  {id: 3, name: 'Gaming', icon: SiYoutubegaming, path: '/gaming'},
  {id: 4, name: 'Saved Videos', icon: MdPlaylistAdd, path: '/saved-videos'},
]

class Header extends Component {
  onClickIcons = () => {}

  onClickLightDark = () => {
    this.setState(prev => ({isResults: !prev.isResults}))
  }

  onClickConform = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isResults, updateResults} = value

          const {match} = this.props

          const {path} = match

          const onClickLightDark = () => {
            updateResults(isResults)
          }

          const loginLogo = isResults
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <>
              <HeaderNavContainer
                color={isResults ? '#181818' : '#f9f9f9'}
                bgColor={isResults}
              >
                <Link to="/">
                  <LogoutLogo src={loginLogo} alt="website logo" />
                </Link>
                <HeaderProfile>
                  <ButtonIcon
                    type="button"
                    onClick={onClickLightDark}
                    data-testid="theme"
                    color={isResults ? '#f9f9f9' : '#181818'}
                  >
                    {isResults ? (
                      <SunIcon className="sun-icon" />
                    ) : (
                      <MoonIcon className="moon-icon" />
                    )}
                  </ButtonIcon>
                  <Profile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />

                  <MainPopupContainer>
                    <Popup
                      modal
                      trigger={
                        <LogoutButton
                          type="button"
                          bgColor={isResults}
                          data-testid="iconButton"
                        >
                          Logout
                        </LogoutButton>
                      }
                    >
                      {close => (
                        <PopupContainer bgColor={isResults}>
                          <div>
                            <p>Are you sure, you want to logout?</p>
                          </div>

                          <CancelButton
                            type="button"
                            onClick={() => close()}
                            bgColor={isResults}
                            data-testid="closeButton"
                          >
                            Cancel
                          </CancelButton>
                          <ConformButton
                            type="button"
                            onClick={this.onClickConform}
                            bgColor={isResults}
                          >
                            Confirm
                          </ConformButton>
                        </PopupContainer>
                      )}
                    </Popup>
                  </MainPopupContainer>
                </HeaderProfile>
              </HeaderNavContainer>

              <HomeNavContainer bgColor={isResults}>
                <UlContainer>
                  {details.map(each => (
                    <LinkedStyle to={each.path} key={each.id}>
                      <LiNavContainer
                        bgColor={isResults}
                        key={each.name}
                        onClick={() => this.onClickIcons(each.id)}
                        condition={each.path === path}
                      >
                        {each.icon && (
                          <StyleReactIcon
                            as={each.icon}
                            condition={each.path === path ? 'true' : 'false'}
                          />
                        )}
                        <p>{each.name}</p>
                      </LiNavContainer>
                    </LinkedStyle>
                  ))}
                </UlContainer>
                <ContactContainer>
                  <ContactHead>CONTACT US</ContactHead>
                  <ContactIcon>
                    <ContactLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <ContactLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <ContactLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </ContactIcon>
                  <ContactPara>
                    Enjoy! Now to see your channels and recommendations!
                  </ContactPara>
                </ContactContainer>
              </HomeNavContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

Header.contextType = WatchContext

export default withRouter(Header)
