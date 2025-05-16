// Generate a unique ID for notes
export function generateUniqueId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9)
}

// Get a random color for notes
export function getRandomColor(): string {
  const colors = [
    "#FFD93D", // Yellow (primary accent)
    "#6A0572", // Purple (secondary accent)
    "#FF6B6B", // Red
    "#4ECDC4", // Teal
    "#FF8C42", // Orange
    "#A06CD5", // Lavender
    "#00B4D8", // Blue
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}
