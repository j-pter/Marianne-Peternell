import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import {
  Avatar,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  minHeight: 150,
  flexDirection: "column",
  padding: 0,
  width: "100%",
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
  wordWrap: "normal",
  flexDirection: "column",
  whiteSpace: "pre-wrap",
  flexShrink: 0,
  flexGrow: 0,
  width: "100%",
  padding: 16,
  "&:last-child": {
    paddingBottom: 16,
  },
  textAlign: "left",
  overflowWrap: "break-word",
  wordBreak: "normal",
});

const StyledTypography = styled(Typography)({
  width: "100%",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  whiteSpace: "pre-wrap",
  textAlign: "left",
  overflowWrap: "normal", // or "anywhere"
  wordBreak: "break-word", // fallback for older browsers
});

const StyledToolbar = styled(Box)(({ theme }) => ({
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  // border: "1px solid",
  // borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "4px 4px",
}));

export default function MainContent() {
  type PageKey = keyof typeof pageData;
  type PageData = {
    [key: string]: {
      tag?: string;
      title?: string;
      description: React.ReactElement[];
      subPages?: Record<string, React.ReactElement>;
    };
  };
  const pageData: PageData = {
    Start: {
      tag: "",
      title: "Willkommen",
      description: [
        <div>
          <div>{`Diese Webseite dient dem Gedenken an Marianne Marlene Peternell, die leider viel zu früh am 10. Januar 2025 verstorben ist. Zu Lebzeiten hat sie bereits eine Webseite betrieben (damals mariannepeternell.online), deren Inhalte hier in ihrem Sinne weitergeführt werden.

`}</div>
          <b>Begrüßungstext von Marianne Peternell</b>
          {`
Ich habe auf diesen Seiten Texte und Bilder veröffentlicht, die im Laufe der letzten Jahre entstanden sind.

Es handelt sich um Literarisches, Malerisches, Theoretisches und Persönliches.
Ich bemühe mich, die Homepage immer wieder zu aktualisieren.

Viel Vergnügen! `}
        </div>,
      ],
    },
    Gedichte: {
      title: "",
      description: [
        <Container
          sx={{
            diplay: "flex",
            flexDirection: "column",
            justifyItems: "center",
          }}
        >
          <p>
            {`Wildes Kopieren ist nicht erlaubt. Alle Texte dieser homepage unterliegen dem Copyright.
            `}
          </p>
          <CardMedia
            component="img"
            src="/assets/matisse_sorrow-of-the-king.jpg"
            alt="Henri Matisse - Die Traurigkeit des Königs (1952)"
          />
          <i style={{ textAlign: "center" }}>
            Henri Matisse - Die Traurigkeit des Königs (1952)
          </i>
        </Container>,
      ],
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
Immer nett spitz 
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
      description: [
        <Container
          sx={{
            diplay: "flex",
            flexDirection: "column",
            justifyItems: "center",
          }}
        >
          <p>
            {`Wildes Kopieren ist nicht erlaubt. Alle Texte dieser homepage unterliegen dem Copyright.
            `}
          </p>
          <CardMedia
            component="img"
            src="/assets/matisse_spanisches stillleben.jpg"
            alt="Henri Matisse - Spanisches Stillleben (1911)"
          />
          <i>Henri Matisse - Spanisches Stillleben (1911)</i>
        </Container>,
      ],
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
        "Der Zauberbrunnen": (
          <div>{`Ich saß an einem Tisch in diesem verrauchten Lokal, wo jetzt alle hingingen, nahe der Tür, trank Wein und unterhielt mich damit, Menschen zu beobachten. Roman kam und setzte sich zu mir. Ich schaute in sein Gesicht, in dem alles so groß und weitläufig war, die Nase, die Ohren, die Lippen, die dunklen Augen und verlief mich ein bisschen in dieser Landschaft, ich mochte ihn wirklich, er war ein feiner Kerl. Das Bittersüße des Mandelbaums hatte er mir gezeigt, die schwarze Milch und die Asche Claasens, die auf dem Herzen klopft. Sein schwatzkantiges Wien hatte ich kennen gelernt und das Lachen im Keller über die giftigen Witze.

Da kam Peter herein, winkte zu uns herüber, schwenkte seinen dunklen runden Leib mit Eleganz zwischen den Stühlen durch, umarmte uns, setzte sich. Er schimpfte. „Seit Jahren habe ich nichts anderes getan als Reden, Schreiben und Vorlesungen halten, Sätze bilden, nach Formulierungen suchen. Kein Wort ist mir noch präzis genug, die Wörter fliegen wie Sandkörner durch mein Gehirn.

Ich habe Kopfschmerzen und kann nicht schlafen. Die Nichtigkeit der Wörter soll für immer untergehen in den Farben. Ich sehne mich nach einem gewaltigen Bilderrausch.“ "Ich will schreiben Peter. Ich versuche kleine Szenen zu beobachten, zum Beispiel wie Menschen ein Lokal betreten. Ich finde das spannend." "Mach es einfach, Rebekka. Schreib jeden Tag ein bissel was, es wächst in Ringen, du wirst sehen."

Roman sprang auf und lief aus dem Lokal und kam herein mit forschem Gesicht, warf ruckartig Blicke nach allen Seiten wie ein Revolverheld. Erfreut über mein Gekicher lief er wieder hinaus und kam ganz schüchtern herein mit verstör- tem Gesicht, dann wieder, in den Knien gebeugt, viel kleiner, fragend; wieder und wieder verwandelt kam er herein und ich lachte. Ich hielt ihn fest und lief selbst hinaus in die Nacht und kam herein, tat als bemerkte ich die beiden nicht, schaute mich forschend um und ließ mich anschauen, bis ich die beiden ins Blickfeld bekam, dann sprintete ich strahlend auf Roman zu, breitete meine Arme aus, und sagte fordernd "Du. Dich will ich." Roman lächelte. "Das ist stark. Machen wir ein Kind, Rebekka. Ich weiß nicht, ob ich so einfach eins machen kann. Wir können ja ein Retortenbaby machen. Ich meine so eins, wo sie meinen Samen in dein Ei und das Ganze dann in deinen Bauch pflanzen." Ich schaute ihn unbehaglich an. " Rebekka soll schreiben, das will sie", schimpfte Peter. "Ich wün- sche mir aber auch ein Kind. Beides soll sein. Das will ich." Ich sprang auf und warf meinen Sessel um. "Heb ihn auf!", rief ich wild Roman zu, Roman blieb sitzen. "Heb ihn auf!" schrie ich noch einmal und schüttelte meine Haare durch den Raum. Ein junger Mann mit einem frischen, offenen Gesicht, schmal, fast mager mit scharfgeschnittenen Zügen und sehr kurzem Blond- haar bahnte sich einen Weg von der Theke auf mich zu. Er trug eine Blumenvase mit vielen Frühlingsblumen, die er offenbar von der Theke weggenommen hatte, und stellte sie mit beiden Händen fest vor mir auf den Tisch. "Gregor", sagte er und hob den Sessel auf. Er schaute mich an und sagte "Kundera". Ich nickte "Marquez", sagte ich. Er "Paolo Conte". "Ja.", antwortete ich." Gregor ist ein schöner Name. Ich werde meinen Sohn Gregor nennen. Ich heiße Rebekka". Er "In einer Woche, gleiche Zeit, gleicher Platz" und weg war er. "Du freundest dich aber schnell an", giftete Roman. 

Peter sagte "Du wirst viele Kinderchen bekommen in vielen Farben, Rebekka:" 
 
Während Peter von den Farben zu erzählen begann, die er in den Schatten fand, trank ich aus, nahm meinen Spazierstock, meine Melone und mein Sakko, verbeugte mich liebenswür- dig und wanderte einsam und fröhlich Richtung Hernals in meine Heimat.
 
Es schrie und ich ließ seine Schreie durch mich durch wie Messer. Das Baby schrie unerbittlich das Duftende, Warme, Weiche, Runde an. Dort musste alles sein, was es brauchte. Alles. Es kam nicht. Sein Körper krümmte sich vor Schmerzen, vor Hunger, vor Sehnsucht, vor Angst. Getrenntheit. Absoluter Schmerz. Das da war da. Das Baby roch es, leckte, biss hinein, saugte mit aller Kraft. Nichts. Die Verzweiflung schüttelte es. Es gibt deins, mein Kind. Ich hielt es in den Armen. 

Ich dämmerte fort.

Ich saß ganz oben in den dünneren Ästen des Apfelbaumes und schaute dem Eichhörnchen zu, wie es elegant zwischen den Bäumen hin und her sprang und dabei Töne von sich gab wie ein seltener Vogel. 

Der Himmel war tiefblau, der Baum breitete sich mächtig aus rund um mich und ich fühlte mich sehr geborgen in meinem Garten. Ich freute mich, dass der Garten, mein verwunschener Dornröschengarten rundum von anderen Gärten umgrenzt und für jeden unerreichbar war. Ich lehnte mich an den Stamm und versuchte die unterschiedlichen Grüntöne des Baumes zu sehen. Das Licht in den Blättern. Zahlloses Grün. 

Ich kletterte vom Baum, brach Salbei und verbrannte etwas davon. Mitten im Garten legte ich einen Kreis aus großen weißen Flusskieseln. Ich setzte mich in die Mitte und schwieg feierlich. In ein Stück Holz ritzte ich lange Zeichen für alle Verletzungen, die Gregor mir zugefügt hatte. Dann begrub ich das Holz und den Ärger.

In den kleinen Springbrunnen legte ich einen Bergkristall. Mit großem Ernst brachte ich eine Schale Milch zum Was- ser als Geschenk für die kleine Schlange, die dort wohnte. 
 
Ich wachte auf. Ich tauchte auf aus einem tiefen Brunnen, aus einer unendlichen Ferne. Das Baby schrie, es klammerte sich an. Es gibt deins mein Kind, es gibt deins. Ich stand auf und trug das aufgelöste kleine Wesen durch die Wohnung. Legte mich wieder hin. Und dann spürte ich. Aus den Tiefen kam es angebraust. Fast hörte ich es. Es kam mit Gewalt, es tat weh, es drückte meinen Busen innen auseinander, das Baby schob sich seitwärts zum Brunnen und saugte sich fest, weißes Licht, Überfließen, die Quelle, der zarte Körper, das lustvolle reiche Saugen, kleine Schauer auf meiner Haut. Der Busen, ein Zauberbrunnen. Je mehr man herausnimmt, umso mehr ist drinnen. Wie in der Liebe. Alles ist da.
 
Ich ordnete alle Dinge im Haus, ein großer Frieden war über mich gekommen, als hätte ich stundenlang geschlafen. Gregor kam und ich gab ihm zu essen. Er redete, er redete, er redete. Stundenlang erzählte er von der Arbeit. Ich hörte ihm zu, nickte, machte Anmerkungen. Dann legte ich das große Küchenmesser auf den Tisch. Die Spitze zielte auf Gregor. Doch Gregor hatte sich warm geredet. 

Dann begann ich ohne Umstände mitten in seine Rede hinein zu erzählen. Ich erzählte vom Zauberbrunnen und vom Berg- kristall, von der Milch für Hannah und für die Schlange. 

Gregor staunte mich an: "Ich dachte, du erlebst nichts und hättest nur Belastungen. Ganz schön verrückt, was du erzählst und schön irgendwie. Ich wär froh, wenn ich da auch irgend- wo vorgekommen wär, wenn da irgendwo Platz wäre für mich." " Tag und Nacht, Wochen und Monate hab’ ich immer nur ein bis drei Stunden geschlafen. Das ist das Ge- schenk, das ich bekomme. Komm zu uns, schlaf bei uns, teil mit uns. Gregor, bitte.“ Gregor grinste schief. "Was willst du, Rebekka. D u solltest kommen. Zu mir. Du solltest das Kind nach mir reihen. Endlich!"

Ich schaute ihn bestürzt an. Ich sprang auf, holte Honig und bestrich das Küchenmesser damit, dann leckte ich mit hoher Aufmerksamkeit den Honig von der Schneide, langsam und angespannt. "Wenn man seine Gedanken darauf fixiert, sich nicht am Messer zu schneiden, spürt man keine Schmerzen mehr.", sagte ich wild in Gregors Augen. "Gute Nacht", ich ging aus dem Zimmer und schloss sorgfältig die Tür.


Ich saß nackt vor dem großen dunklen Spiegel, der fast blind war und beobachtete die Linien meines müden, nun volleren Gesichts. Gregor lebt hier nicht mehr. Hinter die Schleier ge- sehen mit weltalten, schwarzen Augen. Meine Mutter bäckt Kuchen. Grillengezirp und Vogelgezwitscher. Das Feuer, das in mir brennt. Das lustige Weiberleben, das alte Weiber- wissen, die Lebensfreude, die Liebhaber, die sich heimlich davonstehlen. Wie lustig das Leben sein könnte. Die Freude und der Reichtum der Brunnen, der Gärten sind verloren. Ich verstumme.

Immer weitermachen. Tag und Nacht unerschöpflich. Schreien. Mangel. Verzweiflung. Überfluss. Nahrung. Lust. Körpern. Das zarte Körpern. Das Greifen, das Fließen. Zauberbrunnen der Tiefe, der Träume, des Lichts.
 
Roman und Peter tanzten Tango, sie schmiegten Bein an Bein, sie schlängelten sich durch den Rhythmus der Nacht unter dem johlenden Beifall der Freunde. Es wurde gefeiert. Ich saß da und bewunderte sie. Sie feierten Peters Erfolg. Seine Schattenbilder hatten die besten Kritiken, Roman schrieb Lobeshymnen für die Zeitungen. Hannah schlief im Bett nebenan und ließ sich von dem Lärm nicht stören.

Bald saß Roman neben mir. "Es gibt fast keine Sprache für meins, ich bin müde", lächelte ich. "Ist es ein Problem für dich, dass Peter so erfolgreich ist und deine Gedichte kaum einer kennt, nur so hoffnungslose Fans wie ich eine bin?" "Bohre nicht in meinen Wunden. Natürlich ist das schwierig.“ "Ich frage nur, weil kaum einer mein Kind kennt, du hast sie niemals angeschaut, mich niemals besucht, seit sie bei mir ist. Das ist hart." "Ich verstehe nichts von diesen kleinen Monstern und ihre Mütter haben wenig Zeit." "Ich brauche dich, Roman. Es könnte auch dein Kind sein." "Welches Stück von mir brauchst du Rebekka?", grinste Roman. "Dich ganz, kein abgetrenntes Stück, du bist in meinen Augen nicht einer von diesen kastrierten Männern, die nur ein Stück geben können." "Soll ich nachts das Baby wickeln, weil Gregor keine Lust dazu hat, ist es das?" "Ich brauche Gegenwart, unerhörte Gegenwart und Aufmerksamkeit, etwas, was die Männer den Frauen in diesem Land nicht zu geben bereit sind. Hingabe. Ohne Forderung. Ich will alles." "Weshalb sollte es etwas geben, was keinen Preis hat, Rebekka?" "Weil das die Liebe ist. Ich habe es gelernt von Hannah, sie hat mich gelehrt, was Hingabe ist." "Du willst ein Verschmelzen, wie eine Mutter mit ihrem Baby noch teils verschmolzen ist, weil sie es mit ihrem Körper nährt." "Ich fordere Hingabe, die restlose Hingabe! Die Hingabe eines erwachsenen Mannes, nicht die des bedürftigen Kindes in diesem Mann. Ihr habt alle Angst.

Und Hingabe heißt geben, da sein, geben ohne Rechnung, Aufmerksamkeit. Ich denke, es wird nicht gehen ohne ein lustiges Weibervolk rundum.

Doch wir könnten es immerhin versuchen in das Land hinter den Spiegeln, in das Land der Zauberbrunnen zu kommen, in dem alles Überfluss ist, wenn die Sehnsucht zuvor Körper, Herz und Hirn zerrissen hat und.. Ich bin gekommen um dich mitzunehmen, mit in den Schmerzton, den Sehnsuchtston, in die geisterhafte Musik der unerhörten Gegenwart. Ich muss gehen." 

Ich wickelte mich in meinen dunkelroten Sari, holte Hannah, setzte mich vor Roman auf den Boden, stillte das Kind und schaute in den Mann hinein.`}</div>
        ),
        Zoom: (
          <div>{`Klarissa hatte kaum etwas zu sagen. Sie träumte viel. Sie saß in der Klasse und sah träumend auf den Baum vor dem Fenster. Er sah finster aus mit seinen vielen dunklen Blättern. Dahinter ein Haus. Ein Haus mit vielen Giebeln, Erkern, der Putz blätterte ab. Sie war sicher, dass es ein Geisterhaus war. Oder zumindest ein Haus, in dem merkwürdige Dinge vor sich gingen. Nie hatte sie jemanden hineingehen oder herauskommen sehen. Heute hörte sie Geräusche von dort. Doch nur undeutlich. Sie stieß Fatma an und sagte es ihr flüsternd. Fatma war die einzige, mit der sie darüber sprechen konnte. „Es ist jemand da. Es klopft.“ Fatma schrak zusammen. Sie war dabei zu rechnen. 35+27. Das war nicht einfach. „Was?“ „Es klopft. Schau.” Fatma schaute. Sie flogen aus dem Klassenzimmer in das Haus. Ein alter Raum war es, ein alter Raum mit abgeschabten Möbeln. Ein elegantes geschwungenes Sofa mit Plüschbezug, ein riesiges Bild, das einen Offizier zeigte, Säbel an den Wänden, kleine Tischchen und Stühle. Niemand zu sehen. Sie wandten sich nach links, stiegen die Treppe hinauf, irgendwo klopfte es. Im oberen Stock begegnete ihnen niemand. Sie schlichen den Gang entlang, er war schon lange nicht ausgemalt worden, die Wände waren geschwärzt. Sie spürten die Anwesenheit von etwas Bedrohlichem, Ungeheuerlichem, etwas Grausames war hier. Eine alte Frau kam gestützt auf einen Stock durch eine Tür gehumpelt. Sie hatte viele Runzeln und schaute sie nicht an. „Hannah!“, schrie sie schrill. „Hannah!“ Da kam eine Frau, sie war rüstig, doch nicht mehr jung angelaufen. „Ja, Mama? Du sollst doch nicht aufstehen, Mama! Brauchst du etwas?“ „Nie bist du da, wenn ich dich brauche!“,schrie die Alte und schlug die jüngere mit dem Stock auf den Kopf. „Ich habe schon lange gerufen! Ich kann nicht allein aufs Klo gehen, das weißt du. Wozu bist du überhaupt da?“ „Ja Mama, entschuldige Mama, ich habe mich nur kurz hingelegt. Ich war müde. Du weißt, letzte Nacht!“ Dann stütze sie die Alte und die beiden humpelten davon. Klarissa und Fatma wussten, dass in diesem Haus viele Geheimnisse lagen. Im Garten der Villa hatten Räuber einen Schatz vergraben, es gab einen hohen Zaun um den Garten. An der verborgenen Stelle ging es tief nach unten, eine Falltür. Ein eisernes Gitter fiel herab und sie hatten keinen Schlüssel. Niemand konnte herausfinden, wer den Schatz hier vergraben hatte, wem er gestohlen worden war. Die Räuber konnten jeden Moment wieder kommen, wie wilde Hunde umschlichen sie ihren Schatz. Fatma und Klarissa mussten fliehen. Klarissa half Fatma mit einer Räuberleiter aus dem Loch, Fatma zog Klarissa, dann rannten sie, sie waren hinter ihnen her. „Hannah!“, schrie es wieder aus dem Haus. Schwarze Hunde auf dem Grundstück. Da flogen Fatma und Klarissa zurück in ihre Klasse. Der Lehrer schimpfte. „Ich werde mit euren Müttern sprechen. Vielleicht sollte ich euch auch zur Psychagogin schicken. Ständig seid ihr mit den Gedanken irgendwo. Ihr sollt in der Schule lernen! Rechnen, schreiben, lesen! Ich bemühe mich, ich bin geduldig, aber ich kann nicht Kinder unterrichten, die ständig mit offenen Augen träumen. Ich werde einen schwarzen Punkt machen bei dir Fatma und bei dir Klarissa. Morgen machen wir Konzentrationsübungen. Danach geht es weiter. Ich hoffe, ihr werdet besser mittun, wer mittut und die Aufgaben erfolgreich löst, bekommt ein Zuckerl. Also, bis morgen!“ Fatma und Klarissa standen mit hochrotem Gesicht in der Klasse. Ein paar Kinder tanzten um sie herum, haha, ihr müsst zum Psychologen, ihr seid nicht ganz richtig im Kopf. Und Zuckerl bekommt ihr auch keins. Ihr habt ja gar nicht aufgepasst. Ein Mädchen schlug Klarissa ins Gesicht, nur leicht, doch der Schlag wog schwer. Mit gesenktem Kopf liefen Fatma und Klarissa nach Hause.

II.
Herbert stand schon die dritte Stunde in der Klasse. Er sah Klarissa nur aus den Augenwinkeln und schon war er wütend. Er mochte sie und er mochte sie nicht. Sie war nicht ganz real die kleine Fee, Wesen zwischen Traumland und Hierland, wer sollte sie erden? Nie war sie, wo alle waren, stets war sie abwesend, spann sich ein, am liebsten würde er vor ihrem Gesicht klatschen, aber dann würde sie weinen. Und dann würde er sich schämen, so zart war sie und so stark, das auch. Sie stieß Fatma an. Fatma war ein nettes Mädchen, sie war immer so bemüht und wollte so gern verstehen, was ihr meist misslang, was ihn wiederum herausforderte, ihr so gut wie nur möglich zu helfen. Und nun stieß sie Fatma an. „Klarissa!“ rief er mahnend durch die Klasse, doch sie hörte ihn nicht. Er wollte nicht, dass sie Fatmas Aufmerksamkeit abzog, Fatma lernte schwer, Klarissa tat sich leicht, das war es nicht. Da bat Tonio ihn, ihm zum wer weiß wie often Mal zu helfen. Er verstand die Zehnerüberschreitung noch immer nicht. Georg hatte aus weiß Gott welchem Grund einen Wutanfall und warf einen Stuhl um. Dann schlug er Sebastian auf den Kopf. Herbert musste Entscheidungen treffen. „Andrea“, sagte er, „bitte setz dich zu Tonio und erkläre ihm, wie du 35+27 rechnest!“ Dann ging er zu Georg, er hielt ihn fest. Das durfte er eigentlich nicht, körperliche Berührungen waren verboten, doch er empfand, Georg brauchte das, er hielt ihn fest, während Georg schrie, inzwischen blutete Sebastian aus der Nase. Die Kinder hatten aufgehört zu rechnen. Sie wollten wissen, wie er die Sache meistern würde. Er sprach mit Georg beruhigend und freundlich. Georg schlug auf Herbert ein, Herbert bat ihn leise aufzuhören und hielt ihn wieder fest. Er wusste, Georgs Mutter war vor einem Jahr bei einem Autounfall verstorben, er wusste, Georg musste sein, wie er war und Freundlichkeit konnte er kaum ertragen. Herbert fühlte sich hilflos, denn einige Kinder forderten harte Strafen für Georg, Klarissa und Fatma träumten immer noch, Sebastians Mutter würde morgen da stehen und sich beschweren, sie war aktive Elternvertreterin. Georg war ein Problem. Er bat die Kinder sich in einen Sesselkreis zu setzen. Er zwang auch Klarissa und Fatma aus ihren Träumen, erwähnte die Psychagogin, Zuckerln. Er bat die Kinder, alle Vorwürfe, die sich gegen Georg angesammelt hatten, vorzutragen und er bat Georg sich alles ruhig anzuhören. Er dachte daran, dass er unbedingt irgendwann mit Klarissas Mutter sprechen musste. Anja erklärte, sie wollte nicht, dass Georg so wichtig war, sie musste auch brav sein.

Die Rechenstunde entfiel. Ob sie das Pensum dieses Semester noch schaffen würden? Es war Vorschrift, doch er konnte nicht anders, er interessierte sich für die Kinder, wer sie waren. Er wollte ein guter Lehrer sein.  

 
III
„Mama, in dem Haus vor der Schule wohnt eine alte Frau, die böse ist. Ich glaube, es ist ihre Tochter, die auf sie aufpasst.. Es gibt dort einen vergrabenen Schatz und Hunde, die ihn bewachen. Ich habe alles genau gesehen und Fatma weiß es auch.“

„Du meinst das Haus mit den Türmchen und den düsteren Tannen davor. Ja, es wirkt seltsam, aber ich denke, es steht da ganz verlassen. Ich weiß nicht, welche Geschichte es hat. Du träumst zu viel.“

„Aber ich weiß es genau und Fatma auch.“ Klarissa weinte. Ihre Mutter streichelte sie und fühlte sich hilflos, denn sie wusste nichts zu erwidern. Waren Häuser nur außen? War etwas dahinter? Was wusste ihre Tochter wirklich? Was sollte sie tun?

Sie erhielt eine Vorladung des Lehrers, Klarissa sollte beim Psychagogen vorgestellt werden, da sie mit ihren Gedanken häufig abwesend sei.

Der Lehrer hielt eine längere Rede. Er erklärte, dass Klarissa einen guten Kopf zum Lernen hätte, wenn sie nicht stets wegträumte. Sie lebte in phantastischen Räumen und, was er nicht dulden konnte, sie steckte schlechtere Schüler an. „Fatma träumt nun auch mit offenen Augen. Die Kinder entwickeln eigene Welten. Wir dürfen sie nicht dort belassen. Sie werden verstehen, Frau Horten, dass ich etwas unternehmen muss.“ „Ich weiß nicht.“, antwortete Klarissas Mutter schwächlich, denn sie hatte keine Ahnung, wie sie widersprechen sollte, was sie erklären sollte von ihren eigenen Zweifeln an der realen Welt. Der Lehrer legte ihr ein Papier vor, zeigte ihr, wo sie unterschreiben musste und sie unterschrieb.

 
IV
Mama sitzt neben Klarissa mit ihrem schönen Kleid und der hübschen Frisur im Zug, der voll ist mit Leuten in schönen Kleidern und hübschen Frisuren. Alle Leute in dem Zug haben Angst. Sie zittern. Manche beten und auch Klarissa faltet die Hände und Tränen der Angst rinnen aus ihren Augen. „Nimm dich zusammen und bete!“, sagt eine Frau, als Klarissa sie bittet mit ihr wegzugehen. „Komm mit mir, du kannst mit mir kommen!“, sagt der Lehrer. Heftig schüttelt Klarissa den Kopf. „Wir müssen bleiben.“ Alle warten auf etwas. Alle sitzen da, ergeben in ihr Schicksal, haben Angst und warten. Ein Zug rast vorbei und alle sehen die Toten in dem Zug: grausam verstümmelte Leichen in hübschen Kleidern und mit hübschen Frisuren. Klarissa bäumt sich auf und schreit, ganz laut, sie bebt am ganzen Körper und es tut gut zu schreien.

Sie wacht auf, sie hat geträumt diese Nacht.
 
 
V
In dieser Nacht starb in dem Haus mit den Türmchen vor der Schule Hannahs Mutter. Hannah beschloss das Haus zu verkaufen und aufs Land zu ziehen, zu flüchten. Sie wollte nichts wissen von den Geheimnissen der Vergangenheit.

Ein Käufer interessierte sich für das Haus. Es gab einen kleinen Skandal, als sich herausstellte, dass es ein arisiertes Haus war. Doch niemand kümmerte sich darum, niemand forschte nach, wer Hannah war, wer die nun tote, alte Frau war und niemand fand den geraubten Schatz, der vielleicht wirklich auf dem Grundstück vergraben lag. Frau Horten, Klarissas Mutter, blieb die unsichere zweifelnde Frau, die tat, was man ihr sagte und nicht wagte zu widersprechen

Klarissa lernte beim Psychagogen die reale Welt anzunehmen und ihre Träume als Hirngespinste abzutun. Sie galt als ein bisschen verrückt. Das war eine Last, die sie ein Leben lang begleiten sollte. Immer wieder würde sie zum Psychologen müssen.`}</div>
        ),
        "Maria und die Kastanien": (
          <div>{`Sie saß in der Essecke ihrer Küche. Soeben war sie mit Aufräumen fertig geworden. Es war eine neue Küche. Ihre Tochter hatte sie für sie ausgesucht. Marion war eines Tages gekommen und hatte darauf bestanden, dass die alten Kästchen und der Herd, von dem nur noch zwei Kochplatten funktionierten, weg mussten. Auch der alte Kühlschrank wurde entsorgt.

Maria kaufte mit ihrer Tochter Marion bei Peter Max eine neue Küche, einen Herd mit Ceran- Kochfeld, einen Kühlschrank mit Dreistern-Kühlfach und Kästchen, Ober- und Unterschränke mit mittelbraunen Holztüren. Das alles bezahlte sie von ihrem mühsam Ersparten. Marion brachte einen Bekannten, der die Küche montierte, nachdem sie geliefert worden war. Und da stand sie nun, aufgeregt zwischen all den neuen Dingen in ihrer 2-Zimmer-Wohnung und begann sofort sie sorgfältig zu putzen, obwohl doch eigentlich alles neu und sauber war. „Das macht man.“, sagte sie „so wird das Neue was Eigenes.“

Seither hatte Maria ihre neue Küche täglich sauber und ordentlich aufgeräumt, sogar ein eigenes Pflegemittel für das Ceran-Kochfeld hatte sie im Supermarkt besorgt.

Maria war schon alt, gerade 71 Jahre alt geworden und dennoch hatte sie sich diese Küche geleistet. Das verhieß ihr Lebensmut. Sie würde noch lange leben wollen, damit sich diese Investition auszahlte, damit die Anschaffung der neuen Küche auch wirklich Sinn hatte.

Maria liebte es gepflegt. Sie ließ ihr kurzes Haar regelmäßig beim Friseur in geordnete Dauerwellen legen. Sie bestellte sich Kleidung aus dem Katalog für gesetzte Damen. So empfand sie sich ordentlich und schön; sonntags legte sie dezenten Lippenstift auf, bevor sie in die Kirche ging. Sie war nicht gläubig, doch ihrer Meinung nach gehörte es sich in die Kirche zu gehen.

So saß sie an diesem Tag also, es war mitten in der Woche, mit ihrem dauergewellten Haar und ihren Kleidern aus dem Katalog, einem dunkelblauen Rock und einer dunkelblau-rosa gemusterten Bluse in Gr.44 in ihrer geputzten Küche. Doch etwas war anders. Etwas irritierte sie.

Auf der Arbeitsfläche ihrer Küche lag ein Sackmit Kastanien. Marions Sohn Lukas war gestern zu Besuch gewesen. Er hatte die Kastanien im Hof gesammelt und war begeistert gewesen, wie schön sie waren, wie glänzend, wie glatt. Er hatte lange mit ihnen gespielt. Sie waren zu Autos geworden, zu Männchen, zu Bällen.

Als er ging, hatte er sie vergessen.
Und nun saß Maria da. knetete ihre Hände und starrte die Kastanien an. Sie störten ihren Ordnungssinn und sie hätte sie auch ohne Zögern weggeworfen, wenn nicht das Leuchten in den Augen von Lukas beim Spielen, an das sie sich erinnerte, sie davon abgehalten hätte. Sie holte die Kastanien und breitete sie vor sich auf dem Tisch aus. Sie befühlte sie, doch zuckte sie dabei zusammen, als würde sie etwas Verbotenes tun. „Mit Kastanien spielen nur Kinder. Das gehört sich nicht.“, sagte sie sich. „Ob ich die Kastanien für Lukas aufheben sollte?“ Nein, das wohl nicht, sie werden alt werden und ihre Glätte und Schönheit verlieren.“ Maria starrte die Kastanien an. Tränen standen plötzlich in ihren Augen, doch sie wusste nicht weshalb.

Mit einem plötzlichen Ruck stand sie auf, warf die Kastanien wütend zurück in den Sack und brachte den Sack zum Mülleimer.

Alles hatte wieder seine Ordnung. Maria las nun „Das goldene Blatt“, das sie am Morgen gekauft hatte, las über die Schwierigkeiten und Probleme in Königshäusern, deren Familienmitglieder ihr alle namentlich vertraut waren.`}</div>
        ),
        "Ein Krimianfang": (
          <div>{`Der Anfang eines Krimis zum selber Weiterschreiben

 
Ich beobachtete die Schmeißfliegen, die sich in der Hitze auf die Wurstsemmeln setzen wollten und schwitzte. Ich hatte schon genug von diesem Job. Ich wickelte die Wurstsemmeln in Plastikfolie. Drecksarbeit. Wie kann man bloß so etwas machen? Ich mach das nur jetzt. Ich. Ich bin Kurt. Kurt Aufschneider, 50 Jahre, durchtrainiert und stehe für ein paar Tage in dieser heißen Würstelbude. Drüben am Donaukanal wartet mein Büro. Nichts Besonderes. Es sind nur zwei Räume. Ein Zimmer mit Zeitschriften und Sesseln, den ich den Wartesalon nenne und dann mein Allerheiligstes: Ein Raum mit Schreibtisch, Telefon, Aktenschrank und jeder Menge Staub. Ein Stuhl steht hinter und vor dem Schreibtisch. Einer für mich und einer für den Klienten, sofern einer kommt. An der Tür hängt ein Schild. Kurt Aufschneider, Detektiv, private Ermittlungen jeder Art. Und tatsächlich. Manchmal verirrt sich einer zu mir. So wie gestern.

Es regnete und ich hatte schon ein paar Whisky sour intus, weil nichts weiter ging außer die Zeiger der Uhr. Plötzlich schellte die Glocke, die anzeigte, dass jemand meinen Wartesalon betreten hatte. Ich schaute hinaus, sagte „Nur weiter, bitte.“ Und herein kam ein glatzköpfiger, sehr dicker, kleiner Mann. Ich hätte ihm auf den Schädel spucken können. Aber ich unterließ es, er war ja mein Geschäft. Er war im Regenmantel und zupfte nervös an einem runden Hut, den er abgenommen hatte und nun mit beiden Händen hielt. Er saß an der vordersten Kante des Besucherstuhls, als er mir seine Geschichte verklickerte. Er hieß Hermann Weiß, war 30 Jahre alt, er war Hilfsarbeiter und er war verzweifelt. Die große Liebe seines Lebens war spurlos verschwunden. Anna Rainer, erst 21 Jahre alt, lange schwarze Haare, Bankbeamtin und zart gebaut, hatte er vor sechs Wochen kennen gelernt und seither jede freie Minute mit ihr verbracht. Er zeigte mir mit fahrigen Fingern ein verknittertes Foto. Es war eine recht hübsche Schnecke und ich fragte mich, was die wohl an dem fetten Hermann Weiß gefunden haben mochte. Na jedenfalls war sie plötzlich von einem Tag auf den anderen verschwunden. Sie war weder in der Arbeit noch in der Wohnung aufgetaucht und hatte sich auch bei ihm nicht gemeldet. Er wollte nicht zur Polizei gehen, denn er wollte sie nicht in Schwierigkeiten bringen, falls sie schon irgendwelche Schwierigkeiten hatte und untertauchen musste. Aber er wollte, dass ich sie fände. Möglichst rasch und unauffällig. Er gab mir die Adresse ihrer Großmutter, einer Bäuerin im Ruhestand, von der er wenig wusste, nur dass sie Josefine Rainer hieß, im Waldviertel wohnte, 75 Jahre alt , kerngesund, rosig und lieb war und dass Anna und er sie irgendwann gemeinsam besuchen wollten. Außerdem gab er mir noch einen wichtigen Hinweis. Anna arbeitete manchmal als Babysitterin in einer Villa im 18. Bezirk bei einem gewissen Max, einem achtjährigen lieben Buben, goldgelockt und zu klein für sein Alter. Der Mann war gut im Beschreiben. Er hätte Polizist werden sollen. Obwohl er nicht nach Geld aussah, übernahm ich den Job. Ich hatte keinen anderen.

Zuerst fuhr ich natürlich in Annas Wohnung, um mich dort umzusehen. Ich fand einen Notizkalender und ein Adressbuch. Da hatte ich bald die Telefonnummer von Maxens Eltern. Ich wollte nicht dort anrufen. Aus dem Kalender war ersichtlich, dass Anna an dem Abend verschwunden war, als sie bei Max gewesen war. Also musste ich mir etwas einfallen lassen. Kurz entschlossen mietete ich einen Würstelstand und baute ihn gegenüber von Maxens Haus auf, um alles Seltsame dort unauffällig beobachten zu können. Jetzt schwitze ich also hier in der Gymnasiumstrasse, verkaufe Würsteln und verjage Schmeißfliegen. Und da kommt ein Bub auf mich zu. Das müsste Max sein.`}</div>
        ),
      },
    },
    Malerei: {
      tag: "",
      title: "",
      description: [
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Odysseus.JPG"
            alt="Odysseus (01.2021)"
          />
          <i>Odysseus (01.2021)</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Meerbogen.JPG"
            alt="Meerestor (01.2021)"
          />
          <i>Meerestor (01.2021)</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Meer.JPG"
            alt="Ohne Titel (12.2020)"
          />
          <i>Ohne Titel (12.2020)</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Boot.JPG"
            alt="Ohne Titel (05.2023)"
          />
          <i>Ohne Titel (05.2023)</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Sträuche.JPG"
            alt="Herbst (12.2020)"
          />
          <i>Herbst (12.2020)</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Vogel.JPG"
            alt="Blauracke (01.2021)"
          />
          <i>Blauracke (01.2021)</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Granatapfel.JPG"
            alt="Der Granatapfel (12.2020)"
          />
          <i>Der Granatapfel (12.2020)</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Seestadt-Strand.JPG"
            alt="Am See (02.2022)"
          />
          <i>Am See (02.2022)</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Hund.JPG"
            alt="Schwarzer Hund (12.2020)"
          />
          <i>Schwarzer Hund (12.2020)</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Eule.JPG"
            alt="Ohne Titel: Schneeuele"
          />
          <i>Schneeeule</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Punkte.JPG"
            alt="Punkte"
          />
          <i>Ohne Titel</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Spatz.JPG"
            alt="Spatz (10.2020)"
          />
          <i>Spatz (10.2020)</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Loggia.JPG"
            alt="Morgenausblick"
          />
          <i>Morgenausblick</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Baum.JPG"
            alt="Baum"
          />
          <i>Ohne Titel</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Schwäne.JPG"
            alt="Schwäne im See"
          />
          <i>Ohne Titel</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Rose.JPG"
            alt="Rose"
          />
          <i>Ohne Titel</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Malerei/Kollektion.JPG"
            alt="Kollektion"
          />
          <i>Kollektion ausgewählter Bilder</i>
        </Container>,
      ],
    },
    Fotografie: {
      tag: "",
      title: "",
      description: [
        <div>
          In den letzten Jahren hat Marianne Peternell gerne fotografiert. Sie
          hat die entstandenen Fotos ursprünglich nicht auf ihrer Webseite
          veröffentlicht. Eine Auswahl ihrer schönsten Aufnahmen, die häufig in
          der Seestadt Aspern in Wien entstanden sind, werden hier präsentiert.
        </div>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Fotografie/enten.JPG"
            alt="Enten"
          />
          <i>31.03.2019</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Fotografie/reiher.JPG"
            alt="Reiher am See"
          />
          <i>01.04.2019</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Fotografie/see.JPG"
            alt="See, Gebüsch"
          />
          <i>16.05.2021</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Fotografie/frau am see.JPG"
            alt="Frau am See"
          />
          <i>13.06.2020</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Fotografie/sonnenaufgang.JPG"
            alt="Sonnenaufgang Seestadt"
          />
          <i>03.05.2017</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Fotografie/wohnung bilder.JPG"
            alt="Wohnung Bilder"
          />
          <i>13.07.2021</i>
        </Container>,
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/assets/Fotografie/wohnung bilder 2.JPG"
            alt="Wohnung Bilder 2"
          />
          <i>02.06.2023</i>
        </Container>,
      ],
    },
    "Deutsch-Unterricht": {
      tag: "",
      title: "Deutsch-Unterricht in der Oberstufe",
      description: [
        <>
          <div>{`Interpretationsarbeit: Innerer Monolog, Monolog

Integration verschiedener Bildungsbereiche:
`}</div>
          <List dense={true} sx={{ width: "100%", paddingLeft: 0.75 }}>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`Literarhistorische Bildung (Arthur Schnitzler ‚Leutnant Gustl’ kennen lernen; Folgewirkungen für Schnitzler; Migrantenliteratur in Ansätzen kennen lernen)`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`Kreative Kompetenz: einen inneren Monolog selbst verfassen können`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`Literarische Kompetenz: die Leistung des inneren Monologs erfassen; die Leistung von Migrantenliteratur für den interkulturellen Dialog erfassen`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`Politische Bildung (Gastarbeiter und ‚Fremde’ in der Wahrnehmung von Deutschen und Österreichern mit Hilfe des inneren Monologs realistisch gespiegelt durch einen arabischen Schriftsteller)`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`Persönlichkeitsbildung (Empathie: mit den Augen des Anderen sehen; der Umgang mit Anderen; Konfliktbewältigung; den Unterschied von Empathie und Identifikation erfassen)`}
              />
            </ListItem>
          </List>
          <br />
          <b>1. UE</b>
          <div>
            Zunächst wird ein Ausschnitt aus Schnitzlers{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/Leutnant_Gustl_Arthur_Schnitzler.pdf"
            >
              „Leutnant Gustl“
            </a>{" "}
            gelesen.
          </div>
          <div>{`Die SchülerInnen werden über Arthur Schnitzlers Leistungen als „Seelenkundler“ zur Jahrhundertwende informiert. Sie erhalten Informationen über den Ehrenkodex der Offiziere in der Adelsgesellschaft. Der Textausschnitt mit der Kernaussage des Bäckermeisters „Sie dummer Bub“ zeigt deutlich die Mischung von Angst vor Gewalt und homoerotischem Übergriff bei Leutnant Gustl, der mit seinem Ehrenkodex vermischt ist. Das Problem, sich von einem einfachen Bäckermeister dummer Bub schimpfen und bedrohen zu lassen, ist zudem besonders mit der Offizierswürde und dem gesellschaftlichen Ansehen des jungen Leutnant Gustl unvereinbar.
Schüler finden es meist erstaunlich, dass Schnitzler wegen dieses Textes unehrenhaft aus dem Offiziersrang entlassen worden ist.
 
Meist finden sie den Text unterhaltsam und können Bezüge zu eigenem Erleben herstellen, was sich in lebhafter Anteilnahme äußert und auch darin zeigt, dass sie den Säbel als Phallussymbol unmittelbar identifizieren. Die historische Distanz des Ehrenkodex ermöglicht offene Gespräche.
 
Danach wird die Bauweise des inneren Monologs mit seinen subjektiven Assoziationen, Gedankensprüngen, Auslassungen usw. an der Tafel erläutert.`}</div>
          <br />
          <br /> <b>2. UE</b>
          <div>{`Kreatives Schreiben:
Die SchülerInnen sollen nun selbst die Textart „innerer Monolog“ erproben:
„Die Indianer haben gesagt, du kennst nie einen anderen, wenn du nicht zumindest einmal in seinen Mokassins gegangen bist.“. Man müsse die Welt auch manchmal mit den Augen eines anderen betrachten. Leicht sei es, sich in jemanden zu versetzen, der einem sehr ähnlich sei. Schwieriger ist es, sich in jemanden zu versetzen, der nach Alter, Beruf oder sonstigen Zugehörigkeiten anders sei. Sie bekommen nun die schwierigere Aufgabe. Sie sollten sich an eine konkrete Stunde in ihrer Klasse erinnern, sich eine bestimmte Lehrkraft vergegenwärtigen und sich in diese Lehrkraft hinein versetzen. Arbeitsauftrag: „Verfasse den inneren Monolog einer Lehrkraft deiner Klasse nach Verlassen einer bestimmten Stunde in der Klasse.“
Abschließend sollten sie in Zweiergruppen einander die Ergebnisse vorlesen. Sie sollten wechselseitig erraten, welche Lehrkraft gemeint sei. Die Lehrkräfte werden meistens durchwegs erraten.
Die Leistung des inneren Monologs ist offenbar, dass man damit Personen von innen her charakterisieren kann. Das haben die SchülerInnen nun selbst erlebt.`}</div>
          <br />
          <br />
          <b>3. UE</b>
          <div>{`Ein „innerer Monolog eines Lehrers“ verfasst von einem fingierten Schüler, der damit einen Lehrer charakterisiert, der Schülern eher abwertend gegenüber steht, wird präsentiert. Es geht nun um die Frage der Interpretation. Angeblich deuten einige Erwachsene den Text ganz in der Perspektive des dargestellten Lehrers und bewerten nun die Klasse ebenfalls negativ.
Der logische Fehler wird herausgearbeitet. Eine begriffliche Unterscheidung zwischen Empathie und Identifikation wird vorgenommen.
Es wird darauf verwiesen, dass die Deutung eines (inneren) Monologs den Autor nicht vergessen darf, der die Absicht verfolgt mit Hilfe des inneren Monologs eine Person zu charakterisieren. Auf eigene Bewertungen der dargestellten Handlungen ist dabei zunächst zu verzichten.`}</div>
          <br />
          <div>{`Text:
Stellt euch vor, ein Schüler, er hat in der Stunde zuvor eine Cola umgeworfen, hätte die Aufgabe einen inneren Monolog zu verfassen. Er versetzte sich in einen Lehrer, der SchülerInnen nicht besonders leiden kann und einen schlechten Tag hat.
Der Schüler schreibt den inneren Monolog eines Lehrers im Konferenzzimmer, der halblaut vor sich hinredet: 
„Diese blöden Idioten, diese Trotteln! Das Schülermaterial ist einfach unter jeder Kritik! Hat doch dieser Affe, der jedes Mal, wenn man ihm etwas beibringen will, mit seinem Nachbarn schwätzt, dann aber dumm dreinschaut, wenn er drankommt, dieses Mal seine Cola auf dem Tisch ausgeleert. „Scheiße!“, hat er geschrieen. So ungeschickt muss einer sein. Dass der auch über den Heften im Unterricht seine Cola trinken muss! Wahrscheinlich isst der zu Hause seine Fettbrote über den Hausaufgaben. Ordnungssinn geht denen ja heute völlig ab. Respekt vor dem Lehrpersonal gibt es selten. Ich finde meinen Kuli nicht mehr, den haben sicher diese Biester geklaut. Aber ich werde es ihnen nachweisen, ja das werde ich!
Während der Lehrer Meier halblaut spricht, sagen die anderen im Raum halblaut „Jaja.“
 
Der Schüler bringt seinen Text einem Erwachsenen zur Interpretation:
Der schreibt.
Lehrer Meier hat in seiner Klasse mit lauter Idioten, Trotteln und respektlosen, ordnungsfeindlichen Biestern zu tun, die ungeschickt sind und keinen Respekt kennen. Man bekommt einen guten Eindruck, wie es heute in Schulen zugeht.
 
Was ist das Problem dieser Interpretationsarbeit?`}</div>
          <br />
          <br />
          <b>4. UE</b>
          <div>{`Der Text von Rafik Shami, einem syrischen Schriftsteller, der in Deutschland äußerst beliebt ist und zahlreiche Preise erringen konnte, „Der Kummer des Beamten Müller“ problematisiert die Ausländerfrage auf humorvoll-ironische Weise, indem er einen äußerst mürrischen ausländerfeindlichen Beamten im deutschen Büro für Aufenthaltsbewilligungen mit Hilfe eines Monologs von innen her charakterisiert. Dies wird jedoch erst am Schluss des Textes klar. Zuvor ist man unmittelbar mit zahllosen Wertungen, Schimpfworten, Missverständnissen und Vorurteilen konfrontiert, die Herr Müller in Ich-Form zum Besten gibt, sodass die Gefahr einer unmittelbaren Identifizierung gegeben ist und nur die Kenntnis der Technik des inneren Monologs davor schützt, sowie allenfalls die Irritation, dass der Text durch einen arabischen Schriftsteller verfasst wurde, der selbst einmal als Gastarbeiter und arabischer Schriftsteller um Aufenthaltsgenehmigung in Deutschland ansuchen musste. Nun werden die Erkenntnisse der letzten Stunde auf eine harte Probe gestellt:`}</div>
          <br />
          <i>Angaben zum Autor:</i>
          <br />
          <b>Rafik Schami </b>
          <span>{`(* 23. Juni 1946 in Damaskus) (arabisch رفيق شامي) ist ein syrisch-deutscher Schriftsteller und ein promovierter Chemiker. Der nom de plume (=Pseudonym) „Rafik Schami“ bedeutet Damaszener Freund oder „der aus Damaskus kommt“, der bürgerliche Name des Autors ist Suheil Fādél (arabisch سهيل فاضل). Er stammt aus der christlich-aramäischen Minderheit in Damaskus, besuchte ein jesuitisches Kloster-Internat im Libanon und studierte in Damaskus Chemie, Mathematik und Physik. Schon mit 19 hatte sich Rafik Shami der Literatur verschrieben und gründete 1966 in der Altstadt von Damaskus die Wandzeitung „Al-Muntalak“ (dt. Ausgangspunkt), die 1969 verboten wurde. 1970 floh Rafik Schami aus seinem Heimatland Syrien zunächst in den Libanon, zum einen um dem Militärdienst zu entgehen, zum anderen weil er wegen der Zensur nach eigenen Angaben ‚zu ersticken’ drohte. 1971 exilierte er nach Westdeutschland, wo er mit der Einwanderungsbehörde zu tun bekam. Er setzte sein Chemiestudium in Heidelberg fort und schloss es 1979 mit der Promotion ab. Neben seinem Studium arbeitete er in verschiedenen Aushilfsjobs und veröffentlichte zahlreiche Texte in Zeitschriften und Anthologien, zunächst in arabischer, seit 1977 auch in deutscher Sprache. 1978 erschien mit ‚Andere Märchen’ sein erstes Buch in deutscher Sprache. 1980 war er Mitbegründer der literarischen Gruppen Südwind und PoLiKunst (= Polynationaler Literatur- und Kunstverein). Seit 1982 lebt er als freier Schriftsteller in der Pfalz. Rafik Shami gehört zu den erfolgreichsten und beliebtesten deutschsprachigen Autoren der Gegenwart, für sein Werk hat er zahlreiche Auszeichnungen und Preise erhalten. Sein Erfolg gründet sich nicht zuletzt auf seine zahlreichen Lesungen, bei denen er sein Talent zum freien Fabulieren entfaltet. Der Verkauf des ein Millionsten Exemplars der Taschenbücher Schamis bei dtv im Januar 2005 zeugt von seiner gleich bleibend  großen Beliebtheit beim deutschen Publikum. Schami hat die Staatsbürgerschaft von Syrien und Deutschland.`}</span>
          <br />
          <span>{`Die bestimmenden Themen von Schamis Werk sind das Leben der Migranten in Deutschland, die Darstellung der arabischen Welt damals, heute und in der Utopie, Politik und Gesellschaft sowie das Erzählen. Schami gilt als ein begnadeter Erzähler.`}</span>{" "}
          <br />
          <br />
          <b>
            Die Erzählung „Der Kummer des Beamten Müller“ erschien im
            Erzählband:
          </b>
          <br />
          <b>
            <i>
              Die Sehnsucht fährt schwarz. Geschichten aus der Fremde,
              Stuttgart, dtv 1996
            </i>
          </b>
          <br />
          <br />
          <b>{`         Rafik Schami`}</b>
          <br />
          <b>{`         Der Kummer des Beamten Müller`}</b>
          <br />
          <br />
          <div>{`Sie glauben doch nicht im Ernst, daß es mir mit diesen Kanaken, Kamel­treibern und Spaghettis gut geht!
Da kommt doch dieser halbwüchsige Spaghetti, der mich jedes Jahr wahnsin­nig macht, mit seinem offenen Hemd und seiner speckigen Lederjacke hereingetanzt, als wäre die Behörde eine Diskothek. Ich werde das Gefühl nicht los,  dass diese Itaker von Geburt an keinen Respekt vorm Gesetz haben.Weißt du, was er mir sagt, mein Lieber? Der Freche sagt zu mir, an meiner Stelle würde er sich die Arbeit ganz einfach machen, und ich Idiot frage auch noch: „Wie denn?"
Da sagt doch dieser Kerl, er würde jedem einen Stempel schenken, zum Mitnehmen nach Hause. "Warum immer hierher? Besser zu Hause ein Stempel!"
Wo kämen wir da hin, wenn das so wäre! Nein, seit zwei Jahren schreibt dieser Spaghetti bei „Nationalität" nicht mehr „Italiener",sondern „Gastarbeiter".
Jedesmal erkläre ich es ihm, und er antwortet: „ich nix weiß, ich vorher  Italiano, aber jetzt nix Italiano, nix Deutsch, ich Gastarbeiter", und das Schlimmste ist, er lacht dabei, und genau das macht mich krank. Statt meine Fragen zu beantworten, erzählt er mir dauernd Geschichten von seinem schlechten Capo. Jedes Jahr dasselbe.
„Ich viil Arbeit, aber Capo sagt, nix gut.Warum?"

Ich sage ihm, er soll arbeiten, die Maschine anglotzen und nicht den Meister, und er sagt: „Ich immer Capo sehen, auch Traum!"

Ja, ja, und mir soll es gutgehen.

 

„Ach, guten Abend, Herr Al Tachtal
Na ja, woher holt der bloß immer wieder die Frauen. Ein Scheißkerl. Muchamed Achmed Al Achtal, mein Lieber, da bricht einem die Zunge ab, ein Reibeisen im Hals wäre ein Zuckerlecken dagegen. Wozu das Ganze, ich zum Beispiel heiße ganz einfach Hans Herbert ... Hans Herbert ... ganz leicht und nicht Achchmed Machchmed

Glauben Sie ein einziger Kanake hat bis jetzt meinen Namen richtig ausgesprochen? So dumm sind die Brüder. Der Kameltreiber sagte mir im letzten Jahr, mein Name sei ihm zu lang. Er würde mich Hansi nennen. Auf arabisch soll das „mein Hans" bedeuten. Um Gottes willen. Ich bin doch nicht schwul! Aber diesem Kameltreiber habe ich es gezeigt, der kommt her und steckt mir einen stinkenden, zerdrückten Paß entgegen, und ich mache ihn auf. Weißt du, was darin steht?
„Geboren: 1342." Also stell dir vor, am Anfang dachte ich, das ist eine Fälschung oder der will mich auf den Arm nehmen. Aber nein! Denkste! Das ist moham­medanische Zeit. Ich sage mir, los Herbert, nur ruhig Blut, ein Sandfresser kann dich doch nicht aus der Ruhe bringen. Ich frage ihn: „Also wieviel macht es christlich?"
Weißt du, was er sagt? Er glaubt, es sei 1940! Er glaubt es! ... Nicht glauben soll er, sondern belegen soll er, habe ich ihm gesagt. Mein Lieber, das war ein Krach! Aber das war noch nicht mal so schlimm, denn bei Beruf trug er „Schriftsteller" ein. Am Anfang dachte ich, das sei ein Scherz.  ..Nicht doch, Herr Achtmal", sagte ich "Sie können doch kaum Deutsch und wollen Schriftsteller sein?" Und was macht er'? Er zückt ein Buch aus seiner stinkenden Tasche. "Hier mein Buch. Schöne Errsäluung, 11 Mark 80, für Sie 10,80."
Also ich muß doch bitten, wir sind hier nicht im Basar. Ich habe ihn weggeschickt. Erst muß er einen ordentlichen Beruf nachweisen, dann bekommt er die Aufenthaltserlaubnis,sonst nix ... Schau dir den an,gar keinen Kummer hat er. Wenn ich er wäre, hält ich mich um eine Stelle gerissen, und was macht er? Mit Weibern herumkutschieren! Ich sage dir, das verdirbt mir die Laune! Was ist das für ein Tag heute, erst verdirbt mir dieser Kümmeltürke den Vormittag, dann dieser Kameltreiber den Abend.

Der Kümmeltürke kommt heute morgen So gegen 10 Uhr, er kommt mit seinen zwei Bälgern und seinem Weib, als wäre ein Behördengang ein Ausflug.Sie setzen sich.sie breiten sich aus bei mir, und eine dieser Rotznasen zerrupft schon nach paar Minuten zwei Blätter von meinem Gummibaum und bringt sie mir."Daputt", sagt er.

Der andere Balg schielt auf meinen Kugelschreiber. Ich komme ihm aber zuvor und nehme den Kuli weg. Da sagt doch dieser Türke: „Kind nix wegnehmen. Yassin brav, nur schipilen. Kind muss!“
„Ja, aber nicht hier in der Behörde, ich bitte Sie!" sage ich.                                                       

„Doch, muss", brüllt der Kanake."Du Kind haben?" fragt er und haucht mich mit seinem Knoblauchatem an.
„Ja, zwei", antworte ich, aber bevor ich noch einen Blick in seine Akte werfen kann, haucht er mich gleich wieder an.
„Wie alt?" will er wissen.                                                                                                                    
Ich antworte nicht, weil das ja zu weit geht. Der Türke geht zu seinem Weib und holt zwei bunte Schachteln.
„Hier für Kind, türkisch,schmeckt extra prima!" haucht er mich wieder an. Ich habe schon das Gefühl, irgend etwas stimmt nicht mit seinen Papieren, aber die Zeit ist knapp. Ich schüttele den Kopf. „Hier nix Istanbul! Hier Deutschland! Nix Bakschisch!Verstehen?"
Der Türke wird blass, und ich suche in den Papieren nach dem Grund der Bestechung, aber ich finde nichts.
Also, ich mußte ihm den Stempel geben. Erst nachmittags hatte ich Zeit und nahm die Mappe noch einmal unter die Lupe, und ich fand raus, weshalb dieser Gauner mich bestechen wollte. Zwei Wochen Verspätung hatte er mit seiner Ummeldung. Das habe ich gleich für nächstes Jahr vorgemerkt.
Mein Lieber, dir geht's gut, aber mir geht's, seitdem ich in diesem Amt bin, nicht mehr gut. Nicht einmal meine Frau versteht mich mehr. Sie sagt, ich rede mit ihr in gebrochenem Deutsch, vor allem, wenn ich wütend bin, das habe ich nun davon!
 

Herr Müller sprach an diesem Abend immer wieder den Barkeeper an, der hin­ter der Theke der kleinen Kneipe stand. Aber der Barkeeper hörte nicht zu, ab und zu sagte er „Na ja" oder „Was Sie nicht sagen!" Er war sehr beschäftigt,sein Blick wanderte über die Gläser, er füllte immer wieder nach, stellte neue auf    die Theke, kritzelte Striche auf die Bierdeckel. Auch wenn Herr Müller sein Glas geleert hatte, schenkte ihm der Barkeeper das nächste voll, kritzelte einen Strich auf den Bierdeckel und sagte geistesabwesend:,Zum Wohl!"`}</div>
          <br />
          <br />
          <b>
            Wie wird der Beamte Müller mit Hilfe des Monologs charakterisiert?
          </b>{" "}
          <br />
          <b>Welche Absicht verfolgte der Autor mit seinem Text?</b>
          <br />
          <b>Warum hat Schami nicht folgenden Text verfasst?</b> <br /> <br />
          <b>Ein Tag im Leben des Beamten Hans Meier</b>
          <div>{`Ein Italiener kommt in die Behörde. Er hat einen tänzelnden Gang. Er trägt eine Lederjacke. Das ist aber sympathisch, Südländer sind so besonders lebenslustig, denke ich mir.
Er klagt, er sei kein richtiger Italiener mehr, er sei auch kein Österreicher, er sei Gastarbeiter.
Er hat seine italienische Sprache, seine Kultur verloren, aber keine neue gefunden. Er lebt in einer Zwischenwelt. Es tut mir weh und ich weiß nicht, wie ich ihm helfen soll. Er schreibt in dem Formular in der Spalte Nationalität statt Italiener Gastarbeiter und ich verstehe ihn. Ich werde das den Behörden erklären. Tatsächlich verlieren die Gastarbeiter wegen des Anpassungszwangs ihre nationale Identität. Er sagt, er träumt sogar von seinem Chef. Ich stelle mir vor, dass dieser ihn anschreit und demütigt und dass er davon Alpträume bekommt, weil er nicht ausweichen und sich nicht helfen kann. Ich rate ihm in einer Gruppe betreuter Ausländer Zuflucht zu suchen. Ich gebe ihm eine Adresse.
Er will nicht mehr so oft zur Einwanderungsbehörde kommen wegen einer Aufenthaltsbewilligung, er findet das unerträglich. Er schlägt scherzhaft vor, ihm den Stempel für die häufigen Formulare mitzugeben. Ich kann ihn verstehen. Er arbeitet seit 10 Jahren hier und immer noch muss er jährlich seine Arbeitsbewilligung abholen und mit dieser um Aufenthaltsbewilligung ansuchen. Er fühlt sich wie ein Mensch zweiter Klasse. Ich senke den Kopf und sage nichts. Ich stemple seine Aufenthaltsbewilligung ab.
Dann kommt Ali Muchmad Achtal, ein arabischer Schriftsteller, der sich bei Frauen beliebt macht und selbstbewusst auftritt. Ich gebe ihm die Hand und sage, dass es mir schwer fällt seinen Namen richtig auszusprechen, weil er für mich ein Zungenbrecher ist. Er sagt, dass es ihm mit meinem Namen auch so geht. Wir einigen uns darauf, dass ich ihn Ali und er mich Hansi nennt, das ist für uns beide nicht schwer. Er sagt, Hansi bedeute auf arabisch „Mein Hans“. Das finde ich sehr nett. Irgendwie freundschaftlich. Er zeigt mir ein Büchlein, er sagt in seinem gebrochenen Deutsch, es sei eine schöne Erzählung, die koste nur 10,60 für mich, im Buchladen wäre sie teurer. Sicher ist er stolz, dass er eine Erzählung geschrieben hat und dass man sie kaufen kann. Ich lache, ich sage, dass ich leider gar kein arabisch verstehe und das Büchlein gar nicht lesen kann. Er sagt, dass er 1320 geboren ist. Ich habe schon Erfahrung mit der islamischen Zeitrechnung, ich schaue schnell auf meinem Umrechnungskalender nach und trage dann 1940 als Geburtsjahr ein. Wir reden darüber, dass es seltsam ist, dass es auf der Welt so viele verschiedene Arten der Zeitrechnung gibt. Er erzählt mir, dass manche Menschen in arabischen Ländern oft gar nicht genau wissen, in welchem Jahr sie geboren sind. Die Verwaltung sei dort noch nicht so wichtig und streng. Manchmal lassen Eltern aus bäuerlichen Gegenden ihre Kinder erst in dem Jahr ins Geburtsregister eintragen, in dem sie zufällig in die Stadt kommen. Das Geburtsjahr sei nicht besonders wichtig für die Leute und auch nicht für die Verwaltung. Ich denke darüber nach, warum es bei uns eigentlich so wichtig ist genau auf den Tag zu wissen, wie alt jemand ist und seit wann das bei uns so ist.
Ali geht.
Dann kommt eine türkische Familie. Der Vater hätte auch alleine kommen können, aber es sind vermutlich Dörfler aus Anatolien, da ist der Gang zu einem Amt ein bedeutsames Ereignis. Der Respekt gegenüber dem Amt zeigt sich auch in außerordentlich festlicher Kleidung. Das Kind ist sehr lebendig. Es nimmt von meinem Tisch einen Kugelschreiber und spielt damit. Der Vater bemerkt meinen Blick und sagt. „Kind muss spielen.“ Ich weiß, Türken lieben Kinder über alles. Dass Kinder spielen müssen, braucht selbst einem türkischen Dörfler kein Experte erzählen. Ich sage, das ist wahr und gebe dem Kind einen Ball im Tausch gegen den Kuli, den brauche ich nämlich selber. Den Ball habe ich für solche Fälle in meiner Schublade. Der Vater fragt, ob ich auch Kinder habe. Ich weiß, es gehört zu türkischer Höflichkeit und Freundlichkeit sich zuerst danach zu erkundigen, ob man Kinder hat, ob man verheiratet ist. Ich erzähle, dass ich 2 Kinder habe. Er freut sich über alle Maßen über dieses Gottesgeschenk und gibt mir eine Schachtel türkischer Süßigkeiten für meine Kinder. Ich finde das rührend, es muss ihn viel gekostet haben. Doch das türkische Gefühl für Großzügigkeit und persönliche Freundlichkeit und Familienehre steht über dem Finanziellen. Ich bedanke mich, indem ich mich verbeuge, für das Geschenk. Ich hole aus der Schublade eine Schachtel Merci und schenke sie ihm für sein Kind. Er weint fast vor Rührung. Ich sage ihm, dass wir nun Freunde sind. Er braucht in Zukunft nicht mehr Geschenke mitzubringen, versuche ich auch noch zu sagen. Doch ich weiß nicht, ob er mich verstanden hat. Der zeremonielle Teil der Höflichkeiten ist für ihn nun vorbei. Nun geht es um das Ausfüllen der Dokumente. Er macht das langsam und umständlich und stets etwas scheu und respektvoll. Wir verabschieden uns.
Ich bin müde von den vielen Eindrücken und gehe nach Hause.`}</div>
          <br />
          <br />
          <b>
            Eine mögliche Textinterpretation „Der Kummer des Beamten Müller“
          </b>
          <div>{` 
Der Text „Der Kummer des Beamten Müller“ ist eine Erzählung von Rafik Shami, die 1996 erschienen ist.
In dem Text geht es um einen deutschen Beamten, der bei der Einwanderungsbehörde arbeitet. Er sitzt in einer Kneipe und erzählt einem Barkeeper in einem langen Monolog von seinem Arbeitsalltag und seiner Sicht der Probleme, die sich aus dem Zusammentreffen mit Ausländern in seinem Amt ergeben. Er ist frustriert und verärgert und bezeichnet die Ausländer mit abwertenden Schimpfwörtern. Der Barkeeper jedoch hört ihm kaum zu und antwortet mit nichts sagenden Floskeln.
 
Zunächst erzählt Herr Müller von einem Italiener, den er mit Schimpfwörtern wie „Spaghetti“ und „Itaker“ belegt. Angewidert ist Herr Müller auch von dessen nachlässiger Kleidung, die er einem Amt nicht angemessen findet, da er ein offenes Hemd und eine abgewetzte Lederjacke trägt. Der Italiener, der jährlich erneut um Aufenthaltsbewilligung ansuchen muss, meint, dass man den Ausländern den Stempel mitgeben solle, was Herr Müller als extreme Frechheit und Respektlosigkeit wertet. Er berichtet auch, dass er sogar nachts von seinem Chef träume. Zudem berichtet der Italiener, dass er seine Muttersprache und seine italienische Identität verloren habe, er sei aber deshalb auch kein Deutscher geworden, er sei Gastarbeiter. Daher trägt er ‚Gastarbeiter’ in das Feld Nationalität ein, was Herr Müller als Provokation auffasst.
Danach berichtet Herr Müller von einem Araber, den er mit Schimpfwörtern wie ‚Kameltreiber’ und ‚Sandfresser’ belegt. Er berichtet, dass dieser Araber einen für ihn sehr schwer aussprechbaren Namen trage, während er seinen eigenen leicht aussprechen könne. Dem Araber geht es umgekehrt aber genauso mit dem Namen des Beamten, den er daher ‚Hansi’ nennen will. Das bedeute auf arabisch mein Hans. Herr Müller wertet das als eine Art schwulen Übergriff. Er bemerkt, dass der Araber von vielen Frauen umgeben ist. In seinem Pass steht als Geburtsjahr eine Jahresangabe nach islamischer Zeitrechnung. Herr Müller kann die Jahreszahl nicht in christliche Zeit umrechnen und auch der Araber kennt die Umrechnung nur ungefähr, was Herrn Müller sehr erbost. Der Araber gibt an Schriftsteller zu sein, doch Herr Müller weist dies als unmöglich zurück, da er nicht ausreichend Deutsch spreche. Er gibt dem Araber keine Aufenthaltserlaubnis, da er sich erst einen ordentlichen Beruf suchen müsste.
Als dritte Partei kommt in Herrn Müllers Erzählung eine türkische Familie vor. Herr Müller bewertet es negativ, dass die gesamte Familie in Festkleidung beim Amt erschienen ist. Es entsteht ein Konflikt, da das Kind der Familie mit einem Kugelschreiber des Beamten spielen will, was Herr Müller nicht erlaubt, er hat den Verdacht, das Kind wolle stehlen. Der Türke klärt ihn darüber auf, dass Kinder spielen müssen. Das Kind macht ein Blatt vom Gummibaum kaputt, was für weiteren Ärger Herrn Müllers sorgt. Der türkische Vater schenkt ihm Süßigkeiten, da er erfahren hat, dass auch Herr Müller Kinder hat. Herr Müller wertet dies als Bestechungsversuch. Zunächst findet er nichts, doch nach langem Suchen, kann er feststellen, dass die türkische Familie mit zwei Wochen Verspätung beim Amt erschienen ist. Er glaubt nun den Beweis gefunden zu haben, dass es sich bei dem Geschenk tatsächlich um einen Bestechungsversuch gehandelt habe.
Herrn Müllers Bericht bleibt ohne jeden Widerhall, der Barkeeper hilft ihm nicht aus seiner misslichen Lage, er hört ihm kaum zu. Er berichtet dem Barkeeper zudem, dass er wegen seiner Arbeit, selbst anfange gebrochen Deutsch zu sprechen und auch seine Frau ihn nicht mehr verstehe.
 
Die Geschichte von Rafik Shami ist, so einfach sie zu lesen ist, sehr komplex gebaut.
Da es sich um einen Monolog Herrn Müllers handelt, sind alle Geschehnisse ausschließlich aus dessen Innensicht geschildert, die Bewertungen und Einschätzungen der Vorkommnisse auf dem Amt aus der Sicht des Beamten werden daher gleich mit geliefert. Da ein vermittelnder auktorialer Erzähler fehlt, muss man selbst zur Distanz zu der Perspektive des Herrn Müller finden. Es besteht natürlich wegen der unverblümten, manchmal witzigen  Sprache des Alltags die Verführung in Herrn Müllers Monolog einzusteigen und mit zu schimpfen, um sich auch einmal alle Negativurteile über Ausländer von der Seele zu reden.
Der Ort der Handlung ist die Bar, in der Herr Müller sich aufhält, wo er diese Erzählung ohne unterbrochen zu werden als Monolog an einen Barkeeper richtet, der sich jedoch nicht für seine Probleme interessiert und ihm nur oberflächlich zuhört. Ort der Erzählung Herrn Müllers ist das Büro der Einwanderungsbehörde, in dem Aufenthaltsbewilligungen für Gastarbeiter erteilt werden. Die zentrale Figur ist natürlich Herr Müller, die durch die Technik des Monologs von innen her charakterisiert wird. Der Leser bekommt Einblick in die Gefühle, Wertungen und Gedanken Herrn Müllers angesichts seiner beruflichen Kontakte zu den Ausländern im Büro. Die Ausländer werden nur aus der Perspektive Herrn Müllers dargestellt.
Rafik Shami ist verwirrender Weise Autor des Textes. Er stammt selbst aus Syrien und ist nach Deutschland eingewandert. Er hat dort sieben Jahre lang auf Baustellen oder als Fabrikarbeiter gejobbt, gleichzeitig hat er als arabischer Schriftsteller in arabischer Sprache publiziert. Rafik Shami bekam demnach selbst mit der Einwanderungsbehörde als Gastarbeiter zu tun und hat vermutlich Erfahrungen mit Beamten von der Art des Herrn Müller gemacht. Er hat sich mit dem Mittel des inneren Monologs in einen solchen Beamten eingefühlt und dessen Sicht auf die Welt von innen her charakterisiert. Unschwer ist in der Figur des arabischen Schriftstellers Ali Tachtal Rafik Shami selbst zu erkennen, der in der Betrachtungsweise Herrn Müllers als ungeliebter und verachteter Gast erscheint. Es ist als eine bedeutende Leistung Shamis anzusehen, die innere Welt Herrn Müllers und dessen Weltsicht so realistisch und überzeugend und unmittelbar darzustellen, dass nicht wenige Deutsche oder Österreicher an dieser Weltsicht des Herrn Müller anknüpfen können und ihre eigene Meinung über Ausländer darin bestätigt sehen. Die einzige Irritation ergibt sich daraus, dass eben ein solcher arabischer Gastarbeiter diesen Text verfasst hat.
 
Die Haltung Herrn Müllers zu den Ausländern ist von vorn herein negativ, da er sie mit kraftvollen Schimpfwörtern belegt. Er macht nicht die geringsten Anstrengungen, das Verhalten der Ausländer von innen her zu verstehen oder von einer Warte her zu deuten, die diese als gleichwertige Menschen mit anderem kulturellen Hintergrund erscheinen lassen. Für ihn sind alle Ausländer ‚primitive Untermenschen’, was sich an dem Kraftausdruck ‚Kanaken’ zeigt. Sämtliche Verhaltensweisen, die Kleidung, der Geruch, das Verhalten sind ihm weitere Beweise für dieses von vornherein gefällte Werturteil. Das äußert sich beispielsweise an seiner Bewertung der Kleidung des Italieners, der sich seiner Meinung nach kleidet, ‚als ob er in eine Diskothek ginge’, in der Beurteilung der Tatsache, dass der Italiener ‚Gastarbeiter’ in das Feld Nationalität einträgt als eines boshaften Akts. Es zeigt sich auch darin, dass er die arabische Sprache, die ihm fremd ist und die er schwer aussprechen kann, abfällig bewertet. Auch die islamische Zeitrechnung erscheint ihm als persönliche Beleidigung. Dass die türkische Familie insgesamt erschienen ist, findet er ebenfalls als Ausdruck eines Fehlverhaltens. Den Pass des Arabers empfindet er als stinkend, den Körpergeruch des Türken als unangenehm.
Zusammenfassend lässt sich sagen, dass Herr Müller alles abwertet, was nicht seinen Vorstellungen von ‚richtigem’ Benehmen, was nicht seiner eigenen Vorstellung von Welt entspricht. Für ihn ist es sogar undenkbar, dass jemand Schriftsteller sein kann, wenn er nicht gut deutsch spricht, da für ihn offenbar nur deutsche Schriftsteller existieren.
Das Verfahren, das Rafik Shami anwendet, um Herrn Müller zu charakterisieren ist für Herrn Müller demnach undenkbar. Die Grenzen seiner Urteile und Wertvorstellungen sind die Grenzen seiner Welt. Er kann daher nicht auf die Idee kommen, sich seinerseits in die vor ihm sitzenden Ausländer einzufühlen und die Welt aus deren Perspektive zu betrachten. Dazu müsste er sich ja auch über viele Dinge informieren, was ihm im Rahmen seines begrenzten Weltbildes nicht möglich ist.
De facto ist es denkbar, zu sehen, dass der Italiener tatsächlich seine nationale Identität verloren hat, seine Muttersprache, seine Kultur und dass er darunter leidet. De facto ist es vorstellbar, dass der Italiener auch nachts von seinem Chef träumt, weil dieser ihn vielleicht miserabel behandelt und demütigt, was Herr Müller aber nur in Erfahrung brächte, wenn er nachforschte. De facto findet der Italiener die Situation, jährlich erneut zum Amt kommen zu müssen und um Aufenthaltserlaubnis anzusuchen absurd und demütigend. Vielleicht meint er seinen Vorschlag ihm die Stempel mitzugeben scherzhaft. Und vielleicht kann man seine Kleidung auch als Ausdruck von Lebensfreude und Sinnlichkeit oder sonst wie jedenfalls aber positiv bewerten.
Tatsächlich gibt es Schriftsteller mit anderer als der deutschen Muttersprache, nicht alle Schriftsteller sprechen deutsch. Herrn Müller fällt es nicht auf, dass beide, er und der arabische Schriftsteller das Problem haben, den Namen des jeweils anderen auszusprechen.
Die Sprachen sind einfach sehr unterschiedlich. Tatsächlich gibt es die islamische Zeitrechnung. Es gibt auch die jüdische und die chinesische Zeitrechnung usw. Die christliche Zeitrechnung ist nicht die einzige auf der Welt. Auch hier wirft Herr Müller einseitig dem arabischen Schriftsteller vor, dieser müsse die Umrechnung der Zeitrechnungen wissen. Es fällt ihm nicht auf, dass er selbst sie nicht im Entferntesten kennt, obwohl er in der Einwanderungsbehörde arbeitet. Schriftsteller scheint in der Weltsicht des Herrn Müller grundsätzlich kein ordentlicher Beruf zu sein. Dass der Mann zudem Erfolg bei Frauen hat, findet er ebenfalls bekrittelnswert, obwohl dies doch auch Anlass zu Bewunderung geben könnte.
Dass der türkische Vater das Recht seines Kindes verteidigt zu spielen und dem Wert eines kaputten Gummibaumblatts nicht so viel Beachtung schenkt wie der Bewegungsfreiheit seines Kindes bringt Herrn Müller auch nach der Frage des Türken, ob er Kinder habe, nicht auf den Gedanken, dass Kinder in der türkischen Kultur möglicher Weise hoch geschätzt werden und die Geste ihm etwas für seine Kinder zu schenken Ausdruck der türkischen Wertschätzung von Kindern, auch der anderer, sein kann. Für ihn gibt es nur eine einzige mögliche Deutung, er wertet dies als Bestechungsversuch und findet nach langem Suchen eine kleine Unregelmäßigkeit, die er als Bestätigung für sein Vorurteil auffasst.
Dass der Türke nicht allein, sondern mit der gesamten Familie erschienen ist, deutet er nicht als besonderen Ausdruck des Respekts für den Besuch bei einem Amt wie er für Dörfler üblich ist, die wenig mit Behörden zu tun haben.
 
Insgesamt ist die Situation vertrackt, da Herr Müller in seiner Weltsicht sicher von Kumpels bestärkt wird oder andererseits nur als Rassist beschimpft wird, er mit seiner Haltung zur Welt jedoch selten die Möglichkeit haben wird, die Anderen von innen her kennen zu lernen und zu verstehen. Andererseits erfährt auch er mit seinen Problemen kein wirkliches Verständnis. Rafik Shami zeigt dies, indem er den Beamten Müller sein Leid ins Leere klagen lässt, denn der Barkeeper hört ihm nicht zu und interessiert sich überhaupt nicht für ihn.
 
Der Text ist hochaktuell, er ist in sich verschachtelt, er lässt sowohl nach der realen Weltsicht der Gastarbeiter und ihrer Probleme fragen wie nach der Möglichkeit der Überwindung begrenzter Weltbilder wie dem des Herrn Müller. Er behandelt das Problem der Integration und das Problem der Vereinzelung des Menschen, der mit seinen Problemen allein gelassen ist.`}</div>
        </>,
      ],
    },
    Sachbuch: {
      title: "Frauen und ihr Erbe",
      description: [
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
        </div>,
      ],
    },
    Lebenslauf: {
      tag: "",
      title: "Lebenslauf",
      description: [
        <>
          <List
            dense={true}
            sx={{ paddingLeft: { xs: 0.0, md: 0.5, sm: 0.5 } }}
          >
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`01.06.1956 geboren in Wieting/ Kärnten als Tochter einer Schneiderin und eines Schmieds`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`1962-66 Volksschule in Steiermark und Kärnten`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`1966-74 Neusprachliches Gymnasium in Villach`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText primary={`Juni 1974 Matura in Villach`} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`Werkstudentin: Studium von Deutsch, Geschichte und Philosophie`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`Jobs als Kellnerin, Tankwartin, Interviewerin, Deutsch als Fremdsprache Lehrerin, Gruppentrainerin, Pädagogin, Erzieherin, Zeitungsverkäuferin, Malermodell usw.`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`1980-1982 im Tagesschulheim des BG 15, Dieffenbachgasse als Erzieherin tätig`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`Mai 1985 Studienabschluss von Deutsch und Geschichte Lehramt`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`1985/86 Probejahr am Akademischen Gymnasium Wien; Erzieherin im Tagesschulheim des BG 10, Ettenreichgasse`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`1986-87 Deutsch als Zweitprache-Unterricht am BFI Wien`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`1987-1990 Mitarbeiterin des Wiener Schulservice, Abteilung Schulberatungsstelle für Ausländer`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`Ab 1987 Lehrerin an der HTL-Donaustadt`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText primary={`06.04.1992 Geburt der Tochter Fanny`} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText primary={`1992-1997 Karenz in Kärnten/Villach`} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText primary={`Seminare zur Montessori-Pädagogik`} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText primary={`Seminare bei Mauricio und Rebeca Wild`} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`Herbst 1995 Gründung der Montessori-Wild-Kindergruppe „Ich-DuWir“ in Sattendorf/Villach-Landskron`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText primary={`28.01.1996 Geburt des Sohnes Julian`} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`seit Herbst 1998 als alleinerziehende Lehrerin in Wien, HTL Donaustadt`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`seit 1972 Beschäftigung mit Literatur und Schriftstellerei; 
2005 Veröffentlichung von Lyrik in „dulzinea 7“; Lesungen`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`Sommer 2005 Leitung eines Workshops „Kreatives Schreiben“ in der Sommerakademie Zakynthos (Vertretung des Schriftstellers Franzobel)`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`01.11.2005 zu Gast in der Sendung „Queer durch“ im Radio Agora/Klagenfurt zum Thema „Frauen und ihr Erbe“`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`2009 Veröffentlichung eines Textes in der Kultur- und Literaturzeitschrift "Sterz" (Streit/Kultur; Nr.101)`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText primary={`01.09.2016 Alterspension`} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`Am 25.5.2018 Lesung in der Buchhandlung "Seeseiten" in der Seestadt Aspern beim 3. Geburtstagsfest der Buchhandlung gemeinsam mit anderen AutorInnen.`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`nach einigen frühen Versuchen in der Malerei im Jahr 1987, neuerliche Versuche mit der Malerei ab Oktober 2020`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="custom-circle-icon" />
              </ListItemIcon>
              <ListItemText
                primary={`März 2021 Veröffentlichung meines Sachbuches "Frauen und ihr Erbe"`}
              />
            </ListItem>
          </List>
        </>,
      ],
    },
  };

  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null
  );
  const [anchorElements, setAnchorElements] = React.useState<
    Record<string, HTMLElement | null>
  >({});
  const [selectedPage, setSelectedPage] = React.useState<PageKey>("Start");
  const [selectedSubPage, setSelectedSubPage] = React.useState<string | null>(
    null
  );

  // card effects
  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };
  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  // chip menu display
  const handleDropDownChipClick = (
    event: React.MouseEvent<HTMLElement>,
    page: string
  ) => {
    setAnchorElements((prev) => ({
      ...prev,
      [page]: event.currentTarget,
    }));
    if (selectedPage != page) handlePageSelection(page);
  };

  // create anchors placeholders initially
  React.useEffect(() => {
    const initialAnchors: Record<string, HTMLElement | null> = {};
    for (const page in pageData) {
      if (pageData[page].subPages) initialAnchors[page] = null;
    }
    setAnchorElements(initialAnchors);
  }, []);

  const handleChipClick = (page: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSelectedPage(page);
    setSelectedSubPage(null);
  };
  const handleClose = (page: string) => {
    setAnchorElements((prev) => ({
      ...prev,
      [page]: null,
    }));
  };

  const handlePageSelection = (page: PageKey, subPage?: string) => {
    setSelectedPage(page);
    if (subPage) {
      setSelectedSubPage(subPage);
      setAnchorElements((prev) => ({
        ...prev,
        [page]: null,
      }));
    } else {
      setSelectedSubPage(null);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 3, md: 3 },
          maxWidth: "800px",
          width: "100%",
          alignItems: "center",
        }} // wraps entire page: Welcome & Wrapper
      >
        <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: { xs: 0, sm: 2, md: 2 },
              alignItems: "center",
              justifyContent: "start",
              justifyItems: "start",
              width: "100%",
            }}
          >
            <Avatar
              src="/assets/marianne_peternell_2.png"
              alt="Profil"
              sx={{
                width: { xs: 80, sm: 110, md: 120 },
                height: { xs: 80, sm: 110, md: 120 },
                overflow: "hidden",
                "& img": {
                  transform: "scale(1.3)", // zoom into image
                  transformOrigin: "25% 30%", // control position of zoom
                },
                marginRight: { xs: 1, sm: 2, md: 4 },
              }}
            />
            <div>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1.19rem",
                    sm: "1.8rem",
                    md: "2.2rem",
                  },
                }}
                variant="h1"
                gutterBottom
              >
                Willkommen bei
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.9rem",
                    sm: "1.4rem",
                    md: "1.7rem",
                  },
                }}
                variant="h2"
              >
                Marianne Marlene Peternell
              </Typography>
            </div>
          </Box>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "800px",
            position: "sticky",
            top: 15,
            zIndex: 99,
          }} // wraps chips + cards
        >
          <StyledToolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "flex-start",
              width: "100%",
              maxWidth: "800px",
            }} // box for the chips
          >
            {Object.keys(pageData).map((page) => {
              if (!pageData[page].subPages) {
                return (
                  <Chip
                    key={page}
                    onClick={() => handleChipClick(page)}
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
                  <React.Fragment key={"fragment_" + page}>
                    <Chip
                      key={page}
                      onClick={(e) => {
                        handleDropDownChipClick(e, page);
                      }}
                      size="medium"
                      label={page}
                      sx={{
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    />
                    <Menu
                      disableScrollLock
                      disableRestoreFocus
                      key={"menu_" + page}
                      anchorEl={anchorElements[page]}
                      id={page}
                      open={Boolean(anchorElements[page])}
                      onClose={() => handleClose(page)}
                      slotProps={{
                        paper: {
                          variant: "outlined",
                          elevation: 2,
                          sx: {
                            my: "4px",
                            pointerEvents: "auto",
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      {Object.keys(pageData[page].subPages).map((subPage) => (
                        <MenuItem
                          key={subPage}
                          selected={subPage === selectedSubPage}
                          onClick={() => handlePageSelection(page, subPage)}
                        >
                          {subPage}
                        </MenuItem>
                      ))}
                    </Menu>
                  </React.Fragment>
                );
              }
            })}
          </StyledToolbar>
        </Box>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid
            component="article"
            size={{ xs: 12, md: 12, sm: 12 }}
            sx={{
              ...(selectedPage === "Gedichte" && {
                position: "relative",
              }),
            }}
          >
            {pageData[selectedPage].description.map((cardDescription, idx) => (
              <SyledCard
                key={"card_" + idx}
                sx={{
                  marginBottom: { xs: 2, sm: 3, md: 4 },
                  ...(selectedPage === "Gedichte" && {
                    height: "100%",
                  }),
                }}
                variant="outlined"
                onFocus={() => handleFocus(0)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === 0 ? "Mui-focused" : ""}
              >
                <StyledCardContent key={"content_" + idx}>
                  {selectedSubPage ? (
                    <div style={{ width: "100%" }}>
                      {
                        <Typography
                          key={"h3_" + idx}
                          gutterBottom
                          variant="h3"
                          component="div"
                          sx={{
                            width: "100%",
                            fontSize: { xs: 18, sm: 23, md: 25 },
                            fontWeight: "bold",
                          }}
                        >
                          {selectedSubPage}
                        </Typography>
                      }
                      <Box
                        sx={{
                          ...(selectedPage === "Gedichte" && {
                            overflowX: "auto",
                            height: "auto",
                          }),
                        }}
                      >
                        <Typography
                          key={"body2_" + idx}
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{
                            width: "100%",
                            ...(selectedPage === "Gedichte" && {
                              whiteSpace: "preserve nowrap", // prevent line breaks
                              wordBreak: "normal", // don't break words
                              overflowWrap: "normal",
                              maxWidth: "100%",
                              width: "100%",
                              float: "left",
                            }),
                          }}
                        >
                          {pageData[selectedPage].subPages?.[
                            selectedSubPage
                          ] ?? <em>Unterseite nicht gefunden.</em>}
                        </Typography>
                      </Box>
                    </div>
                  ) : (
                    <>
                      {pageData[selectedPage].title && (
                        <Typography
                          key={"h3_" + idx}
                          gutterBottom
                          variant="h3"
                          component="div"
                          sx={{
                            width: "100%",
                            fontSize: { xs: 18, sm: 23, md: 25 },
                          }}
                        >
                          {pageData[selectedPage].title}
                        </Typography>
                      )}
                      <Typography
                        key={"body2_" + idx}
                        gutterBottom
                        variant="body2"
                        component="div"
                      >
                        {cardDescription}
                      </Typography>
                    </>
                  )}
                </StyledCardContent>
              </SyledCard>
            ))}
          </Grid>
        </Grid>
        <Divider />
      </Box>
    </>
  );
}
