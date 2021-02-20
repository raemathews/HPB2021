import { useState, useEffect } from 'react';
import LineChart from 'react-linechart';


function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {

        function handleResize() {

            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export default function LineGraph({ dataPoints }) {
    const data = [
        {
            color: "#087096",
            points: dataPoints
        }
    ];

    const size = useWindowSize();

    return (
        <LineChart
            width={size.width / 2 }
            height={size.height / 2 }
            data={data}
        />

    );
}