import { CategoryForm } from "../../../components/form/category.form";
import { useRouter } from 'next/router';
import { useState } from 'react';
import { networkErrorHandeller } from "../../../utils/helpers";

const CreateUpdate: React.FC = (): JSX.Element => {
      const router = useRouter();
      const [isLoading, setLoading] = useState<boolean>(false);

      /* Handle login */
      const handleCategoryForm = async (data: any) => {
        try {
          setLoading(true);
            const response = await Net.Authentication.login(data);
            if (response && response.status === 200) {
              await setToken(response.data.token);
              router.push("/dashboard");
            }
            setLoading(false);
        } catch (error: any) {
          if (error) {
            setLoading(false);
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
