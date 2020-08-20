
//Aula 1: requisicao ajax

/* 
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null);

xhr.onreadystatechange = function ()
{
    if(xhr === 4)
    {
        console.log(JSON.parse(xhr.responseText))
    }
} */

//Aula 2: Promises

/* var minhaPromise = function()
{
    return new Promise(function(resolve, reject)
    {
        xhr.open('GET', 'https://api.github.com/users/diego3g');
        xhr.send(null);

        xhr.onreadystatechange = function ()
        {
            if(xhr === 4)
            {
                if(xhr.status === 200)
                {
                    resolve(JSON.parse(xhr.responseText));
                }
                else
                {
                    reject('Erro na requisicao');
                }
            }
        } 
    
    });
}

minhaPromise()
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.warn(error)
    }); */

    //aula3
    axios.get('https://api.github.com/users/diego3g')
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.warn(error)
    });