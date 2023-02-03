export default function ResultTable( {Records} ) {
    return(
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Last {Records.length > 0 ? Records.length : ''} Predict
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Response
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Features
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Prediction
                        </th>                                                                  
                    </tr>
                </thead>
                <tbody>
                    {
                        Records.map((item, index) => {
                            return(
                                <tr class={`bg-white border-b dark:bg-gray-800 dark:border-gray-700`} key={index}>
                                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.last_attempt}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.prediction}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.features}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.success ? 
                                        <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Pass</span> :
                                        <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">Failed</span> }
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
                    <div class="p-4 text-sm text-yellow-800 bg-yellow-200 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                        <span class="font-medium">No Recent Activity!</span> Submit the form to start the challenge.
                    </div>
                </div>                        
            }                    
        </div>          
    )
}