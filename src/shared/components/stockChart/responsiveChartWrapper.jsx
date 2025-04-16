import { useRef, useState, useEffect } from 'react';

const ResponsiveChartWrapper = ({ children }) => {
    const ref = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const resize = () => {
            if (ref.current) {
                setWidth(ref.current.offsetWidth);
            }
        };
        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <div ref={ref} style={{ width: '100%' }}>
            {width > 0 && children(width)}
        </div>
    );
}
export default ResponsiveChartWrapper;