import {
  ErrorContainer,
  ErrorImage,
  ErrorHead,
  ErrorPara,
  ErrorButton,
} from './styledComponents'

import WatchContext from '../../WatchContext'

const ErrorMessage = props => (
  <WatchContext.Consumer>
    {value => {
      const {isResults} = value
      const {onClickRetry} = props

      const url = isResults
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

      const onClickRetryButton = () => {
        onClickRetry()
      }
      return (
        <ErrorContainer bgColor={isResults}>
          <ErrorImage src={url} alt="failure view" />
          <h1>Oops! Something Went Wrong</h1>
          <ErrorPara>
            We are having some trouble to complete your request. Please try
            again.
          </ErrorPara>
          <ErrorButton type="button" onClick={onClickRetryButton}>
            Retry
          </ErrorButton>
        </ErrorContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default ErrorMessage
