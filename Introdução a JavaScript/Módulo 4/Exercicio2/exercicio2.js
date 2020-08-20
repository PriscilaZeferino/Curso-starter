var input = document.querySelector('#app input')
var search = document.querySelector('#app button').addEventListener('click', searchRepos);
var listElement = document.querySelector('#app ul');

var url_repos;
var repos = [];


function searchRepos()
{
    console.log('Busca pelos repositorios');

    var user = input.value;
    axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function(response)
    {
        if(response.request.readyState != 4)
        {
            var loadingElement = document.createElement('li');
            var loadingText = document.createTextNode('Carregando...');

            loadingElement.appendChild(loadingText);
            listElement.appendChild(loadingElement);
        }
        else 
        {
            listElement.removeChild(listElement.childNodes[0]);
            var obj = [];
            obj = response.data;

            for(var i = 0; i < obj.length; i++)
            {   
                var reposElement = document.createElement('li');
                var reposName = document.createTextNode(obj[i].name);

                reposElement.appendChild(reposName);
                listElement.appendChild(reposElement);
            }            
        }
    })
    .catch(function(error)
    {
        console.log(error);
    }); 
}


            
/* if(response.readyState != 4)
{
    var loadingElement = document.createElement('li');
    var loadingText = document.createTextNode('Carregando...');

    loadingElement.appendChild(loadingText);
    listElement.appendChild(loadingElement);
} */