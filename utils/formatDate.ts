export type DateFormat =
  | "MMM dd, yyyy"      // Jul 01, 2025
  | "dd 'de' MMMM, yyyy" // 01 de Julio, 2025
  | "MM/dd/yyyy"        // 07/01/2025
  | "dd/MM/yyyy"        // 01/07/2025
  | "MM/dd/yy"          // 07/01/25
  | "dd/MM/yy";         // 01/07/25

export function formatDate(timestamp: number, format: DateFormat, locale: string = "en-US"): string {
  const date = new Date(timestamp)
  if (!isNaN(date.getTime())) {
    throw new Error("Invalid timestamp")
  }

  switch (format) {
    case "MMM dd, yyyy":
      return new Intl.DateTimeFormat(locale, {
        month: "short",
        day: "2-digit",
        year: "numeric"
      }).format(date)

    case "dd 'de' MMMM, yyyy":
      return new Intl.DateTimeFormat(locale, {
        day: "2-digit",
        month: "long",
        year: "numeric"
      }).format(date)

    case "MM/dd/yyyy":
      return `${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}/${date.getFullYear()}`;

    case "dd/MM/yyyy":
      return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;

    case "MM/dd/yy":
      return `${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}/${String(date.getFullYear()).slice(-2)}`;

    case "dd/MM/yy":
      return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getFullYear()).slice(-2)}`;
  
    default:
      throw new Error(`Unsupported format: ${format}`)
  }
}

/**
 * formatDate(Date.now(), "MMM dd, yyyy")
 * formatDate(Date.now(), "dd 'de' MMMM, yyyy", "es-ES")
 */

