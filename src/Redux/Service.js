

// function that gets product Data
export const gettingData = async() => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    
    // console.log(data);
    return data;
}