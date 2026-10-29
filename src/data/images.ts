/**
 * BILDER MIT ALT-TEXTEN
 * -------------------------------------------------------------
 * Bild austauschen: neue Datei in src/assets/img/ legen und hier den Import ändern.
 * Alt-Text = kurze Beschreibung für Screenreader und Google.
 * Bilder werden beim Bauen automatisch in WebP und mehreren Größen erzeugt.
 */
import logoHell from '../assets/img/logo-valiora-hell.png';
import logoDunkel from '../assets/img/logo-valiora-dunkel.png';
import simon from '../assets/img/simon-reinkober.jpg';

export const images = {
  /** Logo für dunkle Hintergründe (weiße Schrift) */
  logoHell: { src: logoHell, alt: 'VALIORA – Partner für Pflegeunternehmen' },
  /** Logo für helle Hintergründe (blaue Schrift) */
  logoDunkel: { src: logoDunkel, alt: 'VALIORA – Partner für Pflegeunternehmen' },
  /** Porträt Ansprechpartner */
  simon: {
    src: simon,
    alt: 'Simon Reinkober, Geschäftsführer von VALIORA, lächelnd im hellen Strickpullover vor Holzlamellen und Grünpflanze',
  },
} as const;
