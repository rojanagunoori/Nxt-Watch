import React from 'react'

const WatchContext = React.createContext({
  isResults: false,
  activeTab: 'Home',
  savedVideos: [],

  updateResults: () => {},
  changeActiveTab: () => {},
  addToSaveVideo: () => {},
  removeSavedVideos: () => {},
})

export default WatchContext
