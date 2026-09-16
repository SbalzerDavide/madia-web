# Pagina funzionalità di Madia

## Obiettivo

Creare una pagina commerciale bilingue che presenti le funzionalità di Madia
per ambito, mantenendo come messaggio dominante il collegamento automatico tra
pianificazione, lista della spesa, dispensa e consumo.

La pagina deve aiutare una persona che non conosce Madia a capire sia il
vantaggio complessivo sia le singole capacità del prodotto. Non deve sembrare un
catalogo tecnico o una griglia SaaS di funzioni isolate.

## Percorso e integrazione

- Nuova pagina statica in `funzionalita/index.html`, pubblicata alla route
  `/funzionalita/`.
- Link `Funzionalità` / `Features` nella navigazione della homepage.
- Wordmark della nuova pagina collegato alla homepage.
- Footer coerente con la homepage e collegamenti a Privacy, Supporto e Termini.
- Nessuna modifica alla vecchia landing `classica/`.

## Lingue

La pagina contiene italiano e inglese nello stesso documento e usa lo stesso
selettore `IT / EN` della homepage.

- Italiano come lingua predefinita e fallback senza JavaScript.
- Preferenza letta e salvata nella chiave `madia-landing-locale`, così il cambio
  lingua resta sincronizzato con la homepage.
- Testi visibili, attributi accessibili, titolo e descrizione della pagina
  cambiano con la lingua.

## Direzione visiva

Direzione approvata: **Percorso + capitoli**.

La pagina riusa l'identità della landing editoriale: font Gabarito locale,
palette crema, terracotta, oliva, miele ed espresso, grandi titoli compatti,
separazioni a righe e screenshot reali dell'app. Non introduce un nuovo design
system e non usa una griglia ripetitiva di card.

La scena di riferimento è una persona che consulta la pagina sul telefono o sul
computer di casa per capire rapidamente se Madia può ridurre la fatica della
settimana. Il tema chiaro e caldo della landing esistente resta quindi la scelta
principale.

Gli screenshot esistenti sono sufficienti. Non servono immagini generate:

- `img/pianificazione.jpg`
- `img/generazione.jpg`
- `img/preferenze.jpg`
- `img/spesa.jpg`
- `img/cottura.jpg`
- `img/scontrino.jpg`

## Struttura della pagina

### 1. Hero

- Eyebrow: tutte le funzioni di Madia.
- Titolo incentrato su una sola regia per l'intera cucina.
- Testo breve sul collegamento tra pianificazione, spesa, dispensa e consumo.
- Rappresentazione visiva del ciclo completo.
- Azione principale verso la disponibilità dell'app e azione secondaria verso
  il primo capitolo.

### 2. Navigazione per ambiti

Indice compatto con ancore verso:

1. Pianificazione
2. Lista della spesa
3. Ricette
4. Dispensa
5. Consumo
6. Inserimento rapido

Su schermi stretti l'indice scorre orizzontalmente senza nascondere le voci.

### 3. Capitoli

Ogni capitolo alterna testo e visuale, con un'introduzione orientata al beneficio
e un elenco di prove concrete. I capitoli non ripetono la stessa composizione in
modo meccanico.

#### Pianificazione

- Scegli quanti pranzi e quante cene pianificare.
- Priorità ai prodotti più vicini alla scadenza.
- Limiti e minimi settimanali per gruppi alimentari.
- Priorità alle ricette preferite.
- Priorità a ricette e ingredienti di stagione.
- Inserimento, spostamento o sostituzione con una ricetta specifica.
- Rigenerazione selettiva coerente con il resto della settimana.
- Personalizzazione tramite preferenze salvate e ricette preferite.
- Generazione della lista della spesa dal piano.

La pagina non descrive questo comportamento come apprendimento autonomo dei
gusti. La formula commerciale sarà `si personalizza nel tempo`.

#### Lista della spesa

- Solo gli ingredienti mancanti rispetto alla dispensa.
- Raggruppamento per reparto.
- Collegamento visibile alla ricetta che ha richiesto ogni ingrediente.
- Anteprima delle modifiche quando cambia il piano.
- Suggerimenti per acquisti ricorrenti alimentari e non alimentari.
- Passaggio degli acquisti confermati alla dispensa.

#### Ricette

- Ricerca per ingredienti.
- Ordinamento in base agli ingredienti disponibili in dispensa.
- Preparazione passo dopo passo.
- Timer integrato.
- Schermo mantenuto attivo durante la preparazione.
- Lettura ad alta voce del passaggio corrente.
- Adattamento delle quantità al numero di persone.

#### Dispensa

- Avvisi di scadenza.
- Priorità ai prodotti da usare prima.
- Gestione di quantità e lotti.
- Congelamento totale o parziale di una scorta.
- Azioni rapide per consumare, congelare, eliminare o rimettere in lista.

#### Consumo

- Proposta degli ingredienti e delle quantità da scaricare dopo un pasto.
- Conferma e correzione prima dell'aggiornamento.
- Uso prioritario dei lotti più vicini alla scadenza.
- Consumo ed eliminazione di quantità parziali.
- Aggiornamento delle disponibilità in dispensa.

#### Inserimento rapido

- Aggiunta di un prodotto tramite foto.
- Lettura dello scontrino per prodotti, quantità e prezzi.
- Proposta di scadenze modificabili prima della conferma.

### 4. Chiusura

La chiusura riprende il messaggio della killer feature: pianificare una volta e
lasciare che ogni passaggio prepari il successivo. Include lo stesso stato di
lancio della homepage.

## Vincoli sui contenuti

- Nessun riferimento ad allergie.
- Nessun riferimento all'importazione di ricette da URL.
- Nessuna promessa assoluta sulla riduzione di spesa o sprechi.
- Nessuna affermazione di apprendimento autonomo dei gusti.
- L'automazione propone e l'utente mantiene il controllo prima delle modifiche.
- Il profilo equilibrato può citare i limiti reali: almeno 3 legumi e 2 pesci;
  massimo 4 uova, 3 carni, 1 salume e 3 formaggi.

## Responsive e accessibilità

- Struttura leggibile da 320 px fino a desktop ampio.
- Target interattivi di almeno 44 px.
- Skip link, landmark semantici e gerarchia corretta dei titoli.
- Alt text localizzati per gli screenshot.
- Stato del selettore lingua esposto con `aria-pressed`.
- Contrasto sufficiente e significato mai affidato soltanto al colore.
- Animazioni di comparsa disattivate con `prefers-reduced-motion`.
- Immagini sotto la piega caricate con `loading="lazy"` e dimensioni dichiarate.

## Implementazione

La pagina resta statica, senza dipendenze o processo di build. HTML, CSS,
dizionario delle traduzioni e JavaScript leggero vivono in
`funzionalita/index.html`, seguendo il modello della homepage. Gli asset restano
locali e i percorsi sono relativi alla nuova sottocartella.

La homepage riceve soltanto le nuove chiavi di traduzione e il collegamento alla
pagina. Non vengono estratti o riscritti gli stili esistenti.

## Verifica

- Controllo della completezza delle chiavi italiane e inglesi.
- Controllo che la preferenza lingua passi correttamente tra le due pagine.
- Verifica dei link e dei percorsi degli asset da `/funzionalita/`.
- Verifica visuale mobile e desktop in italiano e inglese.
- Controllo con JavaScript disabilitato: contenuto italiano completo e leggibile.
- Controllo della navigazione da tastiera e del reduced motion.
- Scansione finale per riferimenti ad allergie, importazione URL e promesse non
  approvate.
