import React, { MutableRefObject, RefCallback } from 'react';

/**
 * Represents a React ref object that can be one of:
 * - A function ref
 * - A mutable ref object
 * - null
 *
 * @template T - The type of the referenced value
 *
 * @example
 * ```tsx
 * // Function ref
 * type Ref = (instance: HTMLDivElement | null) => void;
 *
 * // Mutable ref object
 * type Ref = MutableRefObject<HTMLDivElement | null>;
 *
 * // Null
 * type Ref = null;
 * ```
 */
type Ref<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;

/**
 * A custom hook that merges multiple React refs into a single ref callback.
 * This is useful when you need to pass multiple refs to a single element,
 * such as when combining a forwarded ref with a local ref.
 *
 * @template T - The type of the referenced value (e.g., HTMLDivElement)
 * @param {...Ref<T>[]} refs - Array of refs to merge
 * @returns {RefCallback<T> | null} A callback ref that updates all provided refs,
 *                                 or null if all input refs are null
 *
 * @example
 * ```tsx
 * // Combining multiple refs
 * const Component = React.forwardRef<HTMLDivElement>((props, forwardedRef) => {
 *   const localRef = useRef<HTMLDivElement>(null);
 *   const mergedRef = useMergedRef(localRef, forwardedRef);
 *
 *   return <div ref={mergedRef}>Content</div>;
 * });
 *
 * // Using with multiple local refs
 * const MyComponent = () => {
 *   const firstRef = useRef<HTMLDivElement>(null);
 *   const secondRef = useRef<HTMLDivElement>(null);
 *   const combinedRef = useMergedRef(firstRef, secondRef);
 *
 *   return <div ref={combinedRef}>Content</div>;
 * };
 * ```
 *
 * @remarks
 * - The hook memoizes the merged ref callback to maintain referential stability
 * - Returns null if all provided refs are null
 * - Supports both function refs and object refs
 * - Updates all refs simultaneously when the referenced value changes
 *
 * @see {@link https://react.dev/learn/referencing-values-with-refs React Refs Documentation}
 */

export const useMergedRef = <T>(...refs: Ref<T>[]): RefCallback<T> | null => {
  return React.useMemo(() => {
    // Return null if all refs are null
    if (refs.every((ref) => ref == null)) {
      return null;
    }

    // Return a callback that updates all refs
    return (value: T | null) => {
      refs.forEach((ref) => {
        if (typeof ref === 'function') {
          // Handle function refs
          ref(value);
        } else if (ref != null) {
          // Handle object refs
          (ref as MutableRefObject<T | null>).current = value;
        }
      });
    };
  }, [...refs]); // Only recreate callback if refs array changes
};
