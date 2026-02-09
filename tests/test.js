console.log("Запуск тестов...");

const testGitKnowledge = () => {
    const questions = [
        "Что делает git init?",
        "Как создать новую ветку?",
        "Что такое merge conflict?"
    ];
    
    console.log("Вопросы для самопроверки:");
    questions.forEach((q, i) => {
        console.log(`${i + 1}. ${q}`);
    });
};

testGitKnowledge();