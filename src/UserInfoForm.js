import React from "react";
import { withEditableUser } from "./withEditableUser";

export const UserInfoForm = withEditableUser(({ user, onChangeUser, onSaveUser, onResetUser }) => {

  const { name, age, hairColor } = user || {};

  return user ? (
    <>
      <label>
        Name:
        <input value={name} onChange={e => onChangeUser({ name: e.target.value })} />
      </label>
      <label>
        Age:
        <input value={age} onChange={e => onChangeUser({ age: e.target.value })} type="number" />
      </label>

      <label>
        hair color:
        <input value={hairColor} onChange={e => onChangeUser({ hairColor: e.target.value })} />
      </label>
      <button onClick={onResetUser}>Reset</button>
      <button onClick={onSaveUser}>Submit</button>
    </>
  ) : <p>Loading...</p>
}, '123');