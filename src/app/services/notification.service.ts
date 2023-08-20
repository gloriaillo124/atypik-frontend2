import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private router : Router) { }
   
  showSuccessLogin(message: string, title: string, role: string){
    Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'Accéder à votre espace',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        if (role=="ROLE_ADMIN") {
          //console.log(role)
          this.router.navigate(['/administrateur'])
        } else {
          if (role=="ROLE_CLIENT") {
            //console.log(role)
            this.router.navigate(['/client'])
          } else {
            //console.log(role)
            this.router.navigate(['/client-partenaire'])
          }
        }
        
      }
    });
    //Swal.fire('Hi', 'We have been informed!', 'success');
    // Swal.fire({
    //   title: title,
    //   text: message,
    //   icon: 'success',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes, go ahead.',
    //   cancelButtonText: 'No, let me think',
    // }).then((result) => {
    //   if (result.value) {
    //     Swal.fire('Removed!', 'Product removed successfully.', 'success');
    //   } else if (result.dismiss === Swal.DismissReason.cancel) {
    //     Swal.fire('Cancelled', 'Product still in our database.)', 'error');
    //   }
    // });
  }

  showSuccess(message: string, title: string){
    Swal.fire(title, message, 'success');
  }
   
  showError(message: string, title: string){
    Swal.fire(title, message, 'error');
  }
   
  showInfo(message: string, title: string){
    Swal.fire(title, message, 'info');
  }
   
  showWarning(message: string, title: string){
    Swal.fire(title, message, 'warning');
  }
}
