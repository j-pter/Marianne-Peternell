import { useState, Fragment, useRef, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import { pageData, type PageKey } from "../config/index.ts";

const PageHeader = styled(Typography)({
  fontFamily: '"Playfair Display", serif',
  marginBottom: "22px",
  paddingRight: "32px",
  textAlign: "left",
  fontWeight: 700,
  breakAfter: "avoid", // Prevents the header from being on page 1 while the text is on page 2
  breakInside: "avoid",
  WebkitColumnBreakInside: "avoid",
  pageBreakInside: "avoid",
});

const SubChapterHeader = styled(Typography)({
  fontFamily: '"Playfair Display", serif',
  fontSize: "1.25rem",
  fontWeight: 600,
  marginBottom: "10px",
  color: "#5c4033", // Subtle historic dark brown accent
  textAlign: "left",
});

export const StyledBodyText = styled(Typography)({
  whiteSpace: "pre-wrap",
  textAlign: "left",
  overflowWrap: "break-word",
  wordBreak: "break-word",
  fontFamily: '"Lora", serif',
  lineHeight: 1.8,
  color: "#3A3836",
});

// A wrapper to ensure images and custom components don't split in half across columns
const NoBreakBlock = styled(Box)({
  breakInside: "avoid",
  WebkitColumnBreakInside: "avoid",
  pageBreakInside: "avoid",
  display: "block",
  width: "100%",
  maxHeight: "100%", // Prevents massive images from ruining the column height
  marginBottom: "16px",
  "& img": {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
});

const PageCounter = styled(Typography)({
  position: "absolute",
  bottom: "25px",
  right: "35px",
  fontFamily: '"Lora", serif',
  fontSize: "0.85rem",
  color: "#888",
  letterSpacing: "0.5px",
  userSelect: "none",
});

export default function MainContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeChapterIdx, setActiveChapterIdx] = useState(0);
  const [activeSubPage, setActiveSubPage] = useState(0);
  const [chapterPages, setChapterPages] = useState(1);
  const [shouldJumpToLastPage, setShouldJumpToLastPage] = useState(false);

  const chaptersBase = [
    { title: "Vorwort", color: "#4a4a4a", key: "Vorwort" as PageKey },
    { title: "Inhalt", color: "#8b0000", key: "contents" as PageKey },
    { title: "Lebenslauf", color: "#556b2f", key: "Lebenslauf" as PageKey },
    { title: "Gedichte", color: "#4682b4", key: "Gedichte" as PageKey },
    {
      title: "Kurzgeschichten",
      color: "#b8860b",
      key: "Kurzgeschichten" as PageKey,
    },
    { title: "Malerei", color: "#6a5acd", key: "Malerei" as PageKey },
    { title: "Fotografie", color: "#2e8b57", key: "Fotografie" as PageKey },
    {
      title: "Deutsch-Unterricht",
      color: "#cd5c5c",
      key: "Deutsch-Unterricht" as PageKey,
    },
    { title: "Sachbuch", color: "#d2b48c", key: "Sachbuch" as PageKey },
  ];

  // Track page counts per chapter so we can calculate the running total
  const [pageCounts, setPageCounts] = useState<number[]>(
    chaptersBase.map(() => 1),
  );

  const contentRef = useRef<HTMLDivElement>(null);

  const updatePageCount = useCallback(() => {
    if (contentRef.current) {
      const scrollWidth = contentRef.current.scrollWidth;
      const clientWidth = contentRef.current.clientWidth;
      const gapStr = window.getComputedStyle(contentRef.current).columnGap;
      const gap = parseFloat(gapStr) || 0;

      const totalColumns = Math.round(
        (scrollWidth + gap) / (clientWidth + gap),
      );
      const finalCount = totalColumns > 0 ? totalColumns : 1;

      setChapterPages(finalCount);

      // Update global tracking for this specific chapter
      setPageCounts((prev) => {
        if (prev[activeChapterIdx] === finalCount) return prev; // prevent unnecessary renders
        const next = [...prev];
        next[activeChapterIdx] = finalCount;
        return next;
      });

      if (shouldJumpToLastPage) {
        setActiveSubPage(finalCount - 1);
        setShouldJumpToLastPage(false);
      }
    }
  }, [activeChapterIdx, shouldJumpToLastPage]);

  useEffect(() => {
    updatePageCount();

    const timeoutId = setTimeout(updatePageCount, 250);
    window.addEventListener("resize", updatePageCount);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updatePageCount);
    };
  }, [activeChapterIdx, isOpen, updatePageCount]);

  const goToChapter = (idx: number) => {
    if (!isOpen) setIsOpen(true);
    setActiveChapterIdx(idx);
    setActiveSubPage(0);
    setShouldJumpToLastPage(false);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeSubPage < chapterPages - 1) {
      setActiveSubPage((p) => p + 1);
    } else if (activeChapterIdx < chaptersBase.length - 1) {
      setActiveChapterIdx((c) => c + 1);
      setActiveSubPage(0);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeSubPage > 0) {
      setActiveSubPage((p) => p - 1);
    } else if (activeChapterIdx > 0) {
      setShouldJumpToLastPage(true); // Flag that we need to jump to the end of the previous chapter
      setActiveChapterIdx((c) => c - 1);
      setActiveSubPage(0); // Temporarily set to 0 while we wait for updatePageCount to measure
    }
  };

  const activeChapterInfo = chaptersBase[activeChapterIdx];
  const activeData = pageData[activeChapterInfo.key];

  const whitePageStyle = {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#FDFBF7",
    boxSizing: "border-box" as const,
    boxShadow: "inset 0 0 20px rgba(0,0,0,0.03)",
    overflow: "hidden" as const, // Lock outer scrolling
    transition: "opacity 0.4s ease",
  };

  const pageCurlStyle = {
    position: "absolute" as const,
    bottom: 0,
    width: "45px",
    height: "45px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    zIndex: 20,
    filter: "drop-shadow(-2px -2px 3px rgba(0,0,0,0.15))",
    "&:hover": {
      width: "65px",
      height: "65px",
      filter: "drop-shadow(-3px -3px 5px rgba(0,0,0,0.25))",
    },
  };

  return (
    <Box
      onClick={
        isOpen
          ? (e) => {
              e.stopPropagation();
              setIsOpen(false);
            }
          : undefined
      }
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#3e2723",
        backgroundImage:
          "radial-gradient(circle at center, #4e342e 0%, #1a1110 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        perspective: "1500px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: { xs: "5%", md: "15%" },
          top: { xs: "3%", md: "12%" },
          backgroundColor: "#faf8f5",
          padding: "12px 12px 35px 12px",
          boxShadow: "5px 8px 15px rgba(0,0,0,0.6)",
          transform: "rotate(-8deg)",
          zIndex: 2,
        }}
      >
        {/* foto */}
        <Box
          component="img"
          src="/assets/marianne_peternell_2.png"
          alt="Portrait"
          sx={{
            width: { xs: "110px", md: "160px" },
            height: { xs: "110px", md: "160px" },
            objectFit: "cover",
            filter: "grayscale(0%) contrast(1.1) sepia(15%)",
          }}
        />
        <Typography
          sx={{
            fontFamily: '"Caveat", cursive',
            color: "#333",
            textAlign: "center",
            mt: 1,
            fontSize: "0.9rem",
            opacity: 0.8,
            transform: "rotate(-2deg)",
          }}
        >
          Wien, 2018
        </Typography>
      </Box>

      {/* Pen on Desk */}
      <Box
        sx={{
          position: "absolute",
          right: { xs: "5%", md: "20%" },
          top: "55%",
          width: "8px",
          height: "180px",
          background: "linear-gradient(to right, #111 0%, #444 50%, #111 100%)",
          borderRadius: "4px",
          transform: "rotate(15deg)",
          boxShadow: "6px 6px 12px rgba(0,0,0,0.6)",
          zIndex: 2,
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-15px",
            left: "0",
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderTop: "15px solid #d4af37",
          },
        }}
      />

      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          position: "relative",
          width: { xs: "280px", sm: "320px", md: "400px" },
          height: { xs: "420px", sm: "480px", md: "550px" },
          transformStyle: "preserve-3d",
          transform: isOpen
            ? {
                xs: "translateX(-15%) scale(1.1)",
                sm: "translateX(-40%) scale(1.15)",
                md: "translateX(-35%) scale(1.25)",
              }
            : "translateX(0) scale(1)",
          transition: "transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)",
          zIndex: 3,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: "5%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 1,
              zIndex: 0,
            }}
          >
            {chaptersBase.map((chapter, index) => (
              <Box
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToChapter(index);
                }}
                sx={{
                  position: "relative",
                  width: "max-content",
                  minWidth: "60px",
                  height: "32px",
                  backgroundColor: chapter.color,
                  borderRadius: "0 6px 6px 0",
                  cursor: "pointer",
                  boxShadow: `4px 4px 10px rgba(0,0,0,0.4), inset 2px 0 4px rgba(0,0,0,0.3)`,
                  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  zIndex: 20 - index,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  pl: 2,
                  pr: 1.5,
                  overflow: "hidden",
                  transform: "translateX(45px)",
                  "&:hover": { transform: "translateX(calc(100% - 2px))" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Caveat", cursive',
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "1.0rem",
                  }}
                >
                  {chapter.title}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Solid Page Base Board */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#e3dfd5",
              borderRadius: "0 14px 14px 0",
              boxShadow: isOpen ? "10px 15px 30px rgba(0,0,0,0.5)" : "none",
              zIndex: 1,
              borderLeft: "2px solid rgba(0,0,0,0.1)",
            }}
          >
            {/* Viewport Boundary */}
            <Box
              sx={{
                ...whitePageStyle,
                borderRadius: "0 14px 14px 0",
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? "auto" : "none",
                zIndex: 2,
                // Apply padding directly to viewport wrapper
                padding: { xs: "24px", md: "40px" },
              }}
            >
              {/* 
                === STRICT BOUNDED CSS COLUMN CONTAINER === 
                By using absolute inset positioning (top/bottom/left/width) instead of padding, 
                we explicitly limit the height. If text exceeds this height, 
                the browser is forced to generate a new column. 
              */}
              <Box
                ref={contentRef}
                sx={{
                  width: "100%",
                  height: "100%", // Inherits height minus padding perfectly

                  // % is invalid for columnWidth.
                  // 100vw forces it to clamp exactly to the available container width!
                  columnWidth: "100vw",
                  WebkitColumnWidth: "100vw",

                  columnFill: "auto",
                  WebkitColumnFill: "auto",

                  columnGap: { xs: "48px", md: "80px" }, // Gap equals exact padding offset (24*2, 40*2)
                  WebkitColumnGap: { xs: "48px", md: "80px" },

                  transform: {
                    xs: `translateX(calc(-${activeSubPage} * (100% + 48px)))`,
                    md: `translateX(calc(-${activeSubPage} * (100% + 80px)))`,
                  },
                  // transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {activeChapterInfo.key === "contents" && (
                  <NoBreakBlock>
                    <PageHeader variant="h4">
                      {activeChapterInfo.title}
                    </PageHeader>
                    <Box sx={{ lineHeight: 2.3 }}>
                      {chaptersBase.map((ch, idx) => (
                        <Box
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            goToChapter(idx);
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            cursor: "pointer",
                            borderBottom: "1px dotted #ccc",
                            fontFamily: '"Lora", serif',
                            fontSize: "1.05rem",
                            color: "#3A3836",
                            mb: 0.5,
                            "&:hover": { color: "#8b0000" },
                          }}
                        >
                          <span>{ch.title}</span>
                        </Box>
                      ))}
                    </Box>
                  </NoBreakBlock>
                )}

                {activeChapterInfo.key !== "contents" && activeData && (
                  <>
                    {activeData.title && (
                      <PageHeader variant="h4">{activeData.title}</PageHeader>
                    )}

                    {activeData.content?.map((item, i) => (
                      <Fragment key={`content-${i}`}>
                        {typeof item === "string" ? (
                          <StyledBodyText sx={{ mb: 2 }}>{item}</StyledBodyText>
                        ) : (
                          <NoBreakBlock>{item}</NoBreakBlock>
                        )}
                      </Fragment>
                    ))}

                    {/* Subchapters with forced Page Break */}
                    {activeData.subChapters &&
                      Object.entries(activeData.subChapters).map(
                        ([subTitle, subContent], idx) => (
                          <Fragment key={`sub-${idx}`}>
                            <SubChapterHeader
                              variant="h6"
                              sx={{
                                breakBefore: "column",
                                pageBreakBefore: "always",
                                WebkitColumnBreakBefore: "always",
                              }}
                            >
                              {subTitle}
                            </SubChapterHeader>

                            {typeof subContent === "string" ? (
                              <StyledBodyText sx={{ mb: 2 }}>
                                {subContent}
                              </StyledBodyText>
                            ) : (
                              <Box sx={{ mb: 2 }}>
                                {subContent as React.ReactElement}
                              </Box>
                            )}
                          </Fragment>
                        ),
                      )}
                  </>
                )}
              </Box>

              {isOpen &&
                (() => {
                  // Sum pages of all chapters before the current one
                  const previousPages = pageCounts
                    .slice(0, activeChapterIdx)
                    .reduce((sum, count) => sum + count, 0);

                  const currentGlobalPage = previousPages + activeSubPage + 1;

                  return <PageCounter>{currentGlobalPage}</PageCounter>;
                })()}

              {(activeSubPage < chapterPages - 1 ||
                activeChapterIdx < chaptersBase.length - 1) && (
                <Box
                  onClick={handleNext}
                  sx={{
                    ...pageCurlStyle,
                    right: 0,
                    background:
                      "linear-gradient(135deg, transparent 50%, #e3dfd5 50%, #f4f0ea 55%)",
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>

        <Box
          onClick={
            !isOpen
              ? () => setIsOpen(true)
              : activeSubPage > 0 || activeChapterIdx > 0
                ? handlePrev
                : undefined
          }
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transformOrigin: "left center",
            transformStyle: "preserve-3d",
            transform: isOpen ? "rotateY(-180deg)" : "rotateY(0deg)",
            transition: "transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)",
            zIndex: 2,
            cursor: !isOpen
              ? "pointer"
              : activeSubPage > 0 || activeChapterIdx > 0
                ? "pointer"
                : "default",
          }}
        >
          {/* Front Shell Outer Leather Cover Layout */}
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              backgroundColor: "#1c2833",
              borderRadius: "4px 14px 14px 4px",
              boxShadow: isOpen
                ? "none"
                : "15px 20px 30px rgba(0,0,0,0.8), inset 6px 0 12px rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Golden Embossed Title */}
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Playfair Display", serif',
                color: "#d4af37", // Classic gold
                textAlign: "center",
                fontWeight: 700,
                // Creates a stamped/embossed metallic effect
                textShadow:
                  "1px 2px 3px rgba(0,0,0,0.8), -1px -1px 1px rgba(255,255,255,0.2)",
                px: 3,
                lineHeight: 1.4,
                mt: 4
              }}
            >
              Marianne
              <br />
              Marlene
              <br />
              Peternell
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Playfair Display", serif',
                color: "#d4af37", // Classic gold
                textAlign: "center",
                fontWeight: 700,
                mt: 10,
                // Creates a stamped/embossed metallic effect
                textShadow:
                  "1px 2px 3px rgba(0,0,0,0.8), -1px -1px 1px rgba(255,255,255,0.2)",
                px: 3,
                lineHeight: 1.4,
              }}
            >
              1956 - 2024
            </Typography>

            {/* Decorative Book Spine Hinge Indentation */}
            <Box
              sx={{
                position: "absolute",
                left: "14px",
                top: 0,
                bottom: 0,
                width: "4px",
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.5), rgba(255,255,255,0.15), rgba(0,0,0,0.5))",
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              backgroundColor: "#e3dfd5",
              borderRadius: "14px 4px 4px 14px",
              boxShadow: isOpen ? "-10px 15px 30px rgba(0,0,0,0.5)" : "none",
            }}
          >
            <Box
              sx={{
                ...whitePageStyle,
                borderRadius: "14px 0 0 14px",
                opacity: 1,
                borderRight: "1px solid #dcd7cb",
                background: `linear-gradient(to left, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.03) 8%, #FDFBF7 25%)`,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
