export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <p className="text-foreground/70">© {currentYear} VENO.DEV. All rights reserved.</p>
        <p className="text-sm text-foreground/50 mt-2">Crafted with passion and modern web technologies.</p>
      </div>
    </footer>
  )
}
