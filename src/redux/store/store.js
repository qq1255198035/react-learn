import { createStore } from 'redux'
import reducer from './../reducer/reducer'

export default (prevState) => createStore(reducer,prevState)