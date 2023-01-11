import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CategoryIndexNetwork, CategoryList } from "../../network/category.network";
import { PrimaryButton } from "../button";
import { TextInput, SingleSelect } from "../input";

type PropsTypes = {
    loading: boolean;
    onSubmit: (data: any) => void;
};

const SubCategoryForm: React.FC<PropsTypes> = (props: PropsTypes): JSX.Element => {
    const [category, setCategory] = useState([])

    /* category list */
    const fetchCategory = useCallback(async() => {
        const response = await CategoryList()
        if(response && response.status === 200){
            setCategory(response?.data?.data)
        }
    }, [category])

    useEffect(()=> {
        fetchCategory()
    },[])
    console.log('res', category);
    

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    /* Handle form submit */
    const onSubmit = (data: any) => props.onSubmit(data);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];

    return (

        <>
        <form action=""  onSubmit={handleSubmit(onSubmit)}>
            <SingleSelect
             label="Category Name"
             name="category"
             options={options}
             control={control}
             error={errors.name && errors.name.message}
             rules={{
                 required: "Category is required.",
                 pattern: {
                     message: "Invalid category.",
                 },
             }}
            ></SingleSelect>
            <TextInput
                label="SubCategory Name"
                name="name"
                type="text"
                placeholder="Subcategory name"
                className=""
                control={control}
                error={errors.name && errors.name.message}
                defaultvalue={""}
                rules={{
                    required: "Category name is required.",
                    pattern: {
                        message: "Invalid category name.",
                    },
                }}
            />


            <TextInput
                label="SubCategory icon"
                name="icon"
                type="text"
                placeholder="SubCategory icon"
                className=""
                control={control}
                error={errors.icon && errors.icon.message}
                defaultvalue={""}
                rules={{
                    required: "SubCategory icon is required.",
                    pattern: {
                        message: "Invalid SubCategory icon.",
                    },
                }}
            />


            <TextInput
                label="SubCategory image"
                name="banner_image"
                type="text"
                placeholder="SubCategory image"
                className=""
                control={control}
                error={errors.image && errors.image.message}
                defaultvalue={""}
                rules={{
                    required: "SubCategory image is required.",
                    pattern: {
                        message: "Invalid category image.",
                    },
                }}
            />

            <PrimaryButton name="Category submit"></PrimaryButton>
            </form>
        </>
    )
}
export default SubCategoryForm