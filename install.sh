#!/usr/bin/env bash
set -euo pipefail

# ==============================================================================
# Viết Pro — Universal Installer for Antigravity (AGY) & Codex
# Repository: https://github.com/abm-dungtq/viet-pro-codex
# ==============================================================================

REPO_URL="https://github.com/abm-dungtq/viet-pro-codex.git"
SKILL_NAME="viet-pro"
TARGET_ENV="all"
INSTALL_MODE="copy" # copy or symlink
WORKSPACE_MODE=false

print_help() {
  cat << EOF
Viết Pro — Trình cài đặt tự động cho Google Antigravity & OpenAI Codex

Cách dùng:
  ./install.sh [tuỳ chọn]
  curl -fsSL https://raw.githubusercontent.com/abm-dungtq/viet-pro-codex/main/install.sh | bash

Tuỳ chọn:
  --agy, --antigravity  Chỉ cài cho Google Antigravity (~/.gemini/config/skills/viet-pro)
  --codex               Chỉ cài cho OpenAI Codex (~/.codex/skills/viet-pro)
  --all                 Cài cho cả hai môi trường nếu có (mặc định)
  --workspace, -w       Cài vào workspace hiện tại (.agents/skills/viet-pro)
  --link, -l            Tạo symlink thay vì copy (chỉ khi chạy từ repo local)
  --help, -h            Hiển thị trợ giúp này
EOF
}

# Parse arguments
while [[ $# -gt 0 ]]; do
  case "$1" in
    --agy|--antigravity)
      TARGET_ENV="agy"
      shift
      ;;
    --codex)
      TARGET_ENV="codex"
      shift
      ;;
    --all)
      TARGET_ENV="all"
      shift
      ;;
    --workspace|-w)
      WORKSPACE_MODE=true
      shift
      ;;
    --link|-l)
      INSTALL_MODE="symlink"
      shift
      ;;
    --help|-h)
      print_help
      exit 0
      ;;
    *)
      echo "Lỗi: Tuỳ chọn không hợp lệ '$1'"
      print_help
      exit 1
      ;;
  esac
done

SCRIPT_DIR=""
if [ -t 0 ] || [ -f "$0" 2>/dev/null ]; then
  SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" 2>/dev/null && pwd || true)"
fi

TEMP_DIR=""
cleanup() {
  if [ -n "$TEMP_DIR" ] && [ -d "$TEMP_DIR" ]; then
    rm -rf "$TEMP_DIR"
  fi
}
trap cleanup EXIT

# Determine source directory
SOURCE_SKILL_DIR=""
if [ -n "$SCRIPT_DIR" ] && [ -d "$SCRIPT_DIR/skills/$SKILL_NAME" ]; then
  SOURCE_SKILL_DIR="$SCRIPT_DIR/skills/$SKILL_NAME"
else
  echo "==> Đang tải Viết Pro từ GitHub ($REPO_URL)..."
  TEMP_DIR="$(mktemp -d)"
  git clone --depth 1 "$REPO_URL" "$TEMP_DIR/viet-pro-codex" >/dev/null 2>&1
  SOURCE_SKILL_DIR="$TEMP_DIR/viet-pro-codex/skills/$SKILL_NAME"
  INSTALL_MODE="copy" # Remote downloads must be copied
fi

if [ ! -d "$SOURCE_SKILL_DIR" ]; then
  echo "Lỗi: Không tìm thấy thư mục skill tại $SOURCE_SKILL_DIR"
  exit 1
fi

install_to_dir() {
  local target_dir="$1"
  local name="$2"

  echo "==> Đang cài đặt $SKILL_NAME cho $name..."
  mkdir -p "$(dirname "$target_dir")"

  if [ -e "$target_dir" ] || [ -L "$target_dir" ]; then
    rm -rf "$target_dir"
  fi

  if [ "$INSTALL_MODE" = "symlink" ]; then
    ln -s "$SOURCE_SKILL_DIR" "$target_dir"
    echo "    ✓ Đã tạo liên kết (symlink): $target_dir -> $SOURCE_SKILL_DIR"
  else
    cp -R "$SOURCE_SKILL_DIR" "$target_dir"
    echo "    ✓ Đã sao chép vào: $target_dir"
  fi
}

echo "=================================================="
echo "    Cài đặt Viết Pro (Universal: AGY + Codex)     "
echo "=================================================="

INSTALLED_ANY=false

if [ "$WORKSPACE_MODE" = true ]; then
  DEST_DIR="$(pwd)/.agents/skills/$SKILL_NAME"
  install_to_dir "$DEST_DIR" "Workspace (.agents/skills)"
  INSTALLED_ANY=true
else
  # Install to Antigravity
  if [ "$TARGET_ENV" = "agy" ] || [ "$TARGET_ENV" = "all" ]; then
    AGY_DIR="$HOME/.gemini/config/skills/$SKILL_NAME"
    install_to_dir "$AGY_DIR" "Google Antigravity (Global)"
    INSTALLED_ANY=true
  fi

  # Install to Codex
  if [ "$TARGET_ENV" = "codex" ] || [ "$TARGET_ENV" = "all" ]; then
    CODEX_DIR="${CODEX_HOME:-$HOME/.codex}/skills/$SKILL_NAME"
    install_to_dir "$CODEX_DIR" "OpenAI Codex"
    INSTALLED_ANY=true
  fi
fi

if [ "$INSTALLED_ANY" = true ]; then
  echo ""
  echo "=================================================="
  echo "✓ Cài đặt hoàn tất thành công!"
  echo ""
  echo "Cách sử dụng trong Google Antigravity:"
  echo "  - Gọi tự nhiên: 'Dùng skill viet-pro viết bài...'"
  echo "  - Hoặc gọi lệnh: /viet-pro"
  echo ""
  echo "Cách sử dụng trong OpenAI Codex:"
  echo "  - Gọi lệnh: \$viet-pro <yêu cầu>"
  echo "=================================================="
fi
