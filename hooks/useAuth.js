import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState({ name: 'Usuario', loggedIn: true });

  const logout = () => {
    console.log('Cerrando sesión...');
    setUser({ name: '', loggedIn: false });
  };

  return { user, logout };
}
