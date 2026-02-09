console.log("Добро пожаловать в проект по изучению Git!");
console.log("Этот проект создан для практики Git и GitHub");

const showGitCommands = () => {
    const commands = [
        { command: "git init", description: "Инициализация репозитория" },
        { command: "git add .", description: "Добавить все файлы" },
        { command: "git commit -m 'msg'", description: "Создать коммит" },
        { command: "git push", description: "Отправить на GitHub" },
        { command: "git pull", description: "Получить с GitHub" }
    ];
    
    console.log("\nОсновные команды Git:");
    commands.forEach(cmd => {
        console.log(`  ${cmd.command} - ${cmd.description}`);
    });
};

showGitCommands();