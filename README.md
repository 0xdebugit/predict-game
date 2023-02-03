This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and used tailwind for styling

## Online Demo

The mock version of this UI is hosted at [https://predict-game.vercel.app/](https://predict-game.vercel.app/)

## Run Locally

**Setup REST API**

1.Run Python Flask REST API

```bash
python programming_exercises_full_stack.py 
```

Note : It runs default on port 5000

**Setup Front-end**

1.Switch to ~/predict-game directory by using command : cd {PATH}
 
2.Install Packages

```bash
npm install
```

3. Verify if flask is being served at port 5000, if not then update the port number in next.config.js file in the {destination} attribute

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Sample Result

Checkout two snapshot sample_1.png & sample_2.png