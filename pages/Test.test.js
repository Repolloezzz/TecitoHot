import { gql, useQuery } from "@apollo/client";
const getMatters = gql`
  query matters {
    name
  }
`;
export default function Test() {
  const { data, loading, error } = useQuery(getMatters);
  if(error) return(<div>Error</div>)
  if(loading) return(<div>Cargando</div>)
  return(
    <div>Se obtuvo</div>
  )
}
