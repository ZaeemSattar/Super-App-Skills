#!/usr/bin/env sh
# Install the Neuxnet Super App Mini App skills for Claude Code.
#
#   curl -fsSL https://raw.githubusercontent.com/ZaeemSattar/Super-App-Skills/main/install/install.sh | sh
#   curl -fsSL .../install.sh | sh -s -- --global
#
# Downloads the repo tarball and copies plugins/neuxnet-miniapp/{skills,references}
# into <target>/.claude/skills. No npm, no Claude Code plugin system required.
set -eu

REPO="ZaeemSattar/Super-App-Skills"
BRANCH="${SUPER_APP_SKILLS_REF:-main}"
REFS_DIRNAME=".super-app-references"
TARGET="$PWD"

while [ $# -gt 0 ]; do
  case "$1" in
    -g|--global) TARGET="$HOME" ;;
    --dir) shift; TARGET="${1:?--dir needs a path}" ;;
    -h|--help)
      echo "Usage: install.sh [--global] [--dir <path>]"
      exit 0 ;;
    *) echo "unknown option: $1" >&2; exit 1 ;;
  esac
  shift
done

command -v curl >/dev/null 2>&1 || { echo "error: curl is required" >&2; exit 1; }
command -v tar  >/dev/null 2>&1 || { echo "error: tar is required" >&2; exit 1; }

DEST="$TARGET/.claude/skills"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT INT TERM

echo "Downloading skills from $REPO@$BRANCH..."
curl -fsSL "https://codeload.github.com/$REPO/tar.gz/refs/heads/$BRANCH" \
  | tar -xz -C "$TMP"

SRC="$(find "$TMP" -type d -path '*/plugins/neuxnet-miniapp' -maxdepth 3 | head -n 1)"
[ -n "$SRC" ] || { echo "error: could not find the skills in the downloaded archive" >&2; exit 1; }

mkdir -p "$DEST"
count=0
for dir in "$SRC/skills"/*/; do
  [ -d "$dir" ] || continue
  name="$(basename "$dir")"
  rm -rf "$DEST/$name"
  cp -R "$dir" "$DEST/$name"
  echo "  installed $name"
  count=$((count + 1))
done

rm -rf "$DEST/$REFS_DIRNAME"
cp -R "$SRC/references" "$DEST/$REFS_DIRNAME"

echo ""
echo "$count skills installed -> $DEST"
echo "Docs mirror -> $DEST/$REFS_DIRNAME"
echo ""
echo "Restart Claude Code, then just ask it - e.g. \"scaffold a new Neuxnet mini app\"."
