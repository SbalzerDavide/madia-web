# Piano di implementazione: versioni della landing Madia

## Risultato atteso

La repository pubblica la landing classica su `/` e la landing editoriale su
`/editoriale/`. Da entrambe le pagine è possibile raggiungere l'altra versione.
Il sito resta statico, senza build necessaria per la pubblicazione.

## 1. Integrare il selettore nella pagina classica

File: `index.html`

- Aggiungere gli stili del selettore di versione rispettando tema chiaro e scuro.
- Inserire il controllo nell'header senza modificare navigazione, CTA o tema.
- Marcare `Classica` come pagina corrente e collegare `Editoriale` a
  `editoriale/`.
- Adattare il controllo ai breakpoint esistenti.

## 2. Preparare la pagina editoriale statica

File: `editoriale/index.html`

- Partire dal markup approvato in `stockUp-fe/landing/index.html`.
- Incorporare, nell'ordine, token, base, layout, mockup e regole responsive.
- Incorporare il dizionario IT/EN e il comportamento della landing.
- Sostituire le dipendenze Lucide con SVG inline.
- Inserire il selettore di versione con collegamento `../` alla classica.
- Sostituire gli screenshot sorgente con i file JPEG già presenti in `../img/`.
- Aggiungere favicon, icona iOS, canonical e metadati social per
  `/madia-web/editoriale/`.
- Conservare italiano come fallback completo quando JavaScript non è attivo.

## 3. Rendere la versione editoriale autonoma

File: `assets/gabarito-latin-wght-normal.woff2`

- Copiare localmente il font usato dalla landing.
- Referenziarlo dall'HTML con un percorso relativo.
- Verificare che non restino import, URL `/stockUp-fe/`, CDN o richieste runtime
  non locali.

## 4. Aggiornare la documentazione

File: `README.md`

- Documentare le due versioni e i relativi URL.
- Descrivere il selettore, la gestione IT/EN e la struttura dei file.
- Conservare integralmente la documentazione legale già aggiunta.

## 5. Collegare le pagine informative dalla versione editoriale

File: `editoriale/index.html`

- Raggruppare testo e navigazione informativa nella colonna centrale del footer.
- Aggiungere i collegamenti relativi a `../privacy/`, `../supporto/` e
  `../termini/`.
- Localizzare etichetta accessibile e testi visibili in italiano e inglese.
- Mantenere una disposizione leggibile e adattabile ai viewport stretti.

## 6. Chiarire la generazione della lista

File: `index.html`, `editoriale/index.html`

- Usare il titolo `La lista nasce dalla pianificazione` in entrambe le landing.
- Spiegare che Madia confronta gli ingredienti richiesti dalla pianificazione
  con ciò che è già presente in dispensa.
- Eliminare `deduplicati` e il refuso `dedupplicati`.
- Aggiornare la traduzione inglese della versione editoriale.

## 7. Verificare

- Validare entrambi i documenti HTML.
- Controllare ancore e collegamenti tra versioni.
- Controllare corrispondenza delle chiavi IT/EN.
- Controllare i tre collegamenti informativi e le etichette IT/EN del footer.
- Controllare il nuovo testo sulla lista in entrambe le landing.
- Verificare percorsi locali, assenza di risorse esterne e compatibilità Pages.
- Avviare un server statico locale e controllare le risposte di `/` e
  `/editoriale/`.
- Eseguire controlli statici su focus, `aria-current`, testi alternativi e
  `prefers-reduced-motion`.
- Controllare il diff finale, distinguendo le modifiche di questo lavoro da
  quelle legali già presenti.

## Vincoli operativi

- Nessun commit o push automatico.
- Nessuna modifica ai contenuti e al visual design approvati.
- Nessuna cancellazione o sovrascrittura delle modifiche già presenti in
  `assets/`, `privacy/`, `supporto/`, `termini/`, `README.md` e `index.html`.
