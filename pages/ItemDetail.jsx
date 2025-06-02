import { useParams } from 'react-router-dom';
import { useItems } from '../hooks/useItems';

const ItemDetail = () => {
  const { id } = useParams();
  const { getItemById } = useItems();
  const item = getItemById(id);

  if (!item) return <p>Ítem no encontrado</p>;

  return (
    <div>
      <h2>Detalle del Ítem</h2>
      <p><strong>Nombre:</strong> {item.name}</p>
      <p><strong>Descripción:</strong> {item.description}</p>
    </div>
  );
};

export default ItemDetail;
