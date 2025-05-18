import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'fs'

// Verify that the index page includes the expected heading text

test('index page contains heading text', () => {
  const content = fs.readFileSync('./pages/index.js', 'utf8')
  assert.ok(content.includes('<h1>blog post to tweet thread</h1>'))
})

// Verify that the API route defines the base prompt prefix

test('API route defines basePromptPrefix', () => {
  const content = fs.readFileSync('./pages/api/generate.js', 'utf8')
  assert.ok(content.includes('const basePromptPrefix'))
})
