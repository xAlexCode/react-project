import './App.css'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'


function App() {

  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
