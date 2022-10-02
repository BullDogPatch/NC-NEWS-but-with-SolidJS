import { Routes, Route } from '@solidjs/router'
import Articles from './components/Articles'
import Header from './components/Header'
import styles from './App.module.css'
import Navbar from './components/Navbar'
import Topics from './components/Topics'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:topic" component={<Topics />} />
      </Routes>
    </div>
  )
}

export default App
