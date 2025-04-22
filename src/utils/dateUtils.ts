/**
 * Format a timestamp to a human-readable format
 * e.g. "Just now", "1m", "2h", "3d", "1w", "2mo", "1y"
 */
export function formatTimeAgo(timestamp: string): string {
  const now = new Date()
  const date = new Date(timestamp)
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  // Less than 60 seconds ago - "Just now"
  if (seconds < 60) {
    return 'Just now'
  }

  // Less than 60 minutes ago - "X minutes"
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) {
    return `${minutes}${minutes === 1 ? 'm' : 'm'}`
  }

  // Less than 24 hours ago - "X hours"
  const hours = Math.floor(minutes / 60)
  if (hours < 24) {
    return `${hours}${hours === 1 ? 'h' : 'h'}`
  }

  // Less than 7 days ago - "X days"
  const days = Math.floor(hours / 24)
  if (days < 7) {
    return `${days}${days === 1 ? 'd' : 'd'}`
  }

  // Less than 4 weeks ago - "X weeks"
  const weeks = Math.floor(days / 7)
  if (weeks < 4) {
    return `${weeks}${weeks === 1 ? 'w' : 'w'}`
  }

  // Less than 12 months ago - "X months"
  const months = Math.floor(days / 30)
  if (months < 12) {
    return `${months}${months === 1 ? 'mo' : 'mo'}`
  }

  // More than 12 months ago - "X years"
  const years = Math.floor(days / 365)
  return `${years}${years === 1 ? 'y' : 'y'}`
}
