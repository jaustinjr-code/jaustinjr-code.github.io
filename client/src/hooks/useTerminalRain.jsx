import { useEffect, useMemo, useState } from "react";

// Character pool and grid dimensions for the hero's "terminal rain" backdrop,
// mirroring the design reference's animated background.
const RAIN_CHARACTERS = "01<>{}[]/\\|;:+=-_";
const RAIN_ROW_COUNT = 15;
const RAIN_COLUMN_COUNT = 24;
const LIGHT_INTERVAL_MS = 150; // cadence for lighting a new random cell
const LIGHT_DURATION_MS = 1000; // how long each cell stays lit

// Owns the animated "terminal rain" character grid behind the hero. Generates
// a memoized grid of random glyphs once per mount, then periodically lights a
// random cell for about a second — several cells may be lit at once, which
// produces the flickering-terminal effect. Presentation is delegated to
// <TerminalRain />; this hook only returns data.
//
// Returns:
//   rows     — array of rows, each an array of single characters
//   litCells — Set of "row-col" keys for the currently lit cells
export default function useTerminalRain() {
  // The glyph grid is random but stable for the lifetime of the component so
  // the backdrop doesn't churn on unrelated re-renders.
  const rows = useMemo(
    () =>
      Array.from({ length: RAIN_ROW_COUNT }, () =>
        Array.from(
          { length: RAIN_COLUMN_COUNT },
          () =>
            RAIN_CHARACTERS[Math.floor(Math.random() * RAIN_CHARACTERS.length)],
        ),
      ),
    [],
  );

  const [litCells, setLitCells] = useState(() => new Set());

  useEffect(() => {
    console.debug("[useTerminalRain] starting rain animation", {
      rows: RAIN_ROW_COUNT,
      columns: RAIN_COLUMN_COUNT,
    });

    // Track pending unlight timeouts so unmount can flush them all.
    const pendingTimeouts = new Set();

    const intervalId = setInterval(() => {
      const row = Math.floor(Math.random() * RAIN_ROW_COUNT);
      const column = Math.floor(Math.random() * RAIN_COLUMN_COUNT);
      const cellKey = `${row}-${column}`;

      setLitCells((previous) => {
        const next = new Set(previous);
        next.add(cellKey);
        return next;
      });

      const timeoutId = setTimeout(() => {
        pendingTimeouts.delete(timeoutId);
        setLitCells((previous) => {
          if (!previous.has(cellKey)) return previous;
          const next = new Set(previous);
          next.delete(cellKey);
          return next;
        });
      }, LIGHT_DURATION_MS);
      pendingTimeouts.add(timeoutId);
    }, LIGHT_INTERVAL_MS);

    return () => {
      console.debug("[useTerminalRain] stopping rain animation");
      clearInterval(intervalId);
      pendingTimeouts.forEach((timeoutId) => clearTimeout(timeoutId));
      pendingTimeouts.clear();
    };
  }, []);

  return { rows, litCells };
}
