// import './App.css'
import './scss/main.scss'
import { AppProvider } from './context/AppContext'
import Accordion from './components/accordion/accordion'

function App() {



  return (
    <AppProvider>
      <>
        <Accordion />
      </>
    </AppProvider>
  )
}

export default App
