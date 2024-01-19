import DrinkCategoryFilter from '@components/common/FilterBottomSheet/DrinkCategoryFilter';
import FoodCategoryFilter from '@components/common/FilterBottomSheet/FoodCategoryFilter';
import SortBy from '@components/common/FilterBottomSheet/SortBy';
import { MainStack } from '@stacks/StackFlow';

const Router = () => {
  return (
    <>
      <MainStack />
      <SortBy />
      <DrinkCategoryFilter />
      <FoodCategoryFilter />
    </>
  );
};

export default Router;
