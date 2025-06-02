import { Link } from 'react-router-dom';
import { useItems } from '../hooks/useItems';
import LifecycleComponent from '../components/LifecycleComponent';

const ItemList = () => {
  const { getAllItems } = useItems();
  const items = getAllItems();

  return (
    <div>
      <h1>Lista de Ítems</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <LifecycleComponent />
    </div>
  );
};

export default ItemList;
