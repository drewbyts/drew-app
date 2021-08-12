const bars = document.querySelector('#bars');
const menu = document.querySelector('#menu');

bars.addEventListener('click', () => {
    if (menu.classList.contains('hidden') && window.
    innerWidth < 768) {
        menu.classList.remove('hidden');
        menu.classList.add(
            'flex',
            'flex-col',
            'h-screen',
            'text-6xl',
            'uppercase',
            'font-extralight',
            'text-center',
            'bg-gray-100',
            'w-full',
            'mt-4',
            'absolute',
            'top-8'
        );
    } else {
        menu.classList.add('hidden');
    }
});

menu.addEventListener('click', () => {
    menu.classList.add('hidden');
})

window.addEventListener('resize',() => {
    if(window.innerWidth >768) {
        menu.classList.add('hidden');
        menu.classList.remove(
            'flex',
            'flex-col',
            'h-screen',
            'text-6xl',
            'uppercase',
            'font-extralight',
            'text-center',
            'bg-gray-100',
            'w-full',
            'mt-4',
            'absolute',
            'top-8'
        );
    }
});