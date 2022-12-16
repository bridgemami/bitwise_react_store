 export default async function store () {
    try{
        let api = await fetch('https://fakestoreapi.com/products');
        // console.log(api);
        return api
    }
    catch(e){
        console.error(e);
    }
}
