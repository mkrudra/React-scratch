import React from 'react';

class Child extends React.Component {
    
  render() {
    let mydata = null;
    if (this.props.childData != null) {
      mydata = this.props.childData.data.map((data) => {
        console.log("data = ", data);
        return (
          <ul key={data.id}>
            <li className="flex"><strong>Name:</strong> {data.name}</li>
            <li className="flex"><strong>User Name:</strong> {data.username}</li>
            <li className="flex"><strong>User Email:</strong> {data.email}</li>
            <li className="flex"><strong>User Address:</strong>
              <ul>
                <li style={{ display: 'flex' }}><strong style={{ width: '80px' }}>Street:</strong> {data.address.street}</li>
                <li style={{ display: 'flex' }}><strong style={{ width: '80px' }}>Suite:</strong> {data.address.suite}</li>
                <li style={{ display: 'flex' }}><strong style={{ width: '80px' }}>Zipcode:</strong> {data.address.zipcode}</li>
                <li style={{ display: 'flex' }}><strong style={{ width: '80px' }}>City:</strong> {data.address.city}</li>
              </ul>
            </li>
            <li className="flex"><strong>User Company:</strong>
              <ul>
                <li style={{ display: 'flex' }}><strong style={{ width: '120px' }}>Name:</strong> {data.company.name}</li>
                <li style={{ display: 'flex' }}><strong style={{ width: '120px' }}>CatchPhrase:</strong> {data.company.catchPhrase}</li>
                <li style={{ display: 'flex' }}><strong style={{ width: '120px' }}>Bs:</strong> {data.company.bs}</li>
              </ul>
            </li>
            <li style={{ display: 'flex' }}><strong style={{ width: '120px' }}>Website:</strong> {data.website}</li>
          </ul>
        );
      });
    }   
    return (
      <div>{mydata}</div>
    );
  }
}

export default Child;