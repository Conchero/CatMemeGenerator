import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './components/Homepage'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { CustomPage } from './components/CustomPage.jsx';
import { PageTracker } from './components/PageTracker.jsx';
import { FavoritePage } from './components/FavoritePage.jsx';
import { FavoriteDetails } from './components/FavoriteDetails.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <PageTracker />
      <nav>
        <Link to="/">Generate A Random Cat Meme</Link> | <Link to="/custom">Generate A Custom A Cat Meme</Link> | <Link to="/favorite"> Favorite Picture </Link> 
      </nav>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/custom" Component={CustomPage} />
        <Route path="/favorite" Component={FavoritePage} />
        <Route path="/favoriteDetails/:id" Component={FavoriteDetails} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
