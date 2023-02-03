import Head from "next/head";
import NavBar from '../components/NavBar';
import FeatureForm from "@/components/FeatureForm";

import { useState, useEffect } from "react";

export default function Game(){
       
    return(
        <div className="justify-center flex bg-white relative min-h-screen">
            <Head>
              <title>Predict Game</title>
            </Head>     

            <div className={`w-screen max-w-screen-sm md:max-w-screen-lg flex flex-col`}>
              <NavBar />

              <FeatureForm />
            </div>       
        </div>

    )
}