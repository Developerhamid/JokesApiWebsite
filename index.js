    const jokeBox = document.querySelector('#jokeBox');
    const btn = document.querySelector('#btn');


    const showJokes = async () =>{

        const setHeader = {
            headers:{
                Accept:'application/json'
            }
        }

        try{
            const res = await fetch('https://icanhazdadjoke.com',setHeader);
            const data = await res.json();
            jokeBox.innerHTML = data.joke;
        }catch(err){
            console.log(`The error is ${err}`);
        }
    }


    btn.addEventListener('click',showJokes);
    showJokes();