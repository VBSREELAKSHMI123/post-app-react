import logo from './logo.svg';
import './App.css';
import AddPost from './components/AddPost';
import SearchPost from './components/SearchPost';
import TrackPost from './components/TrackPost';
import DeletePost from './components/DeletePost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewPost from './components/ViewPost';

function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path='/' element={<AddPost/>}/>
<Route path='/search' element={<SearchPost/>}/>
<Route path='/track' element={<TrackPost/>}/>
<Route path='/delete' element={<DeletePost/>}/>
<Route path='/view' element={<ViewPost/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
