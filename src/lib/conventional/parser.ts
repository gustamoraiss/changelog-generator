import type { ParsedCommit } from "./types";

const HEADER_REGEX = /^(\w+)(?:\(([^)]+)\))?(!)?: (.+)$/

export function parseCommit(message: string): ParsedCommit {
  const lines = message.split("\n")
  const header = lines[0]
  const body = lines.slice(1).join("\n").trim() || null
  const match = HEADER_REGEX.exec(header)
  

  if (!match) {
    const type = "other"
    const scope = null
    const description = message
    const body = null
    const breaking = false
    const breakingNote = null
    const conventional = false

    return {
      type,
      scope,
      description,
      body,
      breaking,
      breakingNote,
      conventional
    };
  }

  const type = match[1]
  const scope = match[2] ?? null
  const description = match[4]
  const breaking = match[3] === "!"
  const breakingNote = null
  const conventional = true

  return {
    type,
    scope,
    description,
    body,
    breaking,
    breakingNote,
    conventional
  };

}