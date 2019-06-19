import Axios from "axios";
const apiEndpoint = "localhost:8080/api/capacities";
export async function addCapacity(data) {
  const { data: capacity } = await Axios.post(apiEndpoint, data);
  console.log(capacity);
}
