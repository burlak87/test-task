document.addEventListener('DOMContentLoaded', async function () {
    const response = await fetch('http://localhost:5000/api-v1/posts/', {
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
        console.debug('Полученные посты:', posts);

        const paperList = document.getElementById('paperList');
        posts.forEach(post => {
            console.debug(post);

            const postBlock = document.createElement('section');
            
            const img = document.createElement('img');
            img.src = `http://localhost:5000/${post.picture}` || 'default-image.jpg';
            img.alt = post.content || 'Изображение поста';
            img.width = 180;
            img.height = 80;
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



let form = document.getElementById('form');

form.addEventListener("submit", async function(event) {
    event.preventDefault();
    let idChat = Number(document.getElementById('idChat').value);
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

// form.addEventListener("submit", async function(event) {
//     event.preventDefault();
//     let text = document.getElementById('txt').value;

//     const notificationData = {
//         title: "Уведомление",
//         message: text
//     };

//     console.debug(notificationData);

//     const response = await fetch('http://localhost:5000/api-v1/notification', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(notificationData)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Ошибка сети');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Успешный ответ:', data);
//     })
//     .catch(error => {
//         console.error('Ошибка:', error);
//     });
// });