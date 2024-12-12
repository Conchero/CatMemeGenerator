import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './components/Homepage'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { TagPage } from './components/TagPage.jsx';
import { CustomPage } from './components/CustomPage.jsx';
import { CatMemeImage } from './components/CatMemeImage.jsx';
import { GenerateButton } from './components/GenerateButton.jsx';
import { SizeMatters } from './components/SizeMatters.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <nav>
        <Link to="/">Generate A Random Cat Meme</Link> | <Link to="/tag">Generate A Specific Cat Meme</Link> | <Link to="/custom">Generate A Custom A Cat Meme</Link> | <Link to="/small">Small Size Only</Link> | <Link to="/medium">Medium Size Only</Link> 
      </nav>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/tag" Component={TagPage} />
        <Route path="/custom" Component={CustomPage} />
        <Route path="/:size" Component={SizeMatters} />
      </Routes>

      <GenerateButton />
      <CatMemeImage />
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
