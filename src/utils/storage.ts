function makeStorage<T extends Record<string, any>>(initialValue: T) {
  let data = initialValue;

  return {
    setData: (nextData: T): void => {
      data = nextData;
    },
    getData: (): T => data,
  };
}

type LocationSearchData = {
  placeName: string;
  addressName: string;
  roadAddressName: string;
  x: string;
  y: string;
};
type NativeInfo = {
  accessToken: string;
  userPosition: LocationSearchData;
};

export const nativeInfo = makeStorage<NativeInfo>({
  accessToken: '',
  userPosition: {
    placeName: '',
    addressName: '',
    roadAddressName: '',
    x: '127.0596',
    y: '37.6633',
  }, //x,y값은 임시입니당
});
