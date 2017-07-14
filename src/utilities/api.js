var api= {
    getRovers(){
        var url = 'http://api.nasa.gov/mars-photos/api/v1/rovers?api_key=fqbSzq4qeImcvHxZQVIw3e4FnMQStOUVvfBlJIjG';
        return fetch(url).then((function(response){
            return response.json()
        })
    }
}

module.exports = api;