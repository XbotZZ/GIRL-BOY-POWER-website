"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent,
  type WheelEvent,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ScrollExpandHeroProps {
  mediaType?: "video" | "image" | "element";
  mediaSrc?: string;
  posterSrc?: string;
  mediaElement?: ReactNode;
  bgImageSrc: string;
  titleLines?: { text: string; className?: string }[];
  tagline?: string;
  scrollHint?: string;
  children?: ReactNode;
}

const ScrollExpandHero = ({
  mediaType = "image",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  mediaElement,
  titleLines,
  tagline,
  scrollHint,
  children,
}: ScrollExpandHeroProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("wheel", handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener("scroll", handleScroll as EventListener);
    window.addEventListener(
      "touchstart",
      handleTouchStart as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener(
      "touchmove",
      handleTouchMove as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener("touchend", handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel as unknown as EventListener
      );
      window.removeEventListener("scroll", handleScroll as EventListener);
      window.removeEventListener(
        "touchstart",
        handleTouchStart as unknown as EventListener
      );
      window.removeEventListener(
        "touchmove",
        handleTouchMove as unknown as EventListener
      );
      window.removeEventListener("touchend", handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);

  return (
    <div
      ref={sectionRef}
      className="transition-colors duration-700 ease-in-out overflow-x-hidden"
    >
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          {/* Background image */}
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt="GIRL & BOY POWER Spa"
              width={1920}
              height={1080}
              className="w-screen h-screen"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div className="absolute inset-0 bg-noir/30" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              {/* Expanding media container */}
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-3xl"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0px 0px 60px rgba(26, 18, 20, 0.4)",
                }}
              >
                {mediaType === "element" && mediaElement ? (
                  <div className="relative w-full h-full flex items-center justify-center rounded-3xl bg-ivory/95 backdrop-blur-sm">
                    {mediaElement}
                  </div>
                ) : mediaType === "video" ? (
                  <div className="relative w-full h-full pointer-events-none">
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover rounded-3xl"
                      controls={false}
                      disablePictureInPicture
                      disableRemotePlayback
                    />
                    <motion.div
                      className="absolute inset-0 bg-noir/40 rounded-3xl"
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={mediaSrc || ""}
                      alt="Spa GIRL & BOY POWER"
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <motion.div
                      className="absolute inset-0 bg-noir/40 rounded-3xl"
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 0.6 - scrollProgress * 0.35 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                {/* Tagline + scroll hint below media */}
                <div className="flex flex-col items-center text-center relative z-10 mt-5 transition-none gap-2">
                  {tagline && (
                    <div
                      className="flex items-center gap-3"
                      style={{
                        transform: `translateX(-${textTranslateX}vw)`,
                      }}
                    >
                      <span className="h-px w-8 bg-rose" />
                      <p className="text-xs font-medium uppercase tracking-[0.3em] text-ivory/80">
                        {tagline}
                      </p>
                      <span className="h-px w-8 bg-azure" />
                    </div>
                  )}
                  {scrollHint && (
                    <motion.p
                      className="text-ivory/50 text-sm font-medium"
                      style={{
                        transform: `translateX(${textTranslateX}vw)`,
                      }}
                      animate={{ opacity: scrollProgress < 0.3 ? 1 : 0 }}
                    >
                      {scrollHint}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Title overlay */}
              <div className="flex items-center justify-center text-center w-full relative z-10 transition-none flex-col gap-2 mix-blend-difference">
                {titleLines?.map((line, i) => (
                  <motion.h1
                    key={i}
                    className={`font-[var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight transition-none ${
                      line.className || "text-ivory"
                    }`}
                    style={{
                      transform: `translateX(${
                        i % 2 === 0 ? "-" : ""
                      }${textTranslateX}vw)`,
                    }}
                  >
                    {line.text}
                  </motion.h1>
                ))}
              </div>

              {/* Scroll indicator dot */}
              <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                animate={{
                  opacity: scrollProgress < 0.2 ? 1 : 0,
                  y: [0, 8, 0],
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <div className="h-10 w-6 rounded-full border border-ivory/30 p-1">
                  <div className="h-2 w-full rounded-full bg-ivory/50" />
                </div>
              </motion.div>
            </div>

            {/* Children content revealed after expansion */}
            <motion.section
              className="flex flex-col w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandHero;
