import React from 'react'
import './App.css'
import DeliveryPicker from './components/DeliveryPicker'
import { Provider } from 'react-redux'
import { initStore } from './store'

function App() {
  const store = initStore()
  return (
    <div className="App">
      <Provider store={store}>
        <DeliveryPicker />
      </Provider>
    </div>
  )
}

export default App
