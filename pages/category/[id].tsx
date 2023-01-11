import { useRouter } from "next/router";
import { useState, useCallback, useEffect } from 'react';
import { CategoryShowNetwork } from "../../network/category.network";
import { ICategory } from "../../types/category.types";



const CategoryShow: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  const _id = id;
  console.log(_id);

  const [category, setCategory] = useState<ICategory | null>(null);
  /* useCall back */
  const categoryFetchData = useCallback(async () => {
    const response = await CategoryShowNetwork({ _id });
    if (response && response.status === 200) {
      setCategory(response.data.data);
    }
  }, [category]);

  /* useEffect */
  useEffect(() => {
    categoryFetchData();
  }, []);

  return (
    <div>
      <img src={category?.banner_image} className="w-full h-96" alt="" />
      <div className="flex gape-4">
        <img src={category?.icon} alt="" />
        <h2>{category?.name}</h2>
      </div>
    </div>
  );
};
export default CategoryShow