# Мое путешествие в изучение Git и GitHub

*Дата: $(date)*  
*Автор: [Ваше Имя]*

## Начало

Сегодня я начал изучать Git и GitHub с нуля. Вот что я сделал:

### 1. **Установка и настройка**
- Установил Git на Linux
- Настроил имя и email:
  ```bash
  git config --global user.name "arthurleuski"
  git config --global user.email "arthurleuski@gmail.com"
  ```
### 2. **первые траблы**
- Создал локальный репозиторий
- создал в нем первый readme файл
- получил косяки при подключении к удаленному репозиторию, создал ключ ssh и кинул в гитхаб

  ```bash
    git remote add origin https://github.com/arthurLeuski/git-practice.git
  ``` 
### 3. **Слияние **

Тут были траблы со слияем , когда две ветки ловят конфликт можно выбрать из какой выбирать , либо из той куда сливаю 
```bash
git checkout --ours file.md 
```
либо из той которую сливаю
```bash
git checkout --theirs file.md 
```