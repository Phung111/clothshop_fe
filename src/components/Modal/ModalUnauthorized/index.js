import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function ModalUnauthorized() {
  const navigate = useNavigate()

  useEffect(() => {
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
  }, [])
  return null
}
