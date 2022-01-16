this.baseUrl = 'https://api.thecatapi.com/v1/';

function getAllCatBreeds(){
    return axios.get(`${this.baseUrl}breeds`);
}
