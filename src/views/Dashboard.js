import { useContext } from 'react';
import { StoreContext } from '../store/store-context';

function Dashboard() {
  const [{ countries }] = useContext(StoreContext);
  if (!countries) {
    return null;
  }
  return (
    <div>
      {countries.map(country => <img src={`https://www.countryflags.io/${country.id.toLowerCase()}/flat/32.png`} key={country.id} alt={country.name} />)}
    </div>
  );
}

export default Dashboard;
