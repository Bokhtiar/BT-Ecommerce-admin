import React from "react";
import { useForm } from "react-hook-form";
import { CategorySearch } from "../../network/category.network";
import { SubCategorySearch } from "../../network/subCategory.network";
import { ICategory } from "../../types/category.types";
import { ISubCategory } from "../../types/subCategory.types";
import { networkErrorHandeller, ProductType } from "../../utils/helpers";
import { PrimaryButton } from "../button";
import { SearchableSelect, TextInput, SingleSelect } from "../input";

type PropsTypes = {
  loading: boolean;
  data?: ICategory | null;
  subCategoryData?: ISubCategory | null;
  onSubmit: (data: any) => void;
};

export const ProductForm: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* Handle search category */
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

  /* Handle search sub category */
  const SubCategoryHandleSearch = async (input: string) => {
    try {
      const results: any[] = [];

      const response = await SubCategorySearch(input);
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

  /* Handle form submit */
  const onSubmit = (data: any) => props.onSubmit(data);

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {/* category  */}
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

        {/* subCategory  */}
        <SearchableSelect
          label="Sub Category"
          name="subCategory"
          control={control}
          error={errors.subCategory && errors.subCategory.message}
          isClearable={true}
          placeholder="Select subcategory"
          rules={{ required: "Sub Category is required" }}
          defaultvalue={
            props.subCategoryData
              ? {
                  label: `${props.subCategoryData.name}`,
                  value: props.subCategoryData._id,
                }
              : null
          }
          onSearch={(inputData) => SubCategoryHandleSearch(inputData)}
        />

        {/* Job type */}
        <div>
          <SingleSelect
            label="Product type"
            name="is_product"
            control={control}
            error={errors.job_type && errors.job_type.message}
            defaultvalue={null}
            options={ProductType}
            isClearable={true}
            placeholder="Select type"
            rules={{
              pattern: {
                message: "Product type selecct.",
              },
            }}
          />
        </div>

        {/* product name  */}
        <TextInput
          label="Product Name"
          name="name"
          type="text"
          placeholder="Product name"
          className=""
          control={control}
          error={errors.name && errors.name.message}
          defaultvalue={""}
          rules={{
            required: "Product name is required.",
            pattern: {
              message: "Invalid product name.",
            },
          }}
        />

        {/* product sale price */}
        <TextInput
          label="Product sale price"
          name="sale_price"
          type="number"
          placeholder="Product sale price"
          className=""
          control={control}
          error={errors.sale_price && errors.sale_price.message}
          defaultvalue={""}
          rules={{
            required: "Product sale price is required.",
            pattern: {
              message: "Invalid product sale price.",
            },
          }}
        />

        {/* product regular price */}
        <TextInput
          label="Product regular Price"
          name="regular_price"
          type="number"
          placeholder="Product regular price"
          className=""
          control={control}
          error={errors.regular_price && errors.regular_price.message}
          defaultvalue={""}
          rules={{
            required: "Product regular price is required.",
            pattern: {
              message: "Invalid product regular price.",
            },
          }}
        />

        {/* product image */}
        <TextInput
          label="Product image"
          name="image"
          type="text"
          placeholder="Product image"
          className=""
          control={control}
          error={errors.image && errors.image.message}
          defaultvalue={""}
          rules={{
            required: "Product image is required.",
            pattern: {
              message: "Invalid product image.",
            },
          }}
        />

        {/* product description */}
        <TextInput
          label="Product description"
          name="description"
          type="text"
          placeholder="Product description"
          className=""
          control={control}
          error={errors.description && errors.description.message}
          defaultvalue={""}
          rules={{
            required: "Product description is required.",
            pattern: {
              message: "Invalid product description.",
            },
          }}
        />

        {/* product quantity */}
        <TextInput
          label="Product quantity"
          name="quantity"
          type="text"
          placeholder="Product quantity"
          className=""
          control={control}
          error={errors.quantity && errors.quantity.message}
          defaultvalue={""}
          rules={{
            required: "Product quantity is required.",
            pattern: {
              message: "Invalid product quantity.",
            },
          }}
        />

        {/* form submit button */}
        <PrimaryButton name="Product Create"></PrimaryButton>
      </form>
    </div>
  );
};
