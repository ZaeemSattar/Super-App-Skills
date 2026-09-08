#!/usr/bin/env node
/**
 * Copies the plugin's skills and docs mirror into the extension directory.
 *
 * vsce only packages files under the extension root, so the payload has to be
 * physically present here at package time. It is NOT committed -- this script is
 * the single source of truth, and `plugins/neuxnet-miniapp/` remains the only
 * place either is edited.
 */
import { cp, rm, readdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const PLUGIN = join(HERE, '..', 'plugins', 'neuxnet-miniapp')

for (const dir of ['skills', 'references']) {
  const dest = join(HERE, dir)
  await rm(dest, { recursive: true, force: true })
  await cp(join(PLUGIN, dir), dest, { recursive: true })
  const count = (await readdir(dest)).length
  console.log(`synced ${dir}/ (${count} top-level entries)`)
}
