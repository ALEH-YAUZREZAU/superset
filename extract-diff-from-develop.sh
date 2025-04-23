#!/bin/bash

# Ветка с исходной версией
BASE_BRANCH="superset-4.0.2"
# Текущая рабочая ветка
TARGET_BRANCH="develop"
# Папка, куда будет скопирован diff
OUTPUT_DIR="./superset-diff"

echo "🚀 Извлекаем изменения из ветки $TARGET_BRANCH по сравнению с $BASE_BRANCH..."
echo "📁 Сохраняем в: $OUTPUT_DIR"

# Проверяем, что находимся в git-репозитории
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
  echo "❌ Не в git-репозитории."
  exit 1
fi

# Получаем список изменённых и добавленных файлов
CHANGED_FILES=$(git diff --name-only --diff-filter=ACMRT "$BASE_BRANCH" "$TARGET_BRANCH")

# Создаём папку для вывода
mkdir -p "$OUTPUT_DIR"

# Копируем файлы, соблюдая структуру
echo "$CHANGED_FILES" | while read file; do
  mkdir -p "$OUTPUT_DIR/$(dirname "$file")"
  cp "$file" "$OUTPUT_DIR/$file"
done

echo "✅ Готово! Изменённые файлы сохранены в $OUTPUT_DIR"
