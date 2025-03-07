import Swal from 'sweetalert2';

export function AlertDefault({title, text, icon, timer}: any){

    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showConfirmButton: false,
      timer: timer,
      timerProgressBar: true,
    })

}
