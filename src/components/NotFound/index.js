import {Component} from 'react'
import WatchContext from '../../WatchContext'
import Header from '../Header'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHead,
  NotFoundPara,
} from './styledComponent'

class NotFound extends Component {
  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isResults} = value
          const notLogo = isResults
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          const notAlt = isResults ? 'not found' : 'not found'
          return (
            <>
              <Header />
              <NotFoundContainer bgColor={isResults}>
                <NotFoundImage src={notLogo} alt={notAlt} />
                <NotFoundHead>Page Not Found</NotFoundHead>
                <NotFoundPara>
                  we are sorry, the page you requested could not be found.
                </NotFoundPara>
              </NotFoundContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default NotFound
