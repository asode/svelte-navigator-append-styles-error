import WrapRouter from "./WrapRouter.svelte";
import { render, RenderOptions } from "@testing-library/svelte";
import type { SvelteComponent } from "svelte";

/**
 * Test-render a component, that relies on some of svelte-navigator's
 * features, inside a Router.
 *
 * @param component The component you want to wrap in a Router
 * @param componentProps The props you want to pass to it
 * @param routerOptions Futher configuration (`onNavigate`,
 * `withRoute`, `initialPathname`)
 * @param options Options for testing library's `render` function
 */

const renderWithRouter = (
  component: typeof SvelteComponent,
  componentProps?: object,
  routerOptions?: Omit<RenderOptions, "queries">,
  options?: Omit<RenderOptions, "queries">
) =>
  render(WrapRouter, { component, componentProps, ...routerOptions }, options);

export default renderWithRouter;
