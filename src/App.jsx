import { Routes, Route, Router } from '@solidjs/router'
import Articles from './components/Articles'
import Header from './components/Header'
import styles from './App.module.css'
import Navbar from './components/Navbar'
import Topics from './components/Topics'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" component={<Articles />} />
          <Route path="/:topic" component={<Topics />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
