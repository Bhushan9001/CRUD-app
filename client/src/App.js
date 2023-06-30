import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreatBook from './Pages/CreatBook';
import BookList from './Pages/BookList';
import UpdateBook from './Pages/UpdateBook';
import Homepage from './Pages/Homepage';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';

function App() {
  return (<>
    <Routes>
      <Route path='/' element = {<Homepage />}/>
      <Route path='/createbook' element={<CreatBook />} />
      <Route path='/booklist' element={<BookList />} />
      <Route path='/updatebook/:id' element={<UpdateBook />}/>
      <Route path='/signup' element={ <Signup/>}/>
      <Route path='/signin' element={ <Signin/>}/>
    </Routes>

    {/* <Signup/> */}
   
    
    

  </>
  );
}

export default App;
