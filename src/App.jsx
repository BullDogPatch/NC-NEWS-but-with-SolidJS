import Articles from './components/Articles'
import Header from './components/Header'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Articles />
    </div>
  )
}

export default App
