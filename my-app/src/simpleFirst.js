import React from 'react';


const SimpleFirst = (props) => {
    console.log(props);
    const { data, deletePerson } = props;
    const list = data.map(person => {
        if (person.age >= 23) {
            return (
                <div key={person.id}>
                    <div>Name:{person.name}</div>
                    <div>Age:{person.age}</div>
                    <div>Designation:{person.designation}</div>
                    <button onClick={() => deletePerson(person.id)}>Delete Person</button>
                    <hr />
                </div>
            )
        } else {
            return null;
        }
    })
    return (
        <div className="person-list">
            {list}
        </div>
    )

}

export default SimpleFirst;