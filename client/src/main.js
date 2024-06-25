export async function fetchData(route='', data={},methodType){
    const responce=await fetch('http://localhost://5000${route}',{
        method: methodType,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    //dealing with our responce from server
    if(responce.ok){
        return await responce.json();
    }else{
        throw await responce.json();
    }


}