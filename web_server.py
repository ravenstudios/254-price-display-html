import http.server
import socketserver


# Simple webserver to use in development
# Set the port number you want to use (e.g., 8000)
port = 8000

# Specify the handler to use (SimpleHTTPRequestHandler serves files from current directory)
handler = http.server.SimpleHTTPRequestHandler

# Create the server
with socketserver.TCPServer(("", port), handler) as httpd:
    print(f"Serving on port {port}")
    # Start the server
    httpd.serve_forever()
