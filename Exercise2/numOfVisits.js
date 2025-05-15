// Import required modules
const http = require('http');
const cookie = require('cookie');

// Create a server
const server = http.createServer((req, res) => {
    // Set headers for the response
    res.setHeader('Content-Type', 'text/html');
    
    // Get cookies 
    const cookies = cookie.parse(req.headers.cookie || '');
    
    // Get current date and time
    const now = new Date();
    
    let visitCount = 1;
    let lastVisit = '';
    let html = '';
    
    // Check if visitor has been here before
    if (cookies.visitCount) {
        // If yes, increment 
        visitCount = parseInt(cookies.visitCount) + 1;
        // Get the last visit time
        lastVisit = cookies.lastVisit;
    }
    
    // Create the HTML content
    if (visitCount === 1) {
        // First time visitor
        html = `
            <html>
                <head>
                    <title>Welcome</title>
                </head>
                <body>
                    <h1>Welcome to my webpage!</h1>
                    <p>It is your first time that you are here.</p>
                </body>
            </html>
        `;
    } else {
        // Returning visitor
        html = `
            <html>
                <head>
                    <title>Welcome Back</title>
                </head>
                <body>
                    <h1>Hello, this is the ${visitCount} time that you are visiting my webpage</h1>
                    <p>Last time you visited my webpage on: ${lastVisit}</p>
                </body>
            </html>
        `;
    }
    
    // Format the current date and time
    const currentDateTime = now.toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
        year: 'numeric'
    }).replace(/,/g, '');
    
    // Set cookies 
    res.setHeader('Set-Cookie', [
        `visitCount=${visitCount}; Path=/`,
        `lastVisit=${currentDateTime}; Path=/`
    ]);
    
    // Send the response
    res.end(html);
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 