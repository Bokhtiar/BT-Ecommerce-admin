import { useRouter } from "next/router";
import { useState } from "react";
import { ProductForm } from "../../components/form/product.form"
import { Toastify } from "../../components/toastify";
import { Store } from "../../network/product.network";
import { networkErrorHandeller } from "../../utils/helpers";


const ProductCreate :React.FC = ():JSX.Element => {
    const router = useRouter();
    const [isLoading, setLoading] = useState<boolean>(false);

      /* Handle product store */
      const handleProductForm = async (data: any) => {
        const formData = {
            ...data,
            category: data.category.value,
            subCategory: data.subCategory.value
        };

        console.log("asdfasd",formData);
        

        try {
            setLoading(true);
            const response = await Store(formData);
            if (response && response.status === 201) {
                console.log("success response", response);
                Toastify.Success(response.data.message);
                router.push("/product");
            }
            setLoading(false);
        } catch (error: any) {
            if (error) {
                setLoading(false);
                networkErrorHandeller(error);
            }
        }
    };

    return(
        <>
            <ProductForm loading={isLoading}
                onSubmit={(data) => handleProductForm(data)}></ProductForm>
        </>
    )
}
export default ProductCreate