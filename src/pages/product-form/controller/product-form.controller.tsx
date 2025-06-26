import { useLocation, useNavigate } from "react-router-dom";
import { ProductForm } from "../view/product-form.view";
import { useIcon } from "../../../hooks/use-icons";
import { useForm } from "react-hook-form";
import type { FormData, ProductFormMode } from "../types";
import React from "react";
import { useProducts } from "../../../hooks";
import { RoutesUrls } from "../../../utils/enums/routes-url";

export function ProductFormController() {
  const location = useLocation();
  const navigate = useNavigate();
  const editIcon = useIcon("product-form/edit.svg");
  const addIcon = useIcon("product-form/file-plus.svg");

  const { actions } = useProducts();

  const onSubmit = React.useCallback(
    async (formData: FormData) => {
      const body = {
        name: formData.name,
        description: formData.description,
        stock: Number(formData.stock),
        price: Number(formData.price),
      };
      try {
        await actions.createProduct(body);
        navigate(RoutesUrls.PRODUCT_LIST);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    },
    [actions, navigate]
  );

  const [formMode, setFormMode] = React.useState<ProductFormMode>({
    isEditMode: false,
    isAddMode: false,
  });

  const getFormMode = React.useCallback(() => {
    const pathname = location.pathname;
    const isEditMode = pathname.includes("/edit");
    const isAddMode = pathname.includes("/add");

    setFormMode({
      isEditMode,
      isAddMode,
    });
  }, [location.pathname]);

  const data = {
    name: "",
    category: "",
    description: "",
    price: 0,
    stock: 0,
    isProductActive: false,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: formMode.isEditMode
      ? {
          name: data.name,
          category: data.category,
          description: data.description,
          price: data.price.toString(),
          stock: data.stock.toString(),
        }
      : {
          name: "",
          category: "",
          description: "",
          price: "",
          stock: "",
        },
  });

  React.useEffect(() => {
    getFormMode();
  }, [getFormMode]);

  return (
    <ProductForm
      errors={errors}
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      isEditMode={formMode.isEditMode}
      titleIcon={formMode.isEditMode ? editIcon : addIcon}
    />
  );
}
