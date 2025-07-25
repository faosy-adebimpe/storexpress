const formatLocalStorage = <T = unknown>(storage: string | null): T[] => {
    if (!storage) {
        return [];
    }

    return JSON.parse(storage) as T[];
};

export default formatLocalStorage;
