import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CategoryIndexNetwork, CategoryList, CategorySearch } from "../../network/category.network";
import { networkErrorHandeller } from "../../utils/helpers";
import { PrimaryButton } from "../button";
import { TextInput, SearchableSelect } from "../input";

interface ICategory {
    _id: string;
    name: string;
}

type PropsTypes = {
    loading: boolean;
    data? : ICategory | null;
    onSubmit: (data: any) => void;
};

const SubCategoryForm: React.FC<PropsTypes> = (props: PropsTypes): JSX.Element => {
 
    /* Handle search */
    const handleSearch = async (input: string) => {
        try {
            const results: any[] = [];

            const response = await CategorySearch(input);
            if (response.status === 200) {
                const arrLenght = response.data.data.length;
    
                if (arrLenght > 0) {
                    for (let i = 0; i < arrLenght; i++) {
                        results.push({
                            value: response.data.data[i]._id,
                            label: `${response.data.data[i].name}`,
                        });
                    }
                }
            }

            return results;
        } catch (error: any) {
            if (error) {
                networkErrorHandeller(error);
                return [];
            }
        }
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    /* Handle form submit */
    const onSubmit = (data: any) => props.onSubmit(data);

    return (

        <>
            <form action="" onSubmit={handleSubmit(onSubmit)}>

                <SearchableSelect
                    label="Category"
                    name="category"
                    control={control}
                    error={errors.category && errors.category.message}
                    isClearable={true}
                    placeholder="Select category"
                    rules={{ required: "Category is required" }}
                    defaultvalue={
                        props.data
                            ? {
                                label: `${props.data.name}`,
                                value: props.data._id,
                            }
                            : null
                    }
                    onSearch={(inputData) => handleSearch(inputData)}
                />









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