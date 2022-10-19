import React, {ChangeEvent, ChangeEventHandler} from 'react';
import {IUser} from "../models/models";

interface ISelectAuthor{
    usersName: Array<IUser>,
    onChangeAuthor: ChangeEventHandler
}

const SelectAuthor = ({usersName, onChangeAuthor}: ISelectAuthor) => {
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