import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/store";
import { SetFavorite } from "store/userRedux";
import useTokenRequst from "feature/useTokenRequst";

const useFavorite = (productId: string) => {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.currentUser);
  const api = useTokenRequst();
  useEffect(() => {
    user?.favorites !== undefined &&
      setIsLiked(user.favorites.includes(productId));
  }, [user?._id, productId]);

  const favoriteHandler = () => {
    try {
      api.put("/user/" + user?._id + "/favorite", {
        productId: productId,
      });
      dispatch(SetFavorite(productId));
      setIsLiked(!isLiked);
    } catch (err) {
      console.log(err);
    }
  };
  return { isLiked, favoriteHandler };
};

export default useFavorite;
