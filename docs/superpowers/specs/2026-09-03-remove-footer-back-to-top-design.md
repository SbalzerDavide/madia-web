# Madia: rimozione del controllo Torna su

## Obiettivo

Rimuovere dal footer della landing editoriale il controllo testuale
`Torna su ↑`, mantenendo invariati gli altri contenuti e collegamenti.

Il wordmark `madia.` nel footer resta cliccabile e continua a collegare
all'inizio della pagina.

## Soluzione

Da `index.html` vengono rimossi:

- il link `.site-footer__top` dal markup del footer;
- le regole CSS dedicate al controllo e al suo stato hover;
- le chiavi di traduzione `footer.top` dai dizionari italiano e inglese.

La griglia desktop del footer passa da tre a due colonne, una per il wordmark e
una per testo e collegamenti informativi. Il layout mobile continua a usare la
disposizione esistente.

Non vengono nascosti elementi via CSS e non rimangono controlli invisibili o
chiavi i18n inutilizzate.

## Accessibilità e comportamento

Privacy, Supporto e Termini restano raggiungibili e mantengono etichette e aree
interattive esistenti. La rimozione non modifica l'ordine di focus degli altri
controlli.

Il collegamento del wordmark a `#top` resta l'unico collegamento all'inizio della
pagina presente nel footer.

## Verifica

Prima della consegna verranno controllati:

1. assenza del link e del testo `Torna su` dal footer;
2. assenza di `.site-footer__top` dal CSS;
3. assenza di `footer.top` da entrambi i dizionari;
4. griglia desktop del footer composta da due colonne;
5. presenza del collegamento `#top` sul wordmark;
6. coerenza delle chiavi i18n e sintassi JavaScript valida;
7. `git diff --check` senza errori.

## Fuori ambito

- Modifica del wordmark del footer.
- Modifica dei collegamenti Privacy, Supporto e Termini.
- Modifica del footer della versione classica.
- Cambiamenti a colori, tipografia o contenuti rimanenti.
