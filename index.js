// Generated by ChatGPT //
document.addEventListener('DOMContentLoaded', function () {
    const sidebarLeft = document.querySelector('.sidebar.sidebar-left');
    const arrowLeft = sidebarLeft.querySelector('.arrow');
    const sidebarRight = document.querySelector('.sidebar.sidebar-right');
    const arrowRight = sidebarRight.querySelector('.arrow2');

    let isDraggingLeft = false;
    let startXLeft = 0;

    arrowLeft.addEventListener('mousedown', function (e) {
        isDraggingLeft = true;
        startXLeft = e.clientX;
    });

    document.addEventListener('mouseup', function () {
        if (isDraggingLeft) {
            isDraggingLeft = false;

            // Check if sidebar is more than halfway open, then fully open it
            if (parseInt(sidebarLeft.style.left) > -100) {
                sidebarLeft.style.left = '0';
            } else {
                // Otherwise, slide back in
                sidebarLeft.style.left = '-400px';
            }
        }
    });

    document.addEventListener('mousemove', function (e) {
        if (isDraggingLeft) {
            const newLeft = Math.min(Math.max(e.clientX - startXLeft, -400), 0);
            sidebarLeft.style.left = newLeft + 'px';
        }
    });

    let isDraggingRight = false;
    let startXRight = 0;

    arrowRight.addEventListener('mousedown', function (e) {
        isDraggingRight = true;
        startXRight = e.clientX;
    });

    document.addEventListener('mouseup', function () {
        if (isDraggingRight) {
            isDraggingRight = false;

            // Check if sidebar is more than halfway open, then fully open it
            if (parseInt(sidebarRight.style.right) > -100) {
                sidebarRight.style.right = '0';
            } else {
                // Otherwise, slide back in
                sidebarRight.style.right = '-400px';
            }
        }
    });

    document.addEventListener('mousemove', function (e) {
        if (isDraggingRight) {
            const newRight = Math.min(Math.max(startXRight - e.clientX, -400), 0);
            sidebarRight.style.right = newRight + 'px';
        }
    });
});


setTimeout(function() {
    document.getElementById('myGif').style.display = 'block';
    setTimeout(function() {
        document.getElementById('myGif').style.display = 'none';
    }, 900);
}, 15000);
