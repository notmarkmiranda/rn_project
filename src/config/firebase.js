import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDBfqd0BPLILxFqQXKB1PymDY7UL9X9ElE',
  authDomain: 'poker-rank.firebaseapp.com',
  databaseURL: 'https://poker-rank.firebaseio.com',
  projectId: 'poker-rank',
  storageBucket: 'poker-rank.appspot.com',
  messagingSenderId: '698922052605'
}

firebase.initializeApp(config)

export default firebase
