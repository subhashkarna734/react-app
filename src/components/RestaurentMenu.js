import  useRestaurentMenu  from '../utils/useRestaurentMenu';
import ItemList from './ItemList';
const RestaurentMenu = () => {
  let data = useRestaurentMenu();
  if (!data) return <h2>Loading...</h2>;
  return (
    <div className='justify-center'>
      <h1 >Restaurant Menu Page</h1>
      <ItemList restarentMenu = {data}/>
    </div>
  );
};
export default RestaurentMenu;
