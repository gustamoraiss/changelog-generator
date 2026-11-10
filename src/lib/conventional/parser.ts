import type { ParsedCommit } from "./types";

const HEADER_REGEX = /^(\w+)(?:\(([^)]+)\))?: (.+)$/

export function parseCommit(message: string): ParsedCommit {
  const match = HEADER_REGEX.exec(message)

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
  const description = match[3]
  const body = null
  const breaking = false
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