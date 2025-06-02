import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from '../pages/ItemList';
import ItemDetail from '../pages/ItemDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
