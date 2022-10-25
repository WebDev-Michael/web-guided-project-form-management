import React from 'react'

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { values, update, submit } = props

  const onChange = evt => {
    const name = evt.target.name;
    const {value}= evt.target;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Username
              <input
                type='text'
                name="username"
                placeholder='type your username'
                value={values.username}
                onChange={onChange}
                maxLength='30'
              />
        </label>

        <label>Email
        <input
        type="email"
        name='email'
        placeholder="type your email"
        onChange={onChange}
        />
        </label>
       
        <label>Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">---Select a Role---</option> 
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
            <option value="Alumni">Alumni</option>
          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}
