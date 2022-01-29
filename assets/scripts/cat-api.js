this.baseUrl = 'https://api.thecatapi.com/v1/';

async function getAllCatBreeds(){
    let response = null;
    try {
        response = await axios.get(`${this.baseUrl}breeds`);
    }
    catch (error){
        console.error(error);
    }

    return response;
}
