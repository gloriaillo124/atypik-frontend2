import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.models';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';
import { NotificationService } from 'src/app/services/notification.service';
import {UrlApi} from '../../../services/routeApi';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {

  urlImage: string = UrlApi;
  userListAdmins!: UserModel[];
  userListClients!: UserModel[];
  userListPartenaires!: UserModel[];

  constructor(
    private notifyService : NotificationService,
    private adminService: AdminserviceService,
  ) { }

  ngOnInit(): void {

    this.getAllAdmin();

    this.getAllClients();

    this.getAllPartenaires();

  }

  getAllAdmin(){
    this.adminService.getUsersAllAdmin().subscribe(
      adminLists=> {
        this.userListAdmins = adminLists
      }
    );
  }

  getAllClients(){
    this.adminService.getUsersAllClients().subscribe(
      clientLists=> {
        this.userListClients = clientLists
      }
    );
  }

  getAllPartenaires(){
    this.adminService.getUsersAllPartenaires().subscribe(
      partenaireLists=> {
        this.userListPartenaires = partenaireLists
      }
    );
  }

  onDeleteClient(user: UserModel){
    const id = user.id!
    Swal.fire({
      title: 'Voulez-vous vraiment supprimer',
      text: `${user.nom} ${user.prenom}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      if (result.value) {
        this.adminService.deleteUser(id).subscribe(
          (response: any)=>{
            if (response.status=='1') {
              this.notifyService.showSuccess('Suppeimer!', 'Supprimer avec success.');
              this.getAllClients();
            }
          }
        )
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.notifyService.showError('Annuler', 'Suppression annuler');
      }
    });
    
  }

  onDeletePartenaire(user: UserModel){
    const id = user.id!
    Swal.fire({
      title: 'Voulez-vous vraiment supprimer',
      text: `${user.nom} ${user.prenom}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      if (result.value) {
        this.adminService.deleteUser(id).subscribe(
          (response: any)=>{
            if (response.status=='1') {
              this.notifyService.showSuccess('Suppeimer!', 'Supprimer avec success.');
              this.getAllPartenaires();
            }
          }
        )
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.notifyService.showError('Annuler', 'Suppression annuler');
      }
    });
  }

  onDeleteAdmin(user: UserModel){
    const id = user.id!
    Swal.fire({
      title: 'Voulez-vous vraiment supprimer',
      text: `${user.nom} ${user.prenom}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      if (result.value) {
        this.adminService.deleteUser(id).subscribe(
          (response: any)=>{
            if (response.status=='1') {
              this.notifyService.showSuccess('Suppeimer!', 'Supprimer avec success.');
              this.getAllAdmin();
            }
          }
        )
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.notifyService.showError('Annuler', 'Suppression annuler');
      }
    });
  }

}
