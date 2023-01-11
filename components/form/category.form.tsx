import { TextInput } from "../input";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../button";

type PropsTypes = {
  loading: boolean;
  onSubmit: (data: any) => void;
};

export const CategoryForm: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* Handle form submit */
  const onSubmit = (data: any) => props.onSubmit(data);

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Category Name"
          name="name"
          type="text"
          placeholder="category name"
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
          label="Category icon"
          name="icon"
          type="text"
          placeholder="category icon"
          className=""
          control={control}
          error={errors.icon && errors.icon.message}
          defaultvalue={""}
          rules={{
            required: "Category icon is required.",
            pattern: {
              message: "Invalid category icon.",
            },
          }}
        />

        <TextInput
          label="Category image"
          name="image"
          type="text"
          placeholder="category image"
          className=""
          control={control}
          error={errors.image && errors.image.message}
          defaultvalue={""}
          rules={{
            required: "Category image is required.",
            pattern: {
              message: "Invalid category image.",
            },
          }}
        />

        <PrimaryButton name="Category submit"></PrimaryButton>
      </form>
    </div>
  );
};
