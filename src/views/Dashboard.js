import { useContext } from 'react';
import { StoreContext } from '../store/store-context';

function Dashboard() {
  const [{ countries }] = useContext(StoreContext);

  return (
    <div>
      {countries.toString()}
    </div>
  );
}

export default Dashboard;
