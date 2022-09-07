import React from 'react'

function AddProduct() {
  return (
    <div>
    <div className="form-floating mb-3 ">
    <input type="email" className="form-control-plaintext rounded" id="floatingInput" placeholder="name@example.com" />
    <label for="floatingInput">Email address</label>
  </div>

  <div className="form-floating">
  <input type="password" className="form-control-plaintext rounded" id="floatingPassword" placeholder="Password" />
  <label for="floatingPassword">Password</label>
</div>

  </div>
  )
}

export default AddProduct