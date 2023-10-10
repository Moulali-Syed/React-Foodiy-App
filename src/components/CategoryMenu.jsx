import FoodData from '../data/FoodData';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const listUniqueCategory = () => {
    const uniqueCategories = [
      'All',
      ...new Set(FoodData.map((item) => item.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategory();
  }, []);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll lg:overflow-x-hidden scroll-smooth">
        {categories.map((category, index) => (
          <button
            onClick={() => dispatch(setCategory(category))}
            key={index}
            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
              selectedCategory === category && 'bg-green-500 text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
export default CategoryMenu;
