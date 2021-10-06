import React, { Component } from "react";

class StandardForm extends Component {
  render() {
    return (
      <div>
        <h5>Standard Form</h5>

        <form>
          {/* susername */}
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' className='form-control' id='username' />
          </div>

          {/* username */}
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' className='form-control' id='email' />
          </div>

          {/* Password */}
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' className='form-control' id='password' />
          </div>
          {/*Confirm Password */}
          <div className='form-group'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              className='form-control'
              id='confirmPassword'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default StandardForm;
