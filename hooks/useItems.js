import { items } from '../data/items';

export function useItems() {
  const getAllItems = () => items;

  const getItemById = (id) => items.find(item => item.id === id);

  return { getAllItems, getItemById };
}
