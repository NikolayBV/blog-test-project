import React from 'react';

const SelectAuthor = ({usersName, onChangeAuthor}) => {
  return (
    <div>
        <select onChange={onChangeAuthor}>
          <option value='Anonumus'>Select author</option>
          {
            usersName.map((item) => {
              return <option key={item.id} value={item.name} placeholder={'Select author'}>-{item.name}</option>
            })
          }
        </select>
    </div>
  );
};

export default SelectAuthor;