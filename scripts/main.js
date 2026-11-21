document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.option');
    const submitBtn = document.getElementById('submit-test');
    const resultDiv = document.getElementById('test-result');
    const scoreElement = document.getElementById('score');
    const resultText = document.getElementById('result-text');
    options.forEach(option => {
        option.addEventListener('click', function() {
            const parentQuestion = this.closest('.question');
            parentQuestion.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });
    submitBtn.addEventListener('click', function() {
        let correctAnswers = 0;
        let totalQuestions = document.querySelectorAll('.question').length;
        document.querySelectorAll('.question').forEach(question => {
            const selectedOption = question.querySelector('.option.selected');
            if (selectedOption) {
                const isCorrect = selectedOption.getAttribute('data-correct') === 'true';
                question.querySelectorAll('.option').forEach(option => {
                    option.classList.remove('correct', 'incorrect');
                    if (option.getAttribute('data-correct') === 'true') {
                        option.classList.add('correct');
                    } else if (option === selectedOption && !isCorrect) {
                        option.classList.add('incorrect');
                    }
                });
                if (isCorrect) {
                    correctAnswers++;
                }
            }
        });
        scoreElement.textContent = `${correctAnswers}/${totalQuestions}`;
        if (correctAnswers === totalQuestions) {
            resultText.textContent = 'Отлично! Вы отлично усвоили материал о Русско-японской войне.';
        } else if (correctAnswers >= totalQuestions / 2) {
            resultText.textContent = 'Хорошо! Вы хорошо разбираетесь в теме, но есть что повторить.';
        } else {
            resultText.textContent = 'Попробуйте еще раз! Рекомендуем внимательнее изучить материал.';
        }
        resultDiv.style.display = 'block';
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    });
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0 пикселей 0 пикселей -50 пикселей 0 пикселей'
    };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    document.querySelectorAll('.content-section').forEach(section => {
        observer.observe(section);
    });
});