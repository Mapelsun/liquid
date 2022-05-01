import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/settings'>
            <Settings />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App

