import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fecthCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCES,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage
});
