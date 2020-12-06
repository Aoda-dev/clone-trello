import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import firebase from 'firebase/app'

import 'firebase/analytics'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA7yYX44D8IkrcCdClrhK0mxz2B91kOCuU',
  authDomain: 'trello-e73bd.firebaseapp.com',
  databaseURL: 'https://trello-e73bd-default-rtdb.firebaseio.com',
  projectId: 'trello-e73bd',
  storageBucket: 'trello-e73bd.appspot.com',
  messagingSenderId: '695558317459',
  appId: '1:695558317459:web:6769ef5cc63d6996a6b466',
  measurementId: 'G-YEPPQX27WJ',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
