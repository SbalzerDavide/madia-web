# Madia: header sticky nella landing editoriale

## Obiettivo

Mantenere sempre visibile l'header della landing editoriale principale durante
lo scorrimento della pagina, senza modificarne contenuti, altezza, disposizione
o comportamento responsive.

La versione classica è fuori ambito perché il suo header usa già un
posizionamento sticky.

## Soluzione

La regola `.site-header` della landing editoriale in `index.html` passa da
`position: relative` a `position: sticky` e viene ancorata con `top: 0`.

Il `body` passa da `overflow-x: hidden` a `overflow-x: clip`: il contenuto
orizzontale continua a essere tagliato, ma il `body` non crea un contenitore di
scorrimento che interferirebbe con il posizionamento sticky.

L'header resta nel normale flusso del documento finché raggiunge il bordo
superiore del viewport. Da quel momento rimane visibile sopra al contenuto
grazie allo `z-index` esistente.

Non viene introdotto JavaScript. Lo sfondo pieno, il bordo inferiore, la griglia
responsive e il supporto alla safe area restano invariati.

`scroll-padding-top` riserva l'altezza dell'header durante la navigazione verso
le ancore. L'offset segue le altezze esistenti: sette rem più la safe area sui
viewport piccoli e 5,5 rem da 64 rem in su.

## Responsive e accessibilità

Il comportamento si applica a tutti i viewport. Su mobile l'header mantiene le
due righe esistenti con wordmark, controllo lingua e navigazione orizzontale. Su
desktop mantiene la disposizione su una riga.

Ordine del focus, aree interattive, etichette accessibili e riduzione del moto
non cambiano. Il posizionamento sticky non richiede animazioni né aggiornamenti
ARIA.

## Verifica

Prima della consegna verranno controllati:

1. presenza di `position: sticky` e `top: 0` sulla regola `.site-header`;
2. presenza di `overflow-x: clip` sul `body`;
3. offset delle ancore coerente con l'altezza responsive dell'header;
4. assenza di modifiche all'header della versione classica;
5. integrità della struttura HTML e della sintassi JavaScript;
6. navigazione tramite ancore con header visibile;
7. comportamento previsto su viewport desktop e mobile;
8. `git diff --check` senza errori.

## Fuori ambito

- Header compatto o animato durante lo scroll.
- Modifiche a colori, trasparenza, ombre o contenuti.
- Uso di `position: fixed` e compensazioni sul contenuto.
- Modifiche alla versione classica.
