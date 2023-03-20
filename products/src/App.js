import { Route, Routes} from 'react-router-dom';
import Product from './Product';
import Profile from './Profile';

function App() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile/>} />
      <Route exact path="/" element={<Product/>} />
    </Routes>
  );
}

export default App;
