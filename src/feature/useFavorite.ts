import { useEffect, useState } from "react";
import { outhAxios } from "config";
import { useAppDispatch, useAppSelector } from "store/store";
import { SetFavorite } from "store/userRedux";
import { UserRedux } from "type";

type severityAt = "error" | "warning" | "info" | "success";

const useFavorite = (productId: string) => {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.currentUser);
  useEffect(() => {
    user?.favorites !== undefined &&
      setIsLiked(user.favorites.includes(productId));
  }, [user?._id, productId]);

  const favoriteHandler = () => {
    try {
      outhAxios(user?.accessToken).put("/user/" + user?._id + "/favorite", {
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
