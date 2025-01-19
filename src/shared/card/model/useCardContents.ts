'use client';

import { useCallback, useEffect, useState } from "react";
import { SneakerItem } from "sneakerData";

const useCardContents = () => {
    const [contents, setContents] = useState<SneakerItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetchCardContents = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('/mocks/items.json');
            const data: SneakerItem[] = await response.json();
            setContents(data);
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
                console.log(error);
            } else {
                setError('예상하지 못한 에러가 발생했습니다.');
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCardContents();
    }, [fetchCardContents]);

    return {contents, loading, error};
};

export default useCardContents;