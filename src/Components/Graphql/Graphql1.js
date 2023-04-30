import React from 'react'
import { useQuery,  gql } from '@apollo/client';


const Api=gql`
  products(
    filter: { sku: { eq: "24-MB03" } }
  ) {
    items {
      name
      sku
    }
  }
}
function Graphql(){
  const{data, loading, error}=useQuery(Api);
}

export default Graphql;
    
  `
   




export default Graphql