# **Fisa cerintelor**
##  Modulul Integrare
_ Grupa:B1 Anul:2_
## Cuprins
1. Descriere
1. Actori & Obiective
1. Scenarii de utilizare

## 1. Descriere

   Proiectul constă într-o aplicație web, prin intermediul căreia, absolvenții de liceu pot să depună candidatura la admiterea de la Facultatea de Informatica. De asemenea, aplicația va permite și înscrierea pentru studiile de master.

## 2. Actori & Obiective
- ### Utilizatorul
Absolvent de liceu, sau licențiat într-un domeniu, ce se va putea înscrie online pentru admitere sau master.
- ### Clientul
Secretariatul facultații sau profesorii. Ei vor putea gestiona candidații pentru admitere sau înscriere la master, precum și gestionarea rezultatelor admiterii.
- ### Serverul
Va oferi rapid informații din baza de date și va ajuta la gestionarea formularelor de înscriere depuse de către candidați ( utilizatori ), precum și rezultatele admiterii.
- ### Administratorul serverului
Va afișa informații cu privire la susținerea examenului, rezultatele, și anunțuri de interes pentru utilizatori.

## 3. Scenarii de utilizare

- ### Solicitarea informațiilor de către utilizator
Utilizatorul poate vizualiza lista cu informații legate de admitere, cerințele minime de depunere a unui dosar de înscriere online și detalii despre examen. De asemenea, el poate cere informații suplimentare, apelând sau trimițând un mail la secretariatul facultății, datele de contact regăsindu-se tot pe pagina web.

- ### Completarea formularului de înscriere la examen
Utilizatorul completează un formular cu datele necesare pentru înscrierea la examen și va primi mai apoi un mail prin care va fi notificat că datele au fost primite de serverul facultății și va trebui să aștepte o noua confirmare, din partea secretariatului, cu privire la validitatea datelor trimise și acceptarea sau nu în examenul de admitere. De asemenea, pentru cazul în care utilizatorul este olimpic național, el va fi înștiințat că este admis la facultate.
- ### Primirea și prelucrarea informațiilor

Serverul va primi formularele completate de către utilizatori și le va stoca într-o bază de date.
Clientul va avea acces la baza de date, va putea vizualiza cererile de înscrierere și va trimite un feedback generat automat către utilizator: acceptat în examen, acceptat la facultate (pentru olimpici), dosar respins sau date incomplete/eronate. În momentul în care clientul va accepta un utilizator în vederea susținerii examenului, serverul va marca respectiva persoană în baza de date și va fi capabil să genereze listele cu toți studenții ce vor susține examenul și repartiția pe săli a acestora.





