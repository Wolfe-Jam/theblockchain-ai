/**
 * 🔒 SECURE LOGGING UTILITY - theBlockchain.ai Foundation
 * 
 * Simple, lightweight logging for serverless functions.
 * Preserves the founder's elegant simplicity while adding security.
 * 
 * @security Prevents information disclosure in production logs
 */

// Environment detection for serverless functions
const isDev = process.env.NODE_ENV === 'development' || process.env.NETLIFY_DEV === 'true';

const logger = {
  /**
   * Development-only console.log
   * Use for general information
   */
  log: (...args) => {
    if (isDev) console.log(...args);
  },

  /**
   * Development-only console.error
   * Use for error logging
   */
  error: (...args) => {
    if (isDev) console.error(...args);
  },

  /**
   * Development-only console.warn
   * Use for warnings
   */
  warn: (...args) => {
    if (isDev) console.warn(...args);
  },

  /**
   * GitHub API specific logging
   * @param {string} action - API action being performed
   * @param {any} data - Data to log (sanitized)
   */
  github: (action, data) => {
    if (isDev) {
      console.log(`🐙 GitHub API: ${action}`, data);
    }
  },

  /**
   * AI processing logging
   * @param {string} action - AI action being performed
   * @param {any} data - Data to log
   */
  ai: (action, data) => {
    if (isDev) {
      console.log(`🤖 AI: ${action}`, data);
    }
  }
};

module.exports = { logger };