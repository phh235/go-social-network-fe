export const renderBio = (bio: string): string => {
  return bio
    .split(/(\s*@\w+|\n)/g)
    .map((part) => {
      if (/^@\w+/.test(part.trim())) {
        const company = part.trim().slice(1).toLowerCase()
        return `<span class="hover:underline underline-offset-2 text-[#0095f6] cursor-pointer ms-1">@${company}</span>`
      }
      if (part === '\n') {
        return '<br />'
      }
      return part
    })
    .join('')
}
