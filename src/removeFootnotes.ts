/**
 * Removes footnote links and any block links in the text
 *
 * @param text
 */
export function removeFootnotes(text: string) {
  const re = /\[\^.+?]| ?\^.+?$/gm;
  return text.replace(re, "");
}