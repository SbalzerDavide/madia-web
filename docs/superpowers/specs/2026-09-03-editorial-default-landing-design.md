# Madia: landing editoriale predefinita

## Obiettivo

Pubblicare la versione editoriale come unica landing principale di Madia. La
versione classica resta disponibile per consultazione, ma solo tramite il suo
URL diretto e senza collegamenti visibili tra le due varianti.

Il sito resta statico, senza build, dipendenze runtime o servizi esterni.

## Struttura degli URL

- `/` pubblica la landing editoriale in `index.html`.
- `/classica/` pubblica la landing classica in `classica/index.html`.
- `/editoriale/` conserva la compatibilità con i link esistenti e reindirizza a
  `../`, cioè alla nuova homepage editoriale.

Il reindirizzamento usa prima `location.replace("../")` e include un
collegamento HTML di fallback. Non duplica il contenuto editoriale e non crea una
seconda pagina canonica.

## Landing editoriale

L'attuale `editoriale/index.html` diventa la homepage. Grafica, contenuti,
lingue, comportamento e accessibilità restano invariati, salvo le modifiche
necessarie al nuovo percorso:

- rimozione del selettore `Classica · Editoriale` e dei relativi stili e testi
  di traduzione;
- aggiornamento dei percorsi relativi di font, immagini, favicon e pagine
  informative da `../…` a percorsi relativi alla root;
- aggiornamento di `canonical` e `og:url` alla root pubblica
  `https://sbalzerdavide.github.io/madia-web/`;
- mantenimento di `og:image` e `twitter:image` sull'immagine condivisa
  `img/og-cover.jpg`.

La rimozione del selettore non altera il wordmark, la navigazione principale, il
controllo lingua o la CTA.

## Landing classica

L'attuale `index.html` viene conservato integralmente in
`classica/index.html`. Contenuti, tema chiaro/scuro, struttura e comportamento
restano invariati, salvo:

- rimozione della barra e del selettore `Classica · Editoriale`;
- aggiornamento dei percorsi relativi verso risorse e pagine informative con il
  prefisso `../`;
- aggiornamento di `canonical` e `og:url` a
  `https://sbalzerdavide.github.io/madia-web/classica/`;
- mantenimento dei metadati immagine sugli URL assoluti già pubblici.

La pagina non include collegamenti verso la homepage editoriale. Rimane
raggiungibile conoscendo o inserendo direttamente `/classica/`.

## Compatibilità e navigazione

Privacy, Supporto e Termini continuano a essere raggiungibili dai footer di
entrambe le landing. Tutte le ancore interne continuano a puntare a sezioni della
pagina corrente.

La vecchia destinazione `/editoriale/` viene preservata come redirect per non
rompere segnalibri o link già condivisi. Non viene introdotto un redirect dalla
versione classica e non vengono aggiunti pulsanti nascosti o link solo per
screen reader tra le due versioni.

## Metadati e indicizzazione

La homepage editoriale è l'unica pagina con canonical sulla root. La versione
classica dichiara il proprio URL canonical in `/classica/`. La pagina di
redirect `/editoriale/` dichiara canonical verso la root ed evita di presentarsi
come una copia indicizzabile della landing.

Titoli, descrizioni, Open Graph e Twitter Card restano quelli propri di ciascuna
versione, con i soli aggiornamenti di URL richiesti dallo spostamento.

## Verifica

Prima della consegna verranno controllati:

1. apertura della landing editoriale su `/`;
2. apertura della versione classica su `/classica/`;
3. redirect da `/editoriale/` alla root e presenza del fallback HTML;
4. assenza del selettore e di link reciproci in entrambe le landing;
5. caricamento di favicon, font e sei screenshot;
6. collegamenti a Privacy, Supporto e Termini;
7. ancore della navigazione, cambio lingua editoriale e cambio tema classico;
8. canonical, Open Graph e Twitter Card coerenti con i nuovi URL;
9. rendering su viewport desktop e mobile;
10. assenza di risorse runtime esterne ed errori evidenti in console;
11. controllo statico dei percorsi e `git diff --check`.

## Documentazione

Il `README.md` verrà aggiornato per descrivere la homepage editoriale, l'URL
diretto della versione classica e il redirect compatibile dalla vecchia route.

## Fuori ambito

- Modifica del visual design o dei contenuti delle landing.
- Eliminazione della versione classica.
- Aggiunta di un collegamento pubblico verso `/classica/`.
- Aggiunta di analytics, cookie, backend o processo di build.
- Modifica delle pagine Privacy, Supporto e Termini.
- Pubblicazione su GitHub Pages.
