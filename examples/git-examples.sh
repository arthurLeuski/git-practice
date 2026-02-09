#!/bin/bash

echo "Пример 1: Инициализация и первый коммит"
echo "git init"
echo "git add ."
echo "git commit -m 'Initial commit'"
echo ""

echo "Пример 2: Работа с ветками"
echo "git checkout -b feature/new-feature"
echo "# Вносим изменения"
echo "git add ."
echo "git commit -m 'Add new feature'"
echo "git checkout main"
echo "git merge feature/new-feature"
echo ""

echo "Пример 3: Работа с удаленным репозиторием"
echo "git remote add origin https://github.com/user/repo.git"
echo "git push -u origin main"
echo "git pull origin main"