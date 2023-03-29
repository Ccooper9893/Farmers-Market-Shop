import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MERCHANTS } from "../utils/queries";
import Merchant from "../components/Merchant";
function MerchantPage() {

  const { loading, data } = useQuery(GET_MERCHANTS);

  // getMerchants[0].business_name
  // getMerchants[0].business_description
  // getMerchants[0].image
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {data ? (
        <Merchant props={data} />
      ) : null}
      {loading ? <h1>Loading...</h1> : null}
    </div>
  );
}
export default MerchantPage;
