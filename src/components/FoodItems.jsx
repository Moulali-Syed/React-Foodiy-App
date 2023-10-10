import FoodCard from './FoodCard';
import FoodData from '../data/FoodData';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
const FoodItems = () => {
  const handleToast = (name) => {
    toast.success(`Added ${name} to cart`);
  };
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === 'All') {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            rating={food.rating}
            img={food.img}
            price={food.price}
            desc={food.desc}
            category={food.category}
            handleToast={handleToast}
          />
        ))}
        {/* {FoodData.map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              rating={food.rating}
              img={food.img}
              price={food.price}
              desc={food.desc}
              category={food.category}
              handleToast={handleToast}
            />
          );
        })} */}
      </div>
    </>
  );
};
export default FoodItems;
