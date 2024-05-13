import { useRouter } from 'next/router';

function useBack() {
    const router = useRouter();
    function back() {
        router.back();
    }
    return (
        { back }
    )
}

export default useBack
