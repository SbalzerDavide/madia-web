# Sito vetrina Madia

Pagina singola statica, senza build e senza dipendenze: un `index.html` (HTML + CSS inline),
sei screenshot dell'app e le icone. Identica alla versione pubblicata come Artifact.

```
index.html                 la pagina (CSS incluso, ~41 KB)
favicon.svg                marchio Madia
img/apple-touch-icon.png   icona 180×180 per iOS
img/og-cover.jpg           immagine 1200×630 per le condivisioni
img/pianificazione.jpg     hero — la settimana generata
img/generazione.jpg        sezione "Tre tocchi" — il foglio di generazione
img/preferenze.jpg         sezione "Equilibrio" — macro, priorità, dieta
img/spesa.jpg              modalità spesa
img/cottura.jpg            modalità cottura
img/scontrino.jpg          scansione scontrino
.nojekyll                  dice a Pages di servire i file così come sono
```

## Pubblicare su GitHub Pages

**Repo dedicato** (consigliato)

```bash
cd madia-web
git init -b main
git add .
git commit -m "Sito vetrina Madia"
git remote add origin git@github.com:SbalzerDavide/madia-web.git   # già configurato
git push -u origin main
gh api -X POST repos/SbalzerDavide/madia-web/pages -f source.branch=main -f source.path=/
```

Oppure a mano: crea il repo, `git push`, poi **Settings → Pages → Source: Deploy from a branch →
main / (root)**. L'indirizzo è `https://sbalzerdavide.github.io/madia-web/`; il primo deploy prende
un minuto o due.

**Cartella di un repo esistente** — copia questi file in `docs/` e in Pages scegli
**main / /docs**. In questo caso i percorsi relativi (`img/…`) continuano a funzionare.

## Dominio personalizzato

```bash
echo "stockup-app.com" > CNAME   # nella radice del sito, poi commit
```

Sul DNS: `A` verso `185.199.108.153`, `.109.153`, `.110.153`, `.111.153` per il dominio nudo,
oppure un `CNAME` verso `sbalzerdavide.github.io` per il sottodominio `www`. Poi in Pages spunta
**Enforce HTTPS** (il certificato arriva dopo qualche minuto).

## Da aggiornare quando cambia l'indirizzo

Nel `<head>` di `index.html` ci sono tre URL assolute — `canonical`, `og:url`, `og:image`
(quest'ultima ripetuta in `twitter:image`) — impostate su `https://stockup-app.com/`.
Devono puntare all'indirizzo reale, altrimenti l'anteprima nelle chat e sui social non carica
l'immagine. Il resto della pagina usa solo percorsi relativi.

## Rifare gli screenshot

Scatta le schermate su iPhone (tema chiaro, dati veri), poi:

```bash
sips -Z 780 -s format jpeg -s formatOptions 85 IMG_XXXX.PNG --out img/pianificazione.jpg
```

Le immagini sono dichiarate `width="1170" height="2532"`: se cambi modello di iPhone e le
proporzioni non tornano, aggiorna quei due attributi (servono a non far saltare il layout
durante il caricamento). Per la copertina delle condivisioni:

```bash
sips -Z 540 IMG_XXXX.PNG --out /tmp/og.png
sips -p 630 1200 --padColor F2EDE3 /tmp/og.png --out /tmp/og-pad.png
sips -s format jpeg -s formatOptions 88 /tmp/og-pad.png --out img/og-cover.jpg
```

## Note

- Tema chiaro e scuro seguono le preferenze del visitatore: i colori stanno tutti in variabili
  CSS nella parte alta del file, definite tre volte (chiaro, `prefers-color-scheme: dark`,
  `[data-theme]`) — modificane una sola e le altre due restano indietro.
- Gli screenshot sono in tema chiaro anche quando la pagina è in tema scuro: è voluto, sono
  fotografie del prodotto.
- Nessuna analitica, nessun font remoto, nessuna richiesta esterna: la pagina funziona anche
  aperta da file locale (`open index.html`).
