import React from "react";

// render data for each merchant
function Merchant({ props }) {
    return (
        <>
            {props.getMerchants.map((merchant) => {
                return <div key={merchant._id} className="card w-96 bg-base-100 shadow-xl mx-5 my-10">
                <figure><img src={merchant.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{merchant.business_name}</h2>
                  <p>{merchant.business_description}</p>
                </div>
              </div>

            })}
        </>

    )
}

export default Merchant;