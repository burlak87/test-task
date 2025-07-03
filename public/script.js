document.addEventListener('DOMContentLoaded', async function () {
    const response = await fetch('http://localhost:3001/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(posts => {
        console.log('Полученные посты:', posts);

        const paperList = document.getElementById('paperList');
        posts.forEach(post => {
            const postBlock = document.createElement('section');
            
            const img = document.createElement('img');
            img.src = post.imageUrl || 'default-image.jpg';
            img.alt = post.title || 'Изображение поста';
            postBlock.appendChild(img);
            
            const p = document.createElement('p');
            p.textContent = post.content || 'Нет содержимого';
            postBlock.appendChild(p);
            
            paperList.appendChild(postBlock);
        });
    })
    .catch(error => {
        console.error('Ошибка при получении постов:', error);
    });     
})



let btn = document.getElementById('btn');

btn.addEventListener("click", async function() {
    let idChat = document.getElementById('idChat').value;
    let text = document.getElementById('txt').value;

    const notificationData = {
        title: "Уведомление",
        message: text,
        recipientId: idChat
    };

    console.debug(notificationData);

    const response = await fetch('http://localhost:5000/api-v1/notification', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(notificationData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка сети');
        }
        return response.json();
    })
    .then(data => {
        console.log('Успешный ответ:', data);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});