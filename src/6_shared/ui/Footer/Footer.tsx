export const Footer = () => {
  return (
    <footer className="flex h-14 items-center justify-center">
      <span className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} LMS. All rights reserved.
      </span>
    </footer>
  );
};
