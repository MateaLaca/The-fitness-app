# Projektne faze
- [x] - Opis projekta
- [x] - Početna struktura aplikacije
- [x] - Prototip
- [x] - Konzultacije
- [x] - Finalna verzija
- [ ] - Obrana projekta

# Opis projekta
## Kratki opis
Mobilna aplikacija za prikaz vježbi u obliku videa.
Aplikacija će od korisnika tražiti prijavu ili registraciju. Nakon što se korisnik prijavi, dan mu je izbornik u kojem bira vježbe za određeni dio tijela. Nakon odabira kategorije, prikazuju se odgovarajući videi i dalje korisnik može pogledati neki od ponuđenih. Videi se mogu dodati u omiljene. Implementirane su sve tri vrste navigacije.

## Popis funkcionalnosti
1. Prijava u aplikaciju
2. Pregled vježbi
3. Dodavanje u omiljene


## UPUTE
## Opis projekta
Mobilna aplikacija za prikaz vježbi u obliku videa.
Aplikacija će od korisnika tražiti prijavu ili registraciju. Nakon što se korisnik prijavi, dan mu je izbornik u kojem bira vježbe za određeni dio tijela. Nakon odabira kategorije, prikazuju se odgovarajući videi i dalje korisnik može pogledati neki od ponuđenih. Videi se mogu dodati u omiljene. Također se vježbe mogu filtrirati prema kriterijima koji odgovaraju korisniku(npr. vježbe sa rekvizitima, bez rekvizita..).Iz mobilne aplikacije se šalje zahtjev na server, podaci se spremaju na API-u koji je povezan s bazom.U bazu podataka se spremaju informacije o korisniku i njegovim omiljenim vjezbama. Mobilna aplikacija poziva backend koji će omogućiti prijavu korisnika.. 

## Početna struktura aplikacije
Aplikacija će imati 7 ekrana:Login,Register, Kategorije, Vjezbe po kategoriji, Video, Omiljeni i Filteri. Stack navigacija će izgledati ovako:
Login<-> Registracija<->Kategorije<->Vjezbe<->Video.
Tab navigacija će sadržavati dvije kartice: Sve kategorije i omiljene vježbe.
Drawer navigacija bi se otvarala iz kartica Kategorije i Omiljeni i tu bi se mogle filtrirati vježbe.

## Prototip
U ovoj fazi bi trebali imati "grubu" verziju svoje aplikacije. Ova verzija bi trebala imati implementirane osnovne funkcionalnosti koje su navedene u opisu projekta. Ne očekuje se da su implementirane SVE funkcionalnosti niti da su postojeće funkcionalnosti potpuno ispravne.

## Konzultacije
Nakon izrade prototipa potrebno se javiti nastavniku za termin konzultacija. Na konzultacijama ćete ukratko pokazati svoj prototip te će se po potrebi napraviti modifikacija početnih zahtjeva. Dovršeni projekti bez ove faze neće biti prihvaćeni.

## Finalna verzija
Nakon demonstracije prototipa možete nastaviti sa razvojem aplikacije i implementacijom svih funkcionalnosti. Prilikom razvoja potrebno je voditi dnevnik aktivnosti prema zadanim uputama.

## Obrana projekta
Zadnja faza je obrana projekta - nakon završetka finalne verzije svoje aplikacije javite se nastavniku za dogovor oko termina obrane projekta.
