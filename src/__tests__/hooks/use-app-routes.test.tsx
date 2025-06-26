import { renderHook } from "@testing-library/react";
import { useAppRoutes } from "../../hooks/use-app-routes";
import { RoutesUrls } from "../../utils/enums/routes-url";

jest.mock(
  "../../pages/product-list/controller/product-list.controller",
  () => ({
    ProductListController: () => (
      <div data-testid="product-list-controller">Product List</div>
    ),
  })
);

jest.mock(
  "../../pages/product-form/controller/product-form.controller",
  () => ({
    ProductFormController: () => (
      <div data-testid="product-form-controller">Product Form</div>
    ),
  })
);

describe("useAppRoutes", () => {
  it("should return an array of route configurations", () => {
    const { result } = renderHook(() => useAppRoutes());

    expect(Array.isArray(result.current)).toBe(true);
    expect(result.current).toHaveLength(6);
  });

  it("should contain all expected routes", () => {
    const { result } = renderHook(() => useAppRoutes());
    const routes = result.current;

    const expectedPaths = [
      RoutesUrls.BASE_URL,
      RoutesUrls.CONFIG,
      RoutesUrls.PRODUCT_LIST,
      RoutesUrls.PRODUCT_ADD,
      RoutesUrls.PRODUCT_EDIT,
      RoutesUrls.REPORTS,
    ];

    expectedPaths.forEach((path) => {
      expect(routes.find((route) => route.path === path)).toBeDefined();
    });
  });

  it("should have correct route structure", () => {
    const { result } = renderHook(() => useAppRoutes());
    const routes = result.current;

    routes.forEach((route) => {
      expect(route).toHaveProperty("path");
      expect(route).toHaveProperty("element");
      expect(route).toHaveProperty("title");
      expect(typeof route.path).toBe("string");
      expect(typeof route.title).toBe("string");
      expect(route.element).toBeDefined();
    });
  });

  it("should have correct titles for each route", () => {
    const { result } = renderHook(() => useAppRoutes());
    const routes = result.current;

    const expectedTitles = {
      [RoutesUrls.BASE_URL]: "Dashboard",
      [RoutesUrls.CONFIG]: "Configurações",
      [RoutesUrls.PRODUCT_LIST]: "Lista de Produtos",
      [RoutesUrls.PRODUCT_ADD]: "Adicionar Produto",
      [RoutesUrls.PRODUCT_EDIT]: "Editar Produto",
      [RoutesUrls.REPORTS]: "Relatórios",
    };

    Object.entries(expectedTitles).forEach(([path, expectedTitle]) => {
      const route = routes.find((r) => r.path === path);
      expect(route?.title).toBe(expectedTitle);
    });
  });

  it("should use ProductListController for list-based routes", () => {
    const { result } = renderHook(() => useAppRoutes());
    const routes = result.current;

    const listRoutes = [
      RoutesUrls.BASE_URL,
      RoutesUrls.CONFIG,
      RoutesUrls.PRODUCT_LIST,
      RoutesUrls.REPORTS,
    ];

    listRoutes.forEach((path) => {
      const route = routes.find((r) => r.path === path);
      expect(route?.element).toBeDefined();
      expect(typeof route?.element.type).toBe("function");
    });
  });

  it("should use ProductFormController for form-based routes", () => {
    const { result } = renderHook(() => useAppRoutes());
    const routes = result.current;

    const formRoutes = [RoutesUrls.PRODUCT_ADD, RoutesUrls.PRODUCT_EDIT];

    formRoutes.forEach((path) => {
      const route = routes.find((r) => r.path === path);
      expect(route?.element).toBeDefined();
      expect(typeof route?.element.type).toBe("function");
    });
  });

  it("should memoize the routes array", () => {
    const { result, rerender } = renderHook(() => useAppRoutes());
    const firstResult = result.current;

    rerender();
    const secondResult = result.current;

    expect(firstResult).toBe(secondResult);
  });

  it("should return the same structure when called multiple times", () => {
    const { result: result1 } = renderHook(() => useAppRoutes());
    const { result: result2 } = renderHook(() => useAppRoutes());

    expect(result1.current).toHaveLength(result2.current.length);

    result1.current.forEach((route1, index) => {
      const route2 = result2.current[index];
      expect(route1.path).toBe(route2.path);
      expect(route1.title).toBe(route2.title);
      expect(typeof route1.element).toBe(typeof route2.element);
    });
  });
});
