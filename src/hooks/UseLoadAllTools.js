import { useState } from 'react';
import { useQuery } from 'react-query';

const UseLoadAllTools = () => {
    // const [intervals, setIntervals] = useState(1000);
    const { isLoading, error, data: tools } = useQuery(['allToolsData'], () =>
        fetch('http://localhost:5000/alltools').then(res =>
            res.json()
        ),
        // {
        //     // Refetch the data every second
        //     refetchInterval: intervals,
        // }
    );
    return [tools, isLoading, error];
}

export default UseLoadAllTools;