import * as S from "./index.styles";
import type { FormProps } from "../../types";
import Button from "../../../../components/button/index.component";

export function Form({
  isEditMode,
  handleSubmit,
  register,
  errors,
}: Readonly<FormProps>) {
  return (
    <S.FormSection>
      <S.HeaderForm>
        <S.HeaderFormTitle>Dados do produto</S.HeaderFormTitle> |
        <S.HeaderFormDescription>
          O campo abaixo é obrigatório para o cadastro.
        </S.HeaderFormDescription>
      </S.HeaderForm>
      <S.Form onSubmit={handleSubmit}>
        <S.InputGroup>
          <S.Label htmlFor="name">
            Nome do produto <S.Required>*</S.Required>
          </S.Label>
          <S.Input
            {...register("name", { required: "Nome do produto é obrigatório" })}
            type="text"
            id="name"
            placeholder="Informe o nome do produto"
          />
          {errors.name && (
            <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
          )}
        </S.InputGroup>

        <S.InputGroup>
          <S.Label htmlFor="category">
            Categoria <S.Required>*</S.Required>
          </S.Label>
          <S.Select
            {...register("category", { required: "Categoria é obrigatória" })}
            id="category"
          >
            <option value="">Categoria do produto</option>
            <option value="eletronicos">Eletrônicos</option>
            <option value="roupas">Roupas</option>
            <option value="casa">Casa e Jardim</option>
            <option value="esportes">Esportes</option>
            <option value="livros">Livros</option>
          </S.Select>
          {errors.category && (
            <S.ErrorMessage>{errors.category.message}</S.ErrorMessage>
          )}
        </S.InputGroup>

        <S.InputGroup>
          <S.Label htmlFor="description">
            Descrição <S.Required>*</S.Required>
          </S.Label>
          <S.TextArea
            {...register("description", {
              required: "Descrição é obrigatória",
            })}
            id="description"
            placeholder="Descrição detalhada do produto"
            rows={4}
          />
          {errors.description && (
            <S.ErrorMessage>{errors.description.message}</S.ErrorMessage>
          )}
        </S.InputGroup>

        <S.InputRow>
          <S.InputGroup>
            <S.Label htmlFor="price">
              Preço <S.Required>*</S.Required>
            </S.Label>
            <S.Input
              {...register("price", {
                required: "Preço é obrigatório",
                pattern: {
                  value: /^\d+([.,]\d{1,2})?$/,
                  message: "Formato de preço inválido",
                },
              })}
              type="text"
              id="price"
              placeholder="R$ 0,00"
            />
            {errors.price && (
              <S.ErrorMessage>{errors.price.message}</S.ErrorMessage>
            )}
          </S.InputGroup>

          {isEditMode}

          <S.InputGroup>
            <S.Label htmlFor="stock">
              Estoque <S.Required>*</S.Required>
            </S.Label>
            <S.Input
              {...register("stock", {
                required: "Estoque é obrigatório",
                pattern: {
                  value: /^\d+$/,
                  message: "Deve ser um número inteiro",
                },
              })}
              type="text"
              id="stock"
              placeholder="0"
            />
            {errors.stock && (
              <S.ErrorMessage>{errors.stock.message}</S.ErrorMessage>
            )}
          </S.InputGroup>
        </S.InputRow>

        <S.ButtonGroup>
          <Button text="Cancelar" onClick={() => {}} />
          <Button text="Cadastrar" onClick={() => {}} />
        </S.ButtonGroup>
      </S.Form>
    </S.FormSection>
  );
}
