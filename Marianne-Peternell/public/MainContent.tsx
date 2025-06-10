import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Container, Divider, Menu, MenuItem } from "@mui/material";

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  minHeight: 200,
  flexDirection: "column",
  padding: 0,
  height: "auto",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const StyledCardContent = styled(CardContent)({
  display: "flex",
  // overflow: "auto",
  wordWrap: "break-word",
  flexDirection: "column",
  whiteSpace: "pre-wrap",
  gap: 4,
  padding: 16,
  "&:last-child": {
    paddingBottom: 16,
  },
  textAlign: "left",
  overflowWrap: "break-word", // or "anywhere"
  wordBreak: "break-word", // fallback for older browsers
  hyphens: "auto", // enables hyphenation when supported
  // flexGrow: 1, // allows it to grow as needed
});

const StyledTypography = styled(Typography)({
  width: "100%",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  whiteSpace: "pre-wrap",
  textAlign: "left",
  overflowWrap: "break-word", // or "anywhere"
  wordBreak: "break-word", // fallback for older browsers
  hyphens: "auto", // enables hyphenation when supported
});

export default function MainContent() {
  type PageKey = keyof typeof pageData;
  type PageData = {
    [key: string]: {
      tag?: string;
      title?: string;
      description: React.ReactElement;
      subPages?: Record<string, React.ReactElement>;
    };
  };
  const pageData: PageData = {
    Start: {
      tag: "",
      title: "Willkommen!",
      description: (
        <div>
          {`Diese Webseite dient dem Gedenken an Marianne Marlene Peternell, die am 10.01.2025 verstorben ist.
Sie hat zu Lebzeiten bereits eine Webseite (damals marianne-peternell.online) betrieben und deren Inhalt wird hier weitergeführt.    

Ich habe auf diesen Seiten Texte und Bilder veröffentlicht, die im Laufe der letzten Jahre entstanden sind.
Es handelt sich um Literarisches, Malerisches, Theoretisches und Persönliches.
Ich bemühe mich, die Homepage immer wieder zu aktualisieren.
Viel Vergnügen! `}
        </div>
      ),
    },
    Gedichte: {
      title: "",
      description: (
        <Container
          sx={{
            diplay: "flex",
            flexDirection: "column",
            justifyItems: "center",
          }}
        >
          <a>
            {`Wildes Kopieren ist nicht erlaubt. Alle Texte dieser homepage unterliegen dem Copyright.
            `}
          </a>
          <CardMedia
            component="img"
            alt=""
            image="public/matisse_sorrow-of-the-king.jpg"
            sx={{
              aspectRatio: "16 / 9",
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          />
          <i style={{ textAlign: "center" }}>
            Henri Matisse - Die Traurigkeit des Königs (1952)
          </i>
        </Container>
      ),
      subPages: {
        "KEIN SCHATTEN": (
          <div>{`Zuerst wurde der Tod verbannt und das Alter.
Schöne und junge Menschen gab es überall.
Jetzt wird der Schatten selbst verbannt.
Keiner hat ein Problem.
Oder sieht einen Schatten.
Wo denn?

Sonst ist er selber schuld.
Vielleicht hat er den falschen Umgang?
Oder das falsche Buch gelesen.
Die falschen Gedanken im Kopf.
Wer ein Problem hat, muss zum Experten. Heimlich.
Es gibt massenhaft Ratgeber.

Ängstlich verbergen wir voreinander die Schatten.

Schweigemantel. Erfahrungen gemurmelt vertuschen im Sand.
Schreib ein Buch, einen Ratgeber.
Was, willst Rat geben, aber du, du hast doch auch, da, ich seh' das

Zipfelchen, da Schatten, ein Problem, steig herab.

Du hast uns nichts zu sagen!
Warte auf den Erlöser! Den Experten! Wir könnten dich beraten! Ha!

Erfahrungen werden nicht getauscht. Die Sprache von Herz zu Herz verstummt.
Hochgerüstet mit Weisheit, aufgerüstet, wehe du trittst in meinen Schmerz!

Sonnenhell ausgeleuchtet ist das Land und schön.`}</div>
        ),
        Europäerin: (
          <div>{`Ich hungere und doch habe ich immer zu essen.
Ich friere und doch habe ich warme Kleider und Zentralheizung.
Ich bin einsam und doch bin ich selten allein. Ich bin Europäerin.
Es geht mir gut.`}</div>
        ),
        "Weiche, kleine Wellen": (
          <div>{`Weiche kleine Wellen
tragen meinen Körper.
Der See liegt grün und glatt
im Morgenlicht.
 
Die Berge schweigen gefügig
vor dem bewegten Wasser.
Ich gleite und werde gewiegt.
 
Kein Stein fiel.
Kein Stern zerbarst.
Kein Mond zerbrach.
 
Das Käuzchen rief.`}</div>
        ),
        "Severin, Sievering": (
          <div>{`Hartgeld und Weingut
Klatschen und Klatsch
Auf den Wiesen der Mohn
Augengemurmel
Streifengelächel
Spitzen.
Immer nett  spitz 

unter den Trauben.`}</div>
        ),
        HERBST: (
          <div>{`Das Jahr beginnt im Herbst.
Die Wurzeln des Sommers treiben Sprösslinge,
Die Augen blind vom Holunderrausch im Sturm.
Gespanntes Tun – von der Feder getrieben.
 
Das Kreuz in der
Novemberschwärze – eine Kulisse.
Aus Sohlen und Kiefern holen wir Worte
wie Zapfen und stampern sie ins Sein.
 
Dünger auf die Felder des Geistes und
Es weht durch uns durch und wohin
Der kleine Knabe wird geboren.
Die Herbstarbeit kommt zur Ruhe`}</div>
        ),
      },
    },
    Kurzgeschichten: {
      title: "",
      description: (
        <Container
          sx={{
            diplay: "flex",
            flexDirection: "column",
            justifyItems: "center",
          }}
        >
          <a>
            {`Wildes Kopieren ist nicht erlaubt. Alle Texte dieser homepage unterliegen dem Copyright.
            `}
          </a>
          <CardMedia
            component="img"
            alt=""
            image="public/matisse_spanisches stillleben.jpg"
            sx={{
              aspectRatio: "16 / 9",
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          />
          <i>Henri Matisse - Spanisches Stillleben (1911)</i>
        </Container>
      ),
      subPages: {
        Netzwerke: (
          <div>
            {`Hannah stand unter der Dusche. Das Wasser prasselte warm und regelmäßig über ihren Körper. Sie stand schon bis zu den Knöcheln im Wasser. Es floss nicht ab. Das unter der weiß glänzenden Duschtasse verborgene Abflussrohr war verstopft. Wohin es fließen sollte, dieses Wasser, sie wusste es nicht. Röhrensysteme stellte sie sich vor, Kanäle, Abwässerkläranlagen.

          „Mama kommt das Wasser immer vom Berg?“ „Es kommt auf jeden Fall aus der Erde, Kind. Manchmal holt man es tief aus dem Grund, manchmal leitet man es aus den Bergen in die Stadt und verteilt es dort. In langen Rohren. Wie es genau funktioniert, weiß ich nicht. Zauberei. Ich drehe den Hahn auf und die Quelle fließt. Ich drehe den Hahn ab, und die Quelle versiegt. Es ist auch Zauberei, dass wir Licht haben, dass der Kühlschrank funktioniert und die Spülmaschine. Ich stecke Stecker ein, ich drücke auf Schalter. Es werde Licht. Keine große Sache mehr, Kleiner. Aber wie das geht? Es sind Drähte in Kabeln in der Mauer, die den Strom der Elektrizität leiten. Sie transportieren ihn viele Kilometer von den Kraftwerken. Ich verstehe nichts davon. Weiß nicht, was das genau ist, kaum jemand weiß es. Die Physiker können es erklären. Ich spiele einfach Gott. Ich mache Licht. Wenn es nicht funktioniert, hole ich den Elektriker.“
          
          Hannah war wütend so verknüpft zu sein ohne zu wissen wie. Zahllose Netzwerke in ihrer Wohnung. Der Fernseher, wie kamen die Bilder in den Kasten? Nie hatte sie die Erklärungen verstanden, die Max versucht hatte; detailgenau, wie alles zusammenhing, wie das gesendet wurde, die Systeme. Bewundert hatte sie ihn; wie er alles so genau wusste und so vernünftig erklärte und ihr war alles noch geheimnisvoller erschienen.
          
          An der U-Bahnstation stand der Mann und dirigierte die leere U-Bahn zu sich heran. Dann stieg er ein in die nachtschwarze Führerkabine und fuhr los. Alles einsteigen. Videotapes flimmerten im Abteil. Eine alte Frau erzählte von ihren Sorgen mit dem Installateur. Das gehörte sich nicht. Niemand kannte sie. Sie wurde streng gemustert. Ein Mann telefonierte lauthals mit seinem Handy, das war ganz normal. Er schimpfte offenbar mit seiner Freundin im Irgendwo. Ein Jugendlicher wippte im Takt zu unhörbarer Musik, er hatte die Stöpsel des Walkman im Ohr. Auch das war ganz normal. Hannah schwitzte. Sie fuhren durch die dunklen Röhren mit atemberaubender Geschwindigkeit und alle versuchten Abstand zu halten, ins Leere zu schauen, sie klebten zu eng aneinander, die Privatheit war gefährdet. Privatpersonen im öffentlichen Raum schotteten sich gegeneinander ab. Man wollte sich nichts sagen, wollte nur aneinander vorbei, die Strecke überwinden zum Ziel. Jeder hatte ein Ziel. Hannah hatte keines. Sie wollte ankommen. Es gab keinen Ort. Bewegen im U-Bahnnetz. Max war fort. Gedränge am Ausstieg. Niemand sah sie an.
          
          Elisabeth war in Indien und Klara in Griechenland. Mit dem Flugzeug in andere Schaltpläne verteilt worden. Autobahn. „Es ist seltsam,“ sagte Oma, „man steigt in ein Auto ein und wie durch Zauberei kommt man an, wo man hinwollte. Wie macht ihr das bloß?“ „Heute geht das auch mit Flugzeugen, Oma. Wir essen frische Kiwis aus Australien und Orangen aus Israel. Zahllose Verbindungen sind geknüpft, es funktioniert.“ Hannah schüttelte sich. „Ich will eine durchschaubare Welt. Eine, die mir ganz gehört. Und doch, ist es nicht fein mit der Tiefkühlkost für jeden Geschmack? Und mit der Waschmaschine? Und dem Fernseher? Alle wollen das. Alle überall auf der Welt. Alle wollen Autobahnen. Die Welt wird zum Fußboden, auf den wir spucken. Wir sind Ameisen im Räderwerk zahlloser Netzwerke, die größer und größer sind als unser kleines Hirn. Es gibt keinen mehr, der sie ganz versteht, sagt man. Im Internet Fluten von Informationen und 900.000 Bücher und Millionen Produkte. Ströme, Kanäle. Oben schwimmen nur die mit klaren Zielen, klarer Entscheidung, was man will. Es gleitet weg. Dahintreiben. Im Sand versinken. Die Bilder-fluten. Worte. Es verpickt sich. Max! Sie bauen dir ein neues Herz ein, Hannah, das alte ging kaputt. Sofern du die Euro hast, ist alles wunderbar! Wunderbare Welt! Das Auto fährt 180. Das brauche ich jetzt. Ich bin schwarz. Innen. Ich schleudere dahin. Im Fadenkreuz der Netzwerke.“
          
          Hannah Winter wurde gegen 6 Uhr abends aus ihrem Wagen geborgen und in ein Krankenhaus gebracht. Ein Lastwagenfahrer sah auf der Autobahn, wie der kleine Mazda gegen die Leitplanken schleuderte, sie durchschlug und über die Böschung drei Meter abstürzte. Mit seinem Handy verständigte er die nahegelegene Polizei und den Notarzt. Die Einsatzwagen waren sofort zur Stelle. Hannah war schwer verletzt. Ihre Rippen waren gebrochen, ihr Brustkorb gequetscht, sie hatte eine Gehirnerschütterung. Sie konnte den Ärzten stammelnd mitteilen, dass ihr 8-jähriger Sohn seit drei Stunden allein zu Hause in Wien in ihrer Wohnung saß und auf sie wartete. „Und ich weiß nicht, wo Max ist“, dann verlor sie das Bewusstsein. Im Krankenwagen erhielt Hannah jede erdenkliche Hilfe. Der Arzt benachrichtigte die Polizei Wien, man möge die Wohnung von Frau Hannah Winter ausforschen, dort befände sich der unbeaufsichtigte Sohn der schwer verletzten Frau, die soeben ins Krankenhaus überstellt wurde. Mit Hilfe des Computers ermittelte die Polizei Wien in Sekundenschnelle über das Melderegister die Wohnung von Hannah, Max und Paul Winter in der Oberen Donaustraße im 2. Bezirk. Das Jugendamt wurde benachrichtigt und sofort machte sich eine Frau auf den Weg um Paul sanft zu informieren. Paul war hungrig, aber nicht beunruhigt gewesen. Mama konnte aufgehalten worden sein. Sie hatte viel geweint in der letzten Zeit, seit Papa weg war. Wo Papa bloß hin war. Es läutete an der Tür. „Hallo, ich bin die Vera.“, sagte die Frau. „Du musst jetzt sehr tapfer sein. Deine Mama hat einen Unfall gehabt und ist im Krankenhaus. Aber sie wird sich wieder erholen. Ich komme vom Jugendamt. Das ist mein Ausweis. Ich werde heute nacht bei dir bleiben.“ Frau Vera Graf war über 50 und kannte sich gut mit Kindern aus. Sie redete viel mit Paul. Über den Unfall. Über den Papa.
          
          Und Paul beruhigte sich. Sie kochte ihm ein Abendessen und brachte ihn zu Bett.
          Als er schlief, setzte sie sich an den Computer und gab in die google-Suchmaschine „Max Winter“ ein. Max Winter, Sozial-reformer und Journalist von 1870 bis 1937 fand sie da, Gebäude am Max Winter-Platz, ein Max Winter hatte sich sogar in dem Gästebuch des Kindertenniscamps eines Wiener Tennisclubs eingetragen, dann gab es noch Max Winter, den Detektiv, kein Lebenszeichen von Pauls Vater, Hannahs Mann, Computerspieleprogrammierer. In seiner kleinen Firma, die er mit zwei Kollegen betrieb, hatte er gesagt, er wollte einige Zeit an einem Programm ungestört zu Hause arbeiten, an sein Handy ging er nicht ran, auf emails antwortete er nicht, so wusste niemand, wo er war. Vera machte sich Sorgen, dann legte sie sich in Hannahs Bett und schlief ein.
          
          Hannah schlief schlecht. Sie hatte starke Schmerzen in der Brust, Beklemmungen und Atemnot. Sie klingelte nach der Schwester, doch noch bevor diese bei ihr war, verlor sie das Bewusstsein. Lungenversagen. Hannah wurde an ein Beatmungs-gerät angeschlossen. Die Lunge war gequetscht worden und verletzt, schmerzstillende Medikamente, Medikamente, die die Heilung beschleunigen sollten, Vitamine, Mineralstoffe und Spurenelemente bekam sie zur Kräftigung mit Infusionen zugeführt. Hannah war verkabelt. Eine freundliche Schwester hatte ihr alles ausführlich erklärt, dass jemand bei Paul war, dass man Max suchte, dass alles wieder gut werden würde, sie solle unbesorgt sein, dann würde sie schneller wieder gesund. Hannah konnte schwer sprechen, das Beatmungsgerät presste die Luft gewaltsam in ihre verletzten Lungenflügel, regelmäßig.
          
           
          Max lag auf dem Rücken und schaute in den Himmel. Weiße Wölkchen fächerten sich auf. Er war sich jetzt ganz sicher. Hannah und er konnten nicht mehr zusammen leben. Und Paul? Natürlich war für Paul das Nest, das sie beide ihm boten, wichtig. Er würde leiden, wenn er wegginge. Er litt noch immer, weil Hannahs Mutter, seine geliebte Kärntner Oma, im letzten Jahr gestorben war. Aber ganz sicher war es für das Kind schlimmer, wenn er bliebe. Hannah und er hatten sich nur noch gestritten, wenn sie überhaupt noch miteinander geredet hatten. Ihr passte die unkonventionelle Art nicht, wie er sein Leben lebte. Er liebte es, manchmal bis in die tiefe Nacht zu arbeiten und hundert Zigaretten zu rauchen. Wenn sein Projekt dann gediehen war, brauchte er eine kreative Pause und er kam kaum noch aus dem Bett. Hannah mit ihrem Lehrerinnenjob und ihrem geregelten Leben hatte kein Verständnis für seine Arbeitswut und kein Verständnis für seine Faulheit. Und sie warf ihm vor, dass sich sein letztes Spiel überhaupt nicht gut verkauft hatte und er kaum etwas zum Lebensunterhalt beitragen konnte. Hannah versteht nichts mehr von mir. Wie sie mich früher liebte, verabscheut sie mich jetzt. Sie ist eine liebe Mutter. Hannah und Paul werden ohne mich allein besser zurechtkommen. Wir werden unsere Einsamkeiten nicht mehr ineinander spiegeln. Ich werde weggehen. Ich werde wegfahren. Ich werde an meinem Projekt arbeiten und niemand wird mich schief anschauen. Tag und Nacht werde ich arbeiten. Ich werde Carlo besuchen. Er wird nicht fragen und ich habe meine Ruhe. Dann werden wir weitersehen. Max stand auf und stieg in sein Auto, er sah auf die Uhr, es war kurz nach drei Uhr. Das wollte er sich für immer merken. Am 3. August 2004 um 15 Uhr hatte er seinem Leben eine neue Richtung gegeben. Und jetzt würde er aufbrechen in eine andere Zukunft. Bis zum Abend würde er es nach Südtirol schaffen von hier aus dem schönen Kärntner Bergland. Er schaute kurz auf sein Handy. Nein, er würde Hannah nicht anrufen. Sie hatte ihn verletzt. Sie hatte ihn angeschrieen, dass er für eine Medien- und Konsumwelt noch mehr Konsum und Pseudowelten erzeugen wollte und gar nicht in der Wirklichkeit lebe. Sie sollte merken, dass niemand, auch sie nicht, so mit ihm reden durfte. Schließlich war er Max, Max Winter, der mit größter Selbstverständlichkeit jede komplizierte Spielvariante in Direkt X programmieren konnte. Da gab es nicht viele in Österreich. Das brauchte Kenntnisse und Geduld und Logik. Respekt, meine Dame, ich fordere Respekt. Pfeifend fuhr Max über die Landstraßen zur Grenze. In Thörl-Maglern hielt er an und trank einen Kaffee. Er überflog die Kronenzeitung. Und plötzlich stutzte er. Da stand sein Name. „Gesucht wird Max Winter!“ Sogar ein Foto von ihm war da. Er las den Artikel.
          
          Frau Hannah Winter,39,Lehrerin, Ehefrau von Max Winter, 36, Computerfachmann, fuhr am 31. Juli um 18 Uhr mit überhöhter Geschwindigkeit auf der Westautobahn von Wien Richtung Linz. Sie kam mit ihrem Mazda 2 ins Schleudern, durchschlug die Leitplanke und stürzte bei Linz etwa 3 Meter über eine Böschung ab. Ein Lastwagenfahrer alarmierte Rettung und Polizei. Max Winter ist unauffindbar. Der Zustand seiner Frau Hannah, die ins Linzer Landesrankenhaus eingeliefert wurde, ist nach wie vor kritisch. Der Sohn Paul wurde mittlerweile bei den Großeltern väterlicherseits untergebracht, da Hannah Winters Eltern bereits verstorben sind. Auch Max Winters Eltern wissen nichts über seinen Verbleib. Wir ersuchen Max Winter dringend sich zu melden.
          
          Völlig verstört holte Max sein Handy. Er rief im Linzer Landeskrankenhaus an und fragte nach Hannah. „Herr Winter, dass Sie sich endlich melden! Es tut uns sehr Leid, wir haben alles versucht, aber Ihre Frau Hannah Winter ist heute Nachmittag um 15 Uhr an einer Gehirnblutung gestorben.“`}
            ,
          </div>
        ),
        "Der Zauberbrunnen": <div>{``}</div>,
        Zoom: <div>{``}</div>,
        "Maria und die Kastanien": <div>{``}</div>,
        "Ein Krimianfang": <div>{``}</div>,
      },
    },
    Malerei: {
      tag: "",
      title: "",
      description: (
        <CardMedia
          component="img"
          alt=""
          image="public/matisse_sorrow-of-the-king.jpg"
          sx={{
            aspectRatio: "16 / 9",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        />
      ),
    },
    Photographie: {
      tag: "",
      title: "",
      description: <div />,
    },
    "Deutsch-Unterricht": {
      tag: "",
      title: "",
      description: <div />,
    },
    Sachbuch: {
      title: "Frauen und ihr Erbe",
      description: (
        <div>
          <i>{`Veröffentlichung im März 2021

`}</i>
          <StyledTypography>
            Als ebook z.B. bei{" "}
            <a href="https://www.amazon.de/Frauen-ihr-Erbe-Marianne-Peternell/dp/3754970380">
              amazon für den Kindle.{" "}
            </a>
            Sowie als ebook im epub-Format und als Taschenbuch in jeder
            Buchhandlung bestellbar z.B. beim{" "}
            <a href="https://www.morawa.at/detail/ISBN-9783754970386/Peternell-Marianne/Frauen-und-ihr-Erbe">
              Morawa{" "}
            </a>
            <b>{`
            
Beschreibung`}</b>
            {`
Im Wesentlichen befasst sich das Sachbuch mit der Frage nach dem Gender von Menschen, nach dem historisch Gewachsenen von Frauen- und Männerentwürfen in ihrem Menschenleben. Zahlreiche Facetten der weiblichen Rolle 'Mutter' werden dargestellt. Es werden auch bedeutende Beiträge zum Diskurs des Frauen- und Männerbildes, des Menschenbildes aus der Geschichte (Hegel, Kant, Judith Butler, Maria Montessori) herangezogen. Dabei wird auch die Frage nach Patriarchat und Matriarchat gestreift. Ich befasse mich damit, eine möglichst eigenständige Positionierung herauszuarbeiten und besonders die Frage der Fruchtbarkeit, der Reprodiktion der Gesellschaft und der Rollenverteilung zwischen Frauen und Männern für das Individuum und für die Gesellschaft zuuntersuchen. Ich beschäftige mich schon seit Jahrzehnten mit der Thematik meines Buches, ich war auch im Radio Agora vor vielen Jahren zum Thema als Interviewpartnerin in einer einstündigen Sendung zum Thema 'Frauen und ihr Erbe'. Ich habe Germanistik und Geschichte studiert, viele Jahrzehnte an einer HTL und am BFI unterrichtet, bin literarisch produktiv und habe als Alleinerzieherin nebenbei zwei Kinder großgezogen. Ich bin 1956 geboren und seit 2016 in Alterspension.`}
          </StyledTypography>
        </div>
      ),
    },
    Lebenslauf: {
      tag: "",
      title: "Lebenslauf",
      description: (
        <div>
          <ul>
            <li>
              01.06.1956 geboren in Wieting/ Kärnten als Tochter einer
              Schneiderin und eines Schmieds
            </li>
            <li>1962-66 Volksschule in Steiermark und Kärnten</li>
            <li>1966-74 Neusprachliches Gymnasium in Villach</li>
            <li>Juni 1974 Matura in Villach </li>
          </ul>
          {`
Werkstudentin: Studium von Deutsch, Geschichte und Philosophie

Jobs als Kellnerin, Tankwartin, Interviewerin, Deutsch als Fremdsprache Lehrerin, Gruppentrainerin, Pädagogin, Erzieherin, Zeitungsverkäuferin, Malermodell usw.

1980-1982 im Tagesschulheim des BG 15, Dieffenbachgasse als Erzieherin tätig

Mai 1985 Studienabschluss von Deutsch und Geschichte Lehramt

1985/86 Probejahr am Akademischen Gymnasium Wien; Erzieherin im Tagesschulheim des

              BG 10, Ettenreichgasse
1986-87 Deutsch als Zweitprache-Unterricht am BFI Wien

1987-1990 Mitarbeiterin des Wiener Schulservice, Abteilung Schulberatungsstelle für

                  Ausländer
Seit 1987 Lehrerin an der HTL-Donaustadt

6.4.1992 Geburt der Tochter Fanny   
Seminare zur Montessori-Pädagogik
Seminare bei Mauricio und Rebeca Wild

Herbst 1995 Gründung der Montessori-Wild-Kindergruppe „Ich-DuWir“ in Sattendorf/Villach-Landskron

28.1.1996 Geburt des Sohnes Julian

1992-1997 Karenz in Kärnten/Villach

 seit Herbst 1998 als alleinerziehende Lehrerin in Wien, HTL Donaustadt

 seit 1972 Beschäftigung mit Literatur und Schriftstellerei; 2005 Veröffentlichung von Lyrik in „dulzinea 7“; Lesungen

Sommer 2005 Leitung eines Workshops „Kreatives Schreiben“ in der Sommerakademie Zakynthos (Vertretung des Schriftstellers Franzobel)

1.11.2005 zu Gast in der Sendung „Queer durch“ im Radio Agora/Klagenfurt zum Thema „Frauen und ihr Erbe“

2009 Veröffentlichung eines Textes in der Kultur- und Literaturzeitschrift "Sterz" (Streit/Kultur; Nr.101)

1.9.2016 Alterspension


Am 25.5.2018 Lesung in der Buchhandlung "Seeseiten" in der Seestadt Aspern beim 3. Geburtstagsfest der Buchhandlung gemeinsam mit anderen AutorInnen.

nach einigen frühen Versuchen in der Malerei im Jahr 1987, neuerliche Versuche mit der Malerei ab Oktober 2020

März 2021 Veröffentlichung meines Sachbuches "Frauen und ihr Erbe"`}
        </div>
      ),
    },
  };

  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null
  );
  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };
  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const [selectedPage, setSelectedPage] = React.useState<PageKey>("Start");
  const [selectedSubPage, setSelectedSubPage] = React.useState<string | null>(
    null
  );

  const [anchorElements, setAnchorElements] = React.useState<
    Record<string, HTMLElement | null>
  >({});
  React.useEffect(() => {
    const initialAnchors: Record<string, HTMLElement | null> = {};
    for (const page in pageData) {
      if (pageData[page].subPages) initialAnchors[page] = null;
    }
    setAnchorElements(initialAnchors);
  }, []);

  React.useEffect(() => {}, [selectedPage]);

  const handleChipClick = (
    event: React.MouseEvent<HTMLElement>,
    page: string
  ) => {
    setSelectedPage(page);
    setSelectedSubPage(null);
    setAnchorElements((prev) => ({
      ...prev,
      [page]: event.currentTarget,
    }));
  };
  const handleClose = (page: string) => {
    setAnchorElements((prev) => ({
      ...prev,
      [page]: null,
    }));
  };

  const handlePageSelection = (
    event: React.MouseEvent<HTMLElement>,
    page: PageKey,
    subPage?: string
  ) => {
    setSelectedPage(page);
    console.log(subPage);
    if (subPage) {
      setSelectedSubPage(subPage);
      setAnchorElements((prev) => ({
        ...prev,
        [page]: event.currentTarget,
      }));
    } else {
      setSelectedSubPage(null);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        maxWidth: "800px",
        minWidth: "800px",
        width: "800px",
        alignItems: "center",
        justifyContent: "start",
        justifyItems: "start",
      }} // wraps entire page: Welcome & Wrapper
    >
      <div>
        <Typography variant="h2" gutterBottom>
          Willkommen bei
        </Typography>
        <Typography variant="h4">Marianne Marlene Peternell</Typography>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column" },
          width: "100%",
        }} // wraps chips + cards
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "initial",
            width: "100%",
          }} // box for the chips
        >
          {Object.keys(pageData).map((page) => {
            if (!pageData[page].subPages) {
              return (
                <Chip
                  key={page}
                  onClick={(e) => handleChipClick(e, page)}
                  size="medium"
                  label={page}
                  sx={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                />
              );
            } else {
              return (
                <React.Fragment key={page}>
                  <Chip
                    onClick={(e) => {
                      handleChipClick(e, page);
                    }}
                    size="medium"
                    label={page}
                    sx={{
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                  />
                  <Menu
                    anchorEl={anchorElements[page]}
                    id={page}
                    open={anchorElements[page] != null}
                    onClose={() => handleClose(page)}
                    onClick={() => handleClose(page)}
                    slotProps={{
                      paper: {
                        variant: "outlined",
                        elevation: 0,
                        sx: {
                          my: "4px",
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    {Object.keys(pageData[page].subPages).map((subPage) => (
                      <MenuItem
                        key={subPage}
                        selected={subPage === "Netzwerke"}
                        onClick={(e) => handlePageSelection(e, page, subPage)}
                      >
                        {subPage}
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              );
            }
          })}
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid component="article" size={{ xs: 12 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(0)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 0 ? "Mui-focused" : ""}
          >
            <StyledCardContent>
              {selectedSubPage ? (
                <>
                  {pageData[selectedPage].title && (
                    <Typography gutterBottom variant="h6" component="div">
                      {pageData[selectedPage].title}
                    </Typography>
                  )}
                  <Typography gutterBottom variant="body2" component="div">
                    {pageData[selectedPage].subPages?.[selectedSubPage] ?? (
                      <em>Unterseite nicht gefunden.</em>
                    )}
                  </Typography>
                </>
              ) : (
                <>
                  {pageData[selectedPage].title && (
                    <Typography gutterBottom variant="h6" component="div">
                      {pageData[selectedPage].title}
                    </Typography>
                  )}
                  <Typography gutterBottom variant="body2" component="div">
                    {pageData[selectedPage].description}
                  </Typography>
                </>
              )}
            </StyledCardContent>
          </SyledCard>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
}
