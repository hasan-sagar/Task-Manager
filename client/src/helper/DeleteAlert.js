import Swal from "sweetalert2";
import { DeleteTaskRequest } from "../apiRequest/APIRequest";

export default function DeletAlert(id) {
  return Swal.fire({
    title: "Sure? Want to Delete?",
    text: "You can't revert this option",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((res) => {
    if (res.isConfirmed) {
      return DeleteTaskRequest(id).then((deleteResult) => {
        return deleteResult;
      });
    }
  });
}
