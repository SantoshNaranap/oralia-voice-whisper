
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full bg-transparent border-transparent hover:bg-white/10 hover:border-white/20"
    >
      <motion.div
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 30 }}
        transition={{ duration: 0.3 }}
        key={theme}
      >
        {theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] text-oralia-light" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] text-oralia-dark" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
