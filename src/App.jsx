import { Routes, Route, Router } from '@solidjs/router'
import Articles from './components/Articles'
import Header from './components/Header'
import styles from './App.module.css'
import Navbar from './components/Navbar'
import Topics from './components/Topics'
// import Blog from './components/Blog'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" component={Articles} />
          <Route path="/articles/:topic" component={Topics} />
          {/* <Route path="/blog/:category/:id" element={Blog} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
