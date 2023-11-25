import {StyleLoaderContainer, LoaderElement} from './styledComponent'
import WatchContext from '../../WatchContext'

const LoaderContainer = () => (
  <WatchContext.Consumer>
    {value => {
      const {isResults} = value
      return (
        <StyleLoaderContainer data-testid="loader" bgColor={isResults}>
          <LoaderElement
            color="#4f46e5"
            height={50}
            width={50}
            type="ThreeDots"
          />
        </StyleLoaderContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default LoaderContainer
