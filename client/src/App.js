import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreatBook from './Pages/CreatBook';
import BookList from './Pages/BookList';
import UpdateBook from './Pages/UpdateBook';
import Homepage from './Pages/Homepage';

function App() {
  return (<>
    <Routes>
      <Route path='/' element = {<Homepage />}/>
      <Route path='/createbook' element={<CreatBook />} />
      <Route path='/booklist' element={<BookList />} />
      <Route path='/updatebook/:id' element={<UpdateBook />}/>
    </Routes>
    

  </>
  );
}

export default App;
