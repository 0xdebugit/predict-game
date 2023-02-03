export default function ResultTable( {Records} ) {
    return(
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Last {Records.length > 0 ? Records.length : ''} Predict
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Response
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Features
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Prediction
                        </th>                                                                  
                    </tr>
                </thead>
                <tbody>
                    {
                        Records.map((item, index) => {
                            return(
                                <tr className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700`} key={index}>
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.last_attempt}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.prediction}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.features}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.success ? 
                                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Pass</span> :
                                        <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">Failed</span> }
                                    </td>                                                                                          
                                </tr>
                            );
                        })
                    }

                    
                </tbody>
            </table>
            {
                Records.length == 0 &&
                <div className="h-32 text-center flex flex-col justify-center">
                    <div className="p-4 text-sm text-yellow-800 bg-yellow-200 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                        <span className="font-medium">No Recent Activity!</span> Submit the form to start the challenge.
                    </div>
                </div>                        
            }                    
        </div>          
    )
}