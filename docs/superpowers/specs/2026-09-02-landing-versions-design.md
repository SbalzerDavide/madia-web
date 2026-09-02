# Madia: navigazione tra le versioni della landing

## Obiettivo

Rendere consultabili dalla stessa repository entrambe le versioni della landing
di Madia, permettendo al visitatore di passare direttamente dall'una all'altra.
La pubblicazione deve continuare a funzionare su GitHub Pages senza build,
dipendenze runtime o servizi esterni.

## Architettura scelta

- La versione classica resta la homepage in `index.html`.
- La versione editoriale viene pubblicata in `editoriale/index.html`.
- Entrambe le pagine includono un selettore `Classica · Editoriale` nel proprio
  header.
- I collegamenti sono relativi: `editoriale/` dalla homepage e `../` dalla
  versione editoriale. Funzionano quindi su GitHub Pages e aprendo i file in
  locale.
- La repository resta un sito statico senza processo di build.

## Versione classica

Il contenuto, la grafica, il tema chiaro/scuro e il comportamento esistenti non
cambiano. L'unica aggiunta è il selettore di versione, integrato nell'header e
adattato agli spazi desktop e mobile.

La voce `Classica` è lo stato corrente e usa `aria-current="page"`. La voce
`Editoriale` è un collegamento a `editoriale/`.

## Versione editoriale

La landing realizzata in `stockUp-fe/landing` viene trasferita senza cambiarne
grafica, gerarchia o contenuti approvati. La pagina diventa un singolo documento
HTML autonomo con CSS e JavaScript inline, seguendo lo stesso modello tecnico
della versione classica.

La voce `Editoriale` è lo stato corrente e usa `aria-current="page"`. La voce
`Classica` è un collegamento a `../`.

La pagina riusa gli screenshot già disponibili in `img/`:

- `pianificazione.jpg`
- `generazione.jpg`
- `preferenze.jpg`
- `spesa.jpg`
- `cottura.jpg`
- `scontrino.jpg`

Le icone necessarie sono SVG inline. Eventuali font aggiuntivi sono file locali,
senza richieste a CDN o cataloghi esterni.

Il footer include gli stessi collegamenti informativi della versione classica:

- `Privacy` verso `../privacy/`;
- `Supporto` verso `../supporto/`;
- `Termini` verso `../termini/`.

I link formano una navigazione semantica separata. Restano affiancati quando lo
spazio lo consente e passano su una nuova riga nei viewport stretti.

## Lingue

La versione editoriale mantiene italiano e inglese:

- italiano completo nel markup come fallback e lingua predefinita;
- dizionari italiano e inglese inclusi nello script della pagina;
- controllo `IT / EN` con stato accessibile;
- preferenza salvata in `localStorage` quando disponibile;
- titolo, descrizione, testi alternativi ed etichette accessibili aggiornati con
  la lingua selezionata.

Se JavaScript o `localStorage` non sono disponibili, la pagina resta completa e
leggibile in italiano. Il testo visibile negli screenshot rimane in italiano;
in inglese i testi alternativi lo indicano quando utile.

La versione classica resta in italiano e conserva il selettore del tema già
presente.

Nella versione editoriale le etichette del footer diventano `Privacy`,
`Support` e `Terms` quando è selezionato l'inglese. Le destinazioni restano le
stesse perché le pagine informative sono uniche per entrambe le landing.

## Testo della lista della spesa

Entrambe le landing usano la stessa formulazione per il secondo passaggio del
flusso:

- titolo: `La lista nasce dalla pianificazione.`;
- descrizione: `Partendo dalla pianificazione dei pasti, Madia controlla cosa
  hai già in dispensa e aggiunge alla lista solo gli ingredienti mancanti,
  ordinati per reparto. Ogni voce resta collegata alla ricetta per cui serve.`

La versione editoriale traduce il passaggio in inglese con:

- titolo: `The list starts from your meal plan.`;
- descrizione: `Starting from your meal plan, Madia checks what is already in
  your pantry and adds only the missing ingredients to the list, sorted by
  store section. Every item stays linked to the recipe it is needed for.`

Il termine tecnico `deduplicati` non viene usato.

## Responsive e accessibilità

Il selettore di versione resta visibile sia su desktop sia su mobile senza
competere con i controlli principali. L'elemento attivo non è un collegamento e
viene identificato semanticamente come pagina corrente.

Entrambe le pagine mantengono:

- focus visibile da tastiera;
- aree interattive adeguate su touch;
- struttura semantica e nomi accessibili;
- rispetto di `prefers-reduced-motion` per le animazioni;
- contrasto coerente con le rispettive palette.

## Metadati e percorsi

La pagina editoriale usa percorsi relativi per immagini, font, favicon e
navigazione. Canonical e metadati Open Graph puntano alla variante
`/madia-web/editoriale/`; l'immagine social resta quella condivisa nella cartella
`img/`.

## Gestione degli errori

- In assenza di JavaScript, il contenuto italiano e i collegamenti di navigazione
  restano utilizzabili.
- Se `localStorage` non è disponibile, lingua e tema funzionano per la sessione
  senza memorizzazione.
- Se `IntersectionObserver` non è supportato, i contenuti animati vengono
  mostrati immediatamente.
- I percorsi non dipendono dal dominio finale, fatta eccezione per i metadati
  social che dichiarano l'indirizzo GitHub Pages corrente.

## Verifica

Prima della consegna verranno controllati:

1. apertura della homepage e di `editoriale/`;
2. navigazione reciproca tra le due versioni;
3. collegamenti interni e destinazioni delle ancore;
4. cambio lingua IT/EN e persistenza della scelta;
5. tema chiaro/scuro della versione classica;
6. rendering responsive su viewport desktop e mobile;
7. navigazione da tastiera, nomi accessibili e riduzione del movimento;
8. assenza di risorse runtime esterne e compatibilità con GitHub Pages;
9. raggiungibilità di privacy, supporto e termini dal footer editoriale;
10. presenza della nuova formulazione sulla lista in entrambe le landing;
11. validità HTML e assenza di errori evidenti in console.

## Documentazione

Il `README.md` della repository verrà aggiornato con la struttura delle due
versioni, gli URL pubblici e le istruzioni per modificare contenuti, lingue e
risorse.

## Fuori ambito

- Modifica dei contenuti o del visual design delle due landing.
- Aggiunta di analytics, form, cookie o backend.
- Introduzione di Vite, npm o un workflow di build.
- Pubblicazione o commit automatici.
