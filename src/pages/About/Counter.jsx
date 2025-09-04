
import { useEffect, useRef, useState } from "react";



function Counter({ target, duration = 2000,suffix = "+" }) {
    const [value, setValue] = useState(0);
    const [hasRun, setHasRun] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const currentValue = ref.current;
        if (!currentValue) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasRun) {
                setHasRun(true);

                let start = 0;
                const stepTime = Math.abs(Math.floor(duration / target));
                const timer = setInterval(() => {
                    start += 1;
                    setValue(start);
                    if (start >= target) {
                        clearInterval(timer);
                    }
                }, stepTime);

                observer.unobserve(currentValue);
            }
        });

        observer.observe(currentValue);
        return () => observer.disconnect();
    }, [target, duration, hasRun]);


   return <h1 ref={ref}>{value}{suffix}</h1>;
}

export default Counter;