import React from 'react'
import { Provider } from 'react-redux'
import { initStore } from './store'
import GroceriesList from './scenes/GroceriesList'

function App() {
  const store = initStore()

  return (
    <Provider store={store}>
      <GroceriesList />
    </Provider>
  )
}

export default App
