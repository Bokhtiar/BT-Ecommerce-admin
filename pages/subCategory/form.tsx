import { useRouter } from "next/router";
import { useState } from "react";
import SubCategoryForm from "../../components/form/subCategory.form"
import { Toastify } from "../../components/toastify";
import { CategoryShowNetwork } from "../../network/category.network";
import { networkErrorHandeller } from "../../utils/helpers";

const SubCategoryFrom: React.FC = (): JSX.Element => {
    const router = useRouter();
    const [isLoading, setLoading] = useState<boolean>(false);
    /* Handle login */
    const handleSubCategoryForm = async (data: any) => {
        try {
            ///setLoading(true);
            const response = await CategoryShowNetwork(data);
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
        <>
            <SubCategoryForm loading={isLoading}
                onSubmit={(data) => handleSubCategoryForm(data)} ></SubCategoryForm>
        </>
    )
}
export default SubCategoryFrom