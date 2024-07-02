export async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:5000${route}`, {
        method: methodType,
        headers: {
            'Content-Type': 'application/json'
        },
        ...(Object.keys(data).length > 0 ? {body: JSON.stringify(data)}:{})
    });
    //dealing with our response from server
    if (response.ok) {
        return await response.json();
    } else {
        throw await response.json();
    }


}