import { useSyncExternalStore } from "react";

/**
 * Hydration-safe client-only flag.
 * Uses useSyncExternalStore to avoid mismatches.
 */
export function useMounted() {
  return useSyncExternalStore(
    () => () => { },
    () => true,
    () => false
  )
}