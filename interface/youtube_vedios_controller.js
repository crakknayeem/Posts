// Your JavaScript array containing YouTube video IDs
        const videoIds = [
            "752Ziu39zTE",
            "P-4zG8uTuHs",
            "XbNQhiLmJTc",
            "FlCTifxUl1s",
            "jvk9v806gzY",
            "-UdfM1xxXJk",
            "umEaa_6rZGo",
            "c3CAPHfOZDY",
            "V-oqPysfoiw",
            "ALn_ch0aqB0",
          
            
            // Add more video IDs as needed
        ];

        // Function to create iframe for each video ID
        // Function to create iframe for each video ID
function createVideoIframe(videoId) {
  const container = document.createElement("div");
    const iframe = document.createElement("iframe");
 iframe.width = "560";
    iframe.height = "315";
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.frameborder = "0";
    iframe.allowfullscreen = true;
     // Add the sandbox attribute to block links
    // Allow JavaScript while still blocking links
    iframe.sandbox = 'allow-same-origin allow-scripts allow-popups';
    
    
    iframe.title = ''; // Remove the default YouTube title
    // Create link for each video
    const videoLink = document.createElement("a");
    videoLink.href = `https://www.youtube.com/watch?v=${videoId}`;
    videoLink.target = "_blank"; // Open in a new tab
    videoLink.innerText = "Watch on YouTube"; // You can customize the text

    // Append iframe and link to the container
    container.appendChild(iframe);
    container.appendChild(videoLink);

    return container;
}


        // Get the container element
        const videoContainer = document.getElementById("videos-container");

        // Loop through the video IDs and append iframes to the container
        videoIds.forEach(videoId => {
            const videoIframe = createVideoIframe(videoId);
            videoContainer.appendChild(videoIframe);
        });