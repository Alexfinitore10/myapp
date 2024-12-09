const express = require("express");
const cors = require("cors");
const PORT = 3001;

const app = express();

app.use(cors());


app.get("/articles", (req, res) => {
    return res.json([
        {
            id: 1,
            image: 'https://picsum.photos/200/300',
            title: 'L\'Italia si aggiudica il mondiale del basket',
            description: 'Una squadra di giocatori italiani ha vinto il mondiale di basket, dopo un\'annata di lavoro e sacrificio. I protagonisti sono stati il guardia tiratore Andrea Gigante e il centro Alessandro Chiti, che hanno guidato la squadra ad una finale sfida contro gli Stati Uniti, che però sono stati i campionati.',
            publishedDate: '2022-01-01',
            bodyPreview: 'Questo è un testo di esempio di un articolo, che parla di come l\'Italia si è aggiudicata il campionato mondiale di basket. Il testo è molto dettagliato e descrive le azioni dei giocatori e il loro ruolo nel successo della squadra.',
            tags: ['bruschetta', 'non ci credo']
          },
          {
            id: 2,
            image: 'https://picsum.photos/200/300?random=1',
            title: 'Il pensionato sconosciuto che ha salvato il gatto',
            description: 'Un uomo di mezza età si è impegnato a seguire un gatto che era stato abbandonato e si era perso in un quartiere periferico. Il gatto era sparito da diversi giorni e nessuno sapeva dove si trovasse.',
            publishedDate: '2022-01-01',
            bodyPreview: 'Questo è un testo di esempio di un articolo, che parla di come un pensionato sconosciuto si è impegnato a cercare e salvare un gatto che era stato abbandonato. Il testo descrive le sue azioni e i suoi tentativi per ritrovare il gatto.',
            tags: ['gatto', 'animali', 'pensionato']
          },
          {
            id: 3,
            image: 'https://t4.ftcdn.net/jpg/00/38/34/37/360_F_38343743_lOX7Y1W41vXWX2PzHNI9tzFrwfY929Le.jpg',
            title: 'Il lupo che ha salvato il villaggio',
            description: 'Un lupo ha salvato un villaggio da una violenta tempesta di neve. La notte era buia e il vento era forte, e molti abitanti del villaggio stavano rischiando in pericolo.',
            publishedDate: '2022-01-01',
            bodyPreview: 'Questo è un testo di esempio di un articolo, che parla di come un lupo si è impegnato a salvare un villaggio da una violenta tempesta di neve. Il testo descrive le sue azioni e i suoi tentativi per salvare il villaggio.',
            tags: ['lupo', 'animali', 'villaggio']
          },
          {
            id: 4,
            image: 'https://picsum.photos/200/300',
            title: 'L\'Italia si aggiudica il mondiale del basket',
            description: 'Una squadra di giocatori italiani ha vinto il mondiale di basket, dopo un\'annata di lavoro e sacrificio. I protagonisti sono stati il guardia tiratore Andrea Gigante e il centro Alessandro Chiti, che hanno guidato la squadra ad una finale sfida contro gli Stati Uniti, che però sono stati i campionati.',
            publishedDate: '2022-01-01',
            bodyPreview: 'Questo è un testo di esempio di un articolo, che parla di come l\'Italia si è aggiudicata il campionato mondiale di basket. Il testo è molto dettagliato e descrive le azioni dei giocatori e il loro ruolo nel successo della squadra.',
            tags: ['basket', 'calcio', 'calcio mondiale']
          },
          {
            id: 5,
            image: 'https://picsum.photos/200/300',
            title: 'L\'Italia si aggiudica il mondiale del basket',
            description: 'Una squadra di giocatori italiani ha vinto il mondiale di basket, dopo un\'annata di lavoro e sacrificio. I protagonisti sono stati il guardia tiratore Andrea Gigante e il centro Alessandro Chiti, che hanno guidato la squadra ad una finale sfida contro gli Stati Uniti, che però sono stati i campionati.',
            publishedDate: '2022-01-01',
            bodyPreview: 'Questo è un testo di esempio di un articolo, che parla di come l\'Italia si è aggiudicata il campionato mondiale di basket. Il testo è molto dettagliato e descrive le azioni dei giocatori e il loro ruolo nel successo della squadra.',
            tags: ['basket', 'calcio', 'calcio mondiale']
          },
          {
            id: 6,
            image: 'https://t4.ftcdn.net/jpg/00/38/34/37/360_F_38343743_lOX7Y1W41vXWX2PzHNI9tzFrwfY929Le.jpg',
            title: 'Il lupo che ha salvato il villaggio',
            description: 'Un lupo ha salvato un villaggio da una violenta tempesta di neve. La notte era buia e il vento era forte, e molti abitanti del villaggio stavano rischiando in pericolo.',
            publishedDate: '2022-01-01',
            bodyPreview: 'Questo è un testo di esempio di un articolo, che parla di come un lupo si è impegnato a salvare un villaggio da una violenta tempesta di neve. Il testo descrive le sue azioni e i suoi tentativi per salvare il villaggio.',
            tags: ['lupo', 'animali', 'villaggio']
          },
          {
            id: 7,
            image: 'https://t4.ftcdn.net/jpg/00/38/34/37/360_F_38343743_lOX7Y1W41vXWX2PzHNI9tzFrwfY929Le.jpg',
            title: 'Il lupo che ha salvato il villaggio',
            description: 'Un lupo ha salvato un villaggio da una violenta tempesta di neve. La notte era buia e il vento era forte, e molti abitanti del villaggio stavano rischiando in pericolo.',
            publishedDate: '2022-01-01',
            bodyPreview: 'Questo è un testo di esempio di un articolo, che parla di come un lupo si è impegnato a salvare un villaggio da una violenta tempesta di neve. Il testo descrive le sue azioni e i suoi tentativi per salvare il villaggio.',
            tags: ['lupo', 'animali', 'villaggio']
          },
          {
            id: 8,
            image: 'https://t4.ftcdn.net/jpg/00/38/34/37/360_F_38343743_lOX7Y1W41vXWX2PzHNI9tzFrwfY929Le.jpg',
            title: 'Il lupo che ha salvato il villaggio',
            description: 'Un lupo ha salvato un villaggio da una violenta tempesta di neve. La notte era buia e il vento era forte, e molti abitanti del villaggio stavano rischiando in pericolo.',
            publishedDate: '2022-01-01',
            bodyPreview: 'Questo è un testo di esempio di un articolo, che parla di come un lupo si è impegnato a salvare un villaggio da una violenta tempesta di neve. Il testo descrive le sue azioni e i suoi tentativi per salvare il villaggio.',
            tags: ['lupo', 'animali', 'villaggio']
          },
          {
            id: 9,
            image: 'https://t4.ftcdn.net/jpg/00/38/34/37/360_F_38343743_lOX7Y1W41vXWX2PzHNI9tzFrwfY929Le.jpg',
            title: 'Il lupo che ha salvato il villaggio',
            description: 'Un lupo ha salvato un villaggio da una violenta tempesta di neve. La notte era buia e il vento era forte, e molti abitanti del villaggio stavano rischiando in pericolo.',
            publishedDate: '2010-01-01',
            bodyPreview: 'Questo è un testo di esempio di un articolo, che parla di come un lupo si è impegnato a salvare un villaggio da una violenta tempesta di neve. Il testo descrive le sue azioni e i suoi tentativi per salvare il villaggio.',
            tags: ['lupo', 'animali', 'villaggio']
          }
        ])
    });

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});