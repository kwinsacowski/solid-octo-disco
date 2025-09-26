function Ages (){
    const ages = [5, 12, 18, 24, 37];

    return (
        <ul>
            {ages.map ((age, index) => (<li key= {index}>{age}</li>))}
        </ul>
    )
}

export default Ages;