export function safeJsonParse<T>(str: string, fallback: T): T {
  try {
    return JSON.parse(str) as T;
  } catch {
    return fallback;
  }
}

/**
 * type User = { name: string, age: number }
 * 
 * const user = safeJsonparse<User>()
 */