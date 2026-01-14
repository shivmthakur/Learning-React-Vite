import { useState } from 'react';

function FruitLists() {
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
    const [fruitList, setFruitList] = useState(fruits);
    
    return (
        <>
            <h2>Fruits List</h2>
            <ul>
                {fruitList.map((fruit, index) => {
                    return <li key={index}>{fruit}</li>;
                })}
            </ul>
            <button onClick={() => !fruitList.includes('Grapes') ? setFruitList([...fruitList, 'Grapes', 'IceApple']): setFruitList(fruitList)}>Click Here to Append New Fruits</button>
        </>
    );
}

export default FruitLists;