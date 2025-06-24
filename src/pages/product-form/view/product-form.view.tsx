import { Title } from "../../../components/title/index.component";
import { Form } from "../components/forms/index.component";
import type { ProductFormProps } from "../types";
import * as S from "./index.styles";

export function ProductForm({
  isEditMode,
  titleIcon,
  errors,
  handleSubmit,
  register,
}: Readonly<ProductFormProps>) {
  return (
    <S.ProductSection>
      <Title
        icon={titleIcon}
        title={isEditMode ? "Editar Produto" : "Cadastro de Produto"}
      />
      <Form
        isEditMode={isEditMode}
        handleSubmit={handleSubmit}
        errors={errors}
        register={register}
      />
    </S.ProductSection>
  );
}
