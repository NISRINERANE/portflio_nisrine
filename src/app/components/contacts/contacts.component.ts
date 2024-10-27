import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'; // Importation de SweetAlert2

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'], // Corrigez 'styleUrl' en 'styleUrls'
})
export class ContactsComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  sendEmail(event: Event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: 'Nisrine', // Nom que vous souhaitez utiliser dans l'e-mail
    };

    console.log(templateParams);

    emailjs
      .send('service_fiqmciv', 'template_j5psaic', templateParams, 'geYbiBvPoCbyg_058')
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          // Afficher une alerte de succès avec SweetAlert2
          Swal.fire({
            title: 'Email envoyé!',
            text: 'Votre message a été envoyé avec succès.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
        },
        (error) => {
          console.error('Failed to send email. Error:', error);
          // Afficher une alerte d'erreur avec SweetAlert2
          Swal.fire({
            title: 'Erreur!',
            text: 'Échec de l\'envoi de l\'email. Veuillez réessayer plus tard.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      );
  }
}
