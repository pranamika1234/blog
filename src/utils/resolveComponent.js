export function resolveComponent(mod) {
  if (!mod) {
    return null;
  }
  if (typeof mod === "function") {
    return mod;
  }
  if (typeof mod === "object" && "default" in mod) {
    return resolveComponent(mod.default);
  }
  return null;
}
