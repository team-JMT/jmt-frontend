import { motion } from 'framer-motion';
import { useAtom } from 'jotai';

import BlankIcon from '@assets/BlankIcon';
import { useMainFlow } from '@stacks/StackFlow';
import { foodCategoryState, drinkCategoryState, drinkToBoolean } from '@store/filterAtom';
import { BlankBox } from '@styles/pages/GroupDetail';
import BridgeApi from '@utils/Bridge.ts';

import { Restaurant } from '../../apis/Group/data/restaurant';
import { usePostRestaurantSearch } from '../../apis/Group/queries/usePostRestaurantSearch';

import PlaceCard from './PlaceCard';

interface Props {
  groupId: number;
}

const PostedPlace = ({ groupId }: Props) => {
  const { push } = useMainFlow();

  const [foodState] = useAtom(foodCategoryState);
  const [drinkState] = useAtom(drinkCategoryState);
  //const [sortState] = useAtom(sortByState);

  const { restaurant } = usePostRestaurantSearch(
    0,
    {
      userLocation: {
        x: '127.0596',
        y: '37.6633',
      },
      startLocation: {
        x: '125.0596',
        y: '35.6633',
      },
      endLocation: {
        x: '129.0596',
        y: '39.6633',
      },
      groupId: groupId,
      filter: {
        categoryFilter: foodState,
        isCanDrinkLiquor: drinkToBoolean(drinkState),
      },
    },
    [foodState, drinkState],
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className={'home-tab-container'}
      key={'ALL'}
    >
      <section className={'place-detail-section'}>
        <>
          {restaurant && restaurant.length !== 0 ? (
            <>
              {restaurant!.map((item: Restaurant) => (
                <PlaceCard data={item} key={item.id} />
              ))}
            </>
          ) : (
            <BlankBox>
              <BlankIcon />
              <div>아직 등록된 맛집이 없어요</div>
              <button onClick={() => BridgeApi.navigate('PlaceAdd', groupId)}>맛집 등록하기</button>
            </BlankBox>
          )}
        </>
      </section>
    </motion.div>
  );
};

export default PostedPlace;
