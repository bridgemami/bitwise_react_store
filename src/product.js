export default async function product(id) {
    try{
        let api = await fetch(`https://fakestoreapi.com/products/${id}`);
        // console.log(api);
        return api
    }
    catch(e){
        console.error(e);
    }
}