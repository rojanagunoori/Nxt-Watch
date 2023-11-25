import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import WatchContext from './WatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isResults: false,
    activeTab: 'Home',
    savedVideos: [],
  }

  updateResults = () => {
    this.setState(prev => ({isResults: !prev.isResults}))
  }

  changeActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  addToSaveVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.find(each => each.id === video.id)
    if (index) {
      this.setState(prev => ({savedVideos: [...prev.savedVideos]}))
    } else {
      this.setState({savedVideos: [...savedVideos, video]})
    }
  }

  removeSavedVideos = id => {
    const {savedVideos} = this.state
    const updated = savedVideos.filter(each => each.id !== id)
    this.setState({savedVideos: updated})
  }

  render() {
    const {isResults, activeTab, savedVideos} = this.state

    return (
      <WatchContext.Provider
        value={{
          isResults,
          updateResults: this.updateResults,
          changeActiveTab: this.changeActiveTab,
          addToSaveVideo: this.addToSaveVideo,
          removeSavedVideos: this.removeSavedVideos,
          activeTab,
          savedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        </Switch>

        <Route path="/bad-path" component={NotFound} />
      </WatchContext.Provider>
    )
  }
}

export default App
