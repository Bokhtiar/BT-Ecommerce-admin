import { useState } from "react";
import { useRouter } from "next/router";
import { CategoryForm } from "../../components/form/category.form";
import { networkErrorHandeller, setToken } from "../../utils/helpers";
import { CategoryCreateNetwork } from "../../network/category.network";
import { Toastify } from "../../components/toastify";

const CreateUpdate: React.FC = (): JSX.Element => {
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);

  /* Handle login */
  const handleCategoryForm = async (data: any) => {
    try {
      ///setLoading(true);
      const response = await CategoryCreateNetwork(data);
      console.log('response', response);
      
      if (response && response.status === 201) {
          console.log(response);
          Toastify.Success(response.data.message);
          router.push("/category");
      }
     // setLoading(false);
    } catch (error: any) {
      if (error) {
        //setLoading(false);
        networkErrorHandeller(error);
      }
    }
  };

  return (
    <CategoryForm
      loading={isLoading}
      onSubmit={(data) => handleCategoryForm(data)}
    />
  );
};
export default CreateUpdate;
