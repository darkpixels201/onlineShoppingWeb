import React from 'react'

function AddCategory() {
  return (
    <section id="category_area" className="ptb-50">
      <div className="container">
      {/* <div className="row"> */}
      <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div className="account_form ">
                <h3>Add Category</h3>
                <form 
                // onSubmit={submitHandler}
                >
                <div className="default-form-box">
              <input
              type="text"
              placeholder="Enter Category"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="rounded" required />
               </div>
      </form>
      <div style={{marginTop: 29, marginLeft: 7}}>
            <button className="theme-btn-one btn-black-overlay btn_sm rounded" type="submit">Add</button>
      </div>
      {/* </div> */}
      </div>
      </div>
      </div>
    </section>
  )
}

export default AddCategory