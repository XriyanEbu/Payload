var isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
if (isBot) {
    console.log("BOT DETECTED");
} else {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
