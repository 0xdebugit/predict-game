import { useState, useEffect } from "react";

import ResultTable from "./ResultTable";

export default function FeatureForm(){

    const labels = ['Rockstar', '2K', 'Zynga'];

    const [Records, setRecords] = useState([]);

    const [CurrentWord, setCurrentWord] = useState();
    const [Success, setSuccess] = useState(false);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
      setCurrentWord(getRandomInt(3));
    }, []);

    function getRandomInt(max) {
        const rndNumber = Math.floor(Math.random() * max);
        return rndNumber == CurrentWord ? getRandomInt(3) : rndNumber;
    }

    function setSuccessMsg(){
        setSuccess(true);
        setCurrentWord(getRandomInt(3));
        setTimeout(() => {
            setSuccess(false);
        }, 2000);
    }

    async function handleSubmit(event) {

        event.preventDefault();
        setLoading(true);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                feat1: event.target[0].value,
                feat2: event.target[1].value,
                feat3: event.target[2].value,
                feat4: event.target[3].value,
              })       
        };        

        try {          
        //   const response = await fetch('/predict', requestOptions);
        //   const {prediction} = await response.json();
        let prediction = Math.floor(Math.random() * 3);
  
          await new Promise(r => setTimeout(r, 2000)); //mock to simulate progress
  
          if(prediction.toLowerCase() == labels[CurrentWord].toLowerCase()){
              setSuccessMsg();
          }
  
          const data = {
              'last_attempt': new Date().toLocaleTimeString(), 
              'prediction': prediction, 
              'success': prediction.toLowerCase() == labels[CurrentWord].toLowerCase(),
              'features': `${event.target[0].value} - ${event.target[1].value} - ${event.target[2].value} - ${event.target[3].value}`
          }
  
          setRecords( [...Records.slice(-3), {...data}] );          
          
        } catch (error) {
          console.log(error.message);
        } finally {
          setLoading(false);
        }

        

    }
    
    const ChallengeContent = () => {
        if(Success){
            return (<div className="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 mt-5" role="alert">
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium">Success!</span> This combination is the right prediction for {Records.slice(-1)[0]['prediction']}.
                </div>
            </div>);        
        }else{
            return (<div className="mt-5">
                <div className="flex p-4 mb-4 text-lg text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800 justify-center">
                    <div>
                        <span className="font-medium">Challenge! </span> 
                        <span className="font-normal">Guess features for the label <span className="underline decoration-wavy">{labels[CurrentWord]}</span> </span>
                    </div>
                </div>                        
            </div>);            
        }
    }    
    
    
    return(
        <div className="p-4">

        <ChallengeContent />

            <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white mb-8">Feature Form</h5>
                <form onSubmit={handleSubmit} className="">
                    
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6">
                            <input type="number" max="9999999" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Feature 1</label>
                        </div>
                        <div className="relative z-0 w-full mb-6">
                            <input type="number" max="9999999" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Feature 2</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6">
                            <input type="number" max="9999999" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Feature 3</label>
                        </div>
                        <div className="relative z-0 w-full mb-6">
                            <input type="number" max="9999999" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Feature 4</label>
                        </div>
                    </div>           

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {
                        Loading ?
                        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>    
                        :      
                        <span>Submit</span>              
                        }
                        
                    </button>
                </form>           
            </div>


            <ResultTable Records={Records} />

        </div>

    )
}