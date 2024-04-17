function convertToNether() {
    const x = parseInt(document.getElementById('overworldX').value);
    const y = parseInt(document.getElementById('overworldY').value);
    const z = parseInt(document.getElementById('overworldZ').value);

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        alert('Please enter valid Overworld coordinates.');
        return;
    }

    const netherCoords = [
        Math.floor(x / 8),
        y,
        Math.floor(z / 8)
    ];

    document.getElementById('netherCoords').innerText = `Nether Coordinates: ${netherCoords.join(',')}`;
    showSkeleton();
}

function convertToOverworld() {
    const x = parseInt(document.getElementById('netherX').value);
    const y = parseInt(document.getElementById('netherY').value);
    const z = parseInt(document.getElementById('netherZ').value);

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        alert('Please enter valid Nether coordinates.');
        return;
    }

    const overworldCoords = [
        x * 8,
        y,
        z * 8
    ];

    document.getElementById('overworldCoords').innerText = `Overworld Coordinates: ${overworldCoords.join(',')}`;
    showSkeleton();
}

function showSkeleton() {
    const skeleton = document.createElement('img');
    skeleton.src = 'skeleton.png';
    skeleton.className = 'skeleton';
    document.body.appendChild(skeleton);

    setTimeout(() => {
        skeleton.remove();
    }, 20000);
}
