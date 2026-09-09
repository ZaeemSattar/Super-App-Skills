#!/usr/bin/env node
/**
 * Copies the plugin's skills and docs mirror into cli/ so npm can ship them.
 *
 * Same contract as extension/sync-payload.mjs: the payload is NOT committed,
 * `plugins/neuxnet-miniapp/` stays the only place skills and docs are edited.
 */
import { cp, rm, readdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = join(HERE, '..')
const PLUGIN = join(ROOT, 'plugins', 'neuxnet-miniapp')
const CLI = join(ROOT, 'cli')

for (const dir of ['skills', 'references']) {
  const dest = join(CLI, dir)
  await rm(dest, { recursive: true, force: true })
  await cp(join(PLUGIN, dir), dest, { recursive: true })
  const count = (await readdir(dest)).length
  console.log(`synced cli/${dir}/ (${count} top-level entries)`)
}
