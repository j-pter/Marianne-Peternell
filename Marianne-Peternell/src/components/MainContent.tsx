import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";

type PageKey = keyof typeof pageData;
const pageData = {
  Start: [
    {
      tag: "",
      title: "Willkommen!",
      description:
        "Ich habe auf diesen Seiten Texte und Bilder veröffentlicht, die im Laufe der letzten Jahre entstanden sind.\n" +
        "Es handelt sich um Literarisches, Malerisches, Theoretisches und Persönliches.\n" +
        "Ich bemühe mich, die Homepage immer wieder zu aktualisieren.\n" +
        "Viel Vergnügen! ",
    },
  ],
  Gedichte: [
    {
      img: "https://picsum.photos/800/450?random=2",
      tag: "Product",
      title: "Innovative product features that drive success",
      description:
        "Explore the key features of friendly interfaces to robust functionality, learn why our product stands out.",
    },
  ],
  Kurzgeschichten: [
    {
      img: "https://picsum.photos/800/450?random=4",
      tag: "Company",
      title: "Our company's journey: milestones and achievements",
      description:
        "Takeway. From humble beginnings to industry leader, discover our story of growth and success.",
      authors: [{ name: "Cindy Baker", avatar: "/static/images/avatar/3.jpg" }],
    },
  ],
  Malerei: [
    {
      img: "https://picsum.photos/800/450?random=45",
      tag: "Engineering",
      title: "Pioneering sustainable engineering solutions",
      description:
        "Learn about our  create a greener future. Discover the impact of our eco-friendly initiatives.",
    },
  ],
  Photographie: [
    {
      img: "https://picsum.photos/800/450?random=6",
      tag: "Product",
      title: "Maximizing efficiency with our latest product updates",
      description:
        "Our recent prview of the new features and improvements that can elevate your workflow.",
    },
  ],
  "Deutsch-Unterricht": [
    {
      img: "https://picsum.photos/800/450?random=6",
      tag: "Product",
      title: "Maximizing efficiency with our latest product updates",
      description:
        "Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.",
    },
  ],
  Lebenslauf: [
    {
      img: "https://picsum.photos/800/450?random=6",
      tag: "",
      title: "Lebenslauf",
      description:
        "" +
        "1.6. 1956 geboren in Wieting/ Kärnten als Tochter einer Schneiderin und eines Schmieds" +
        "1962-66 Volksschule in Steiermark und Kärnten" +
        "1966-74 Neusprachliches Gymnasium in Villach" +
        "Juni 1974 Matura in Villach " +
        "Werkstudentin: Studium von Deutsch, Geschichte und Philosophie" +
        "Jobs als Kellnerin, Tankwartin, Interviewerin, Deutsch als Fremdsprache Lehrerin, Gruppentrainerin, Pädagogin, Erzieherin, Zeitungsverkäuferin, Malermodell usw." +
        "1980-1982 im Tagesschulheim des BG 15, Dieffenbachgasse als Erzieherin tätig" +
        "Mai 1985 Studienabschluss von Deutsch und Geschichte Lehramt" +
        "1985/86 Probejahr am Akademischen Gymnasium Wien; Erzieherin im Tagesschulheim des" +
        "              BG 10, Ettenreichgasse" +
        "1986-87 Deutsch als Zweitprache-Unterricht am BFI Wien" +
        "1987-1990 Mitarbeiterin des Wiener Schulservice, Abteilung Schulberatungsstelle für" +
        "                  Ausländer" +
        "Seit 1987 Lehrerin an der HTL-Donaustadt" +
        "6.4.1992 Geburt der Tochter Fanny   " +
        "Seminare zur Montessori-Pädagogik" +
        "Seminare bei Mauricio und Rebeca Wild" +
        "Herbst 1995 Gründung der Montessori-Wild-Kindergruppe „Ich-DuWir“ in Sattendorf/Villach-Landskron" +
        "28.1.1996 Geburt des Sohnes Julian" +
        "1992-1997 Karenz in Kärnten/Villach" +
        " seit Herbst 1998 als alleinerziehende Lehrerin in Wien, HTL Donaustadt" +
        " seit 1972 Beschäftigung mit Literatur und Schriftstellerei; 2005 Veröffentlichung von Lyrik in „dulzinea 7“; Lesungen" +
        "Sommer 2005 Leitung eines Workshops „Kreatives Schreiben“ in der Sommerakademie Zakynthos (Vertretung des Schriftstellers Franzobel)" +
        "1.11.2005 zu Gast in der Sendung „Queer durch“ im Radio Agora/Klagenfurt zum Thema „Frauen und ihr Erbe“" +
        '2009 Veröffentlichung eines Textes in der Kultur- und Literaturzeitschrift "Sterz" (Streit/Kultur; Nr.101)' +
        "1.9.2016 Alterspension" +
        'Am 25.5.2018 Lesung in der Buchhandlung "Seeseiten" in der Seestadt Aspern beim 3. Geburtstagsfest der Buchhandlung gemeinsam mit anderen AutorInnen.' +
        "nach einigen frühen Versuchen in der Malerei im Jahr 1987, neuerliche Versuche mit der Malerei ab Oktober 2020" +
        'März 2021 Veröffentlichung meines Sachbuches "Frauen und ihr Erbe" als ebook z.B. bei amazon für den kindle.' +
        "https://www.lehmanns.de/shop/sozialwissenschaften/56321233-9783753182216-frauen-und-ihr-erbe" +
        "als ebook im epub-Format lesen!" +
        "und als Taschenbuch in jeder Buchhandlung bestellbar z.B.beim Morawa:" +
        "https://www.morawa.at/detail/ISBN-9783754970386/Peternell-Marianne/Frauen-und-ihr-Erbe" +
        "oder beim Faltershop: https://shop.falter.at/detail/9783754970386/frauen-und-ihr-erbe",
    },
  ],
};

const SyledCard = styled(Card)(({ theme }) => ({
  // display: "",
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

const SyledCardContent = styled(CardContent)({
  // display: "flex",
  overflow: "auto",
  wordWrap: "break-word",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null
  );
  const [selectedPage, setSelectedPage] = React.useState<PageKey>("Start");

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = (page: PageKey) => {
    setSelectedPage(page);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 4, width: "100%" }}
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
          flexDirection: { xs: "column-reverse", md: "row" },
          width: "100%",
          justifyContent: "space-between",
          alignItems: { xs: "start", md: "center" },
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "initial",
            width: "100%",
          }}
        >
          {Object.keys(pageData).map((page) => (
            <Chip
              onClick={() => handleClick(page)}
              size="medium"
              label={page}
              sx={{
                backgroundColor: "transparent",
                border: "none",
              }}
            />
          ))}
        </Box>
      </Box>
      <Grid container spacing={2} columns={0}>
        <Grid size={{ xs: 12, md: 3 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(0)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 0 ? "Mui-focused" : ""}
          >
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {pageData[selectedPage][0].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {pageData[selectedPage][0].title}
              </Typography>
              <StyledTypography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {pageData[selectedPage][0].description}
              </StyledTypography>
            </SyledCardContent>
          </SyledCard>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
}
