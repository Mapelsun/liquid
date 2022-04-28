import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Profile from './components/Profile'
import Settings from './components/Settings'
import Footer from './components/Footer'
import './App.scss'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route path='/'>
          <Home />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/settings'>
          <Settings />
        </Route>
        <Footer />
      </div>
    </Router>
  )
}

export default App

