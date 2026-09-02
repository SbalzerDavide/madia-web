# Sito vetrina Madia

Sito statico senza build e senza dipendenze runtime. Comprende due versioni della
landing, sei screenshot dell'app, le icone e le pagine informative.

```
index.html                 landing classica, pubblicata su /
editoriale/index.html      landing editoriale bilingue, pubblicata su /editoriale/
favicon.svg                marchio Madia
img/apple-touch-icon.png   icona 180×180 per iOS
img/og-cover.jpg           immagine 1200×630 per le condivisioni
img/pianificazione.jpg     hero — la settimana generata
img/generazione.jpg        sezione "Tre tocchi" — il foglio di generazione
img/preferenze.jpg         sezione "Equilibrio" — macro, priorità, dieta
img/spesa.jpg              modalità spesa
img/cottura.jpg            modalità cottura
img/scontrino.jpg          scansione scontrino
assets/gabarito-*.woff2    font locale della landing editoriale
.nojekyll                  dice a Pages di servire i file così come sono
```

## Versioni della landing

La homepage conserva la versione classica. La seconda versione mantiene la
grafica editoriale sviluppata per Madia e si trova in `editoriale/index.html`.
Il selettore `Classica · Editoriale` nell'header di entrambe permette di passare
da una versione all'altra con percorsi relativi, validi sia su GitHub Pages sia
aprendo il sito in locale.

La versione editoriale parte in italiano e include anche l'inglese. Il controllo
`IT / EN` salva la preferenza in `localStorage`; senza JavaScript la pagina resta
completa e leggibile in italiano. HTML, CSS, dizionari e comportamento sono
contenuti nello stesso file, mentre font e screenshot restano risorse locali.

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

Nei `<head>` di `index.html` e `editoriale/index.html` gli URL assoluti di
`canonical`, `og:url`, `og:image` e `twitter:image` puntano attualmente a
`https://sbalzerdavide.github.io/madia-web/`. Se cambia il dominio pubblico,
vanno aggiornate entrambe le pagine; il resto del sito usa percorsi relativi.

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

## Pagine legali (bozze)

```
privacy/index.html    informativa GDPR — è l'URL obbligatorio per App Store Connect
supporto/index.html   contatti, cancellazione account, FAQ — l'URL di supporto per Apple
termini/index.html    termini di servizio (non obbligatori per legge, utili e necessari con abbonamenti)
assets/doc.css        stile condiviso delle tre pagine
assets/theme.js       pulsante del tema per le pagine di documento
```

I contenuti tecnici sono verificati sul codice: le foto di scontrini e prodotti **non** vengono
conservate (`apps/receipts/services.py` le normalizza in memoria e le passa al modello vision), i log
delle chiamate AI registrano solo metadati (`LlmCallLog`: task, modello, durata, token, lunghezza del
prompt — non il testo), il fornitore AI è OpenAI (`langchain-openai`, `LLM_PROVIDER`), le push passano
dall'Expo Push Service, la cancellazione account è un hard delete (`user.delete()`).

### Dati inseriti

Niente: le pagine sono complete. Per riferimento, i dati usati:

| Voce | Valore |
|---|---|
| Titolare del trattamento | Davide Sbalzer, CF SBLDVD91L20B157H (nessun indirizzo: progetto personale non commerciale) |
| Hosting | Aruba S.p.A., server in Italia — verificato sul registro RIPE per l'IP di produzione (`ARUBA-NET`, paese IT) |
| Fornitore AI | OpenAI, con la sua base per i trasferimenti citata dal suo DPA |
| Push | Expo Push Service — SCC modulo 2, decisione C/2021/3972, come dichiarato da Expo |
| Contatti | privacy@stockup-app.com per privacy e diritti, support@stockup-app.com per assistenza (alias ImprovMX sul dominio) |
| Foro competente | Brescia (per i non consumatori) |
| Costi | app gratuita, con rinvio all'aggiornamento della sezione se arriveranno abbonamenti |
| Conservazione | formule veritiere rispetto a come il servizio funziona oggi (vedi sotto) |

### Due punti aperti sul backend

Le pagine oggi dicono che backup e log vengono conservati «per il tempo necessario» ed eliminati
quando non servono più: è vero, ma è una formula debole. Per poter scrivere un numero di giorni
servono due modifiche in `stockup_be`:

- **rotazione dei backup** — `scripts/deploy-prod.sh` crea un `pg_dump` a ogni deploy in
  `backups/postgres` e non cancella mai i vecchi;
- **rotazione dei log** — `docker-compose.prod.yml` non imposta nessuna direttiva `logging`, quindi
  il driver json-file di Docker cresce senza limite (proposta: `max-size: 10m`, `max-file: 3`).

Fatte quelle, nell'informativa si sostituiscono le formule generiche con i giorni effettivi.

### Verifiche periodiche

- le certificazioni Data Privacy Framework dei fornitori si controllano per nome su
  <https://www.dataprivacyframework.gov/list>;
- le condizioni OpenAI sull'uso dei dati via API stanno in
  <https://openai.com/policies/data-processing-addendum/>;
- la dichiarazione Expo su SCC e ruolo di responsabile sta su <https://expo.dev/privacy-explained>.

Resta consigliata una rilettura da parte di un professionista prima di indicare l'URL della privacy
policy in App Store Connect: i fatti tecnici sono verificati sul codice, la responsabilità del
documento è del titolare.
