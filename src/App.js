
import{BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
export const url='https://node-password-new.onrender.com'
// export const url='https://localhost:8000'
function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='*' element={<Navigate to='/login'/>}/>
  
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
