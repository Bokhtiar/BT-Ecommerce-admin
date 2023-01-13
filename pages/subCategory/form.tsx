import { useRouter } from "next/router";
import { useState } from "react";
import { Bradcrumbs } from "../../components/bradcrumbs";
import SubCategoryForm from "../../components/form/subCategory.form"
import { Toastify } from "../../components/toastify";
import { SubCategoryCreateNetwork } from "../../network/subCategory.network";
import { networkErrorHandeller } from "../../utils/helpers";

const SubCategoryFrom: React.FC = (): JSX.Element => {
    const router = useRouter();
    const [isLoading, setLoading] = useState<boolean>(false);

    /* Handle sub category store */
    const handleSubCategoryForm = async (data: any) => {
        const formData = {
            ...data,
            category: data.category.value,
        };

        try {
            ///setLoading(true);
            const response = await SubCategoryCreateNetwork(formData);
            if (response && response.status === 201) {
                console.log("success response", response);
                Toastify.Success(response.data.message);
                router.push("/subCategory");
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
            <Bradcrumbs page_title="SubCategory Create" another_page_link="/subCategory" another_page_title="subCategory List"></Bradcrumbs>
            <SubCategoryForm loading={isLoading}
                onSubmit={(data) => handleSubCategoryForm(data)} ></SubCategoryForm>
        </>
    )
}
export default SubCategoryFrom