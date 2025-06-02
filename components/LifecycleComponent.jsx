import { useEffect, useState } from 'react';

const LifecycleComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('🔵 Componente montado');

    return () => {
      console.log('🔴 Componente desmontado');
    };
  }, []);

  useEffect(() => {
    console.log('🟡 Componente actualizado. Count:', count);
  }, [count]);

  return (
    <div>
      <p>Ciclo de vida - contador: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Incrementar</button>
    </div>
  );
};

export default LifecycleComponent;
