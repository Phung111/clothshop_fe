import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const useAlert = () => {
  const navigate = useNavigate()

  const alert403 = () => {
    Swal.fire({
      title: 'Access Denied',
      text: 'You need to log in',
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'To Login',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login')
      }
    })
  }

  const alert404 = () => {
    Swal.fire({
      title: 'Page Not Found',
      text: 'The page you are looking for does not exist.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Go back',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(-1)
      }
    })
  }

  return { alert403, alert404 }
}

export default useAlert
