import {useEffect, useState} from "react";

export function useDebounce<T>(value: T , delay= 800):T {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            const handler = setTimeout(() => {setDebouncedValue(value);}, delay);
            return () =>  clearTimeout(handler)
        },
        [value, delay]
    );
    return debouncedValue;
}