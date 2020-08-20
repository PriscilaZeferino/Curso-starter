var checaIdade = function(idade)
{
    return new Promise(function(resolve, reject){
        if(idade >= 18)
        {
            resolve();
        }
        else
        {
            reject();
        }
    });
}

checaIdade(20)
    .then(function(){
        setTimeout(console.log('Maior que 18'), 2000);
    })
    .catch(function()
    {
        setTimeout(console.log('Menor que 18'), 2000);
    });

