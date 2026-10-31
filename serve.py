#!/usr/bin/env python3
"""
Statistiek Leerplatform - Lokale Webserver Launcher
Start een lokale HTTP server en opent automatisch de online training in je browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Voorkom caching tijdens ontwikkeling
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def main():
    directory = os.path.dirname(os.path.abspath(__file__))
    os.chdir(directory)

    port = PORT
    for p in range(PORT, PORT + 20):
        try:
            with socketserver.TCPServer(("", p), Handler) as httpd:
                url = f"http://localhost:{p}"
                print("=" * 60)
                print(f"📊 Statistiek Meesterschap: Van Basis tot Level 15")
                print(f"🚀 Server gestart op: {url}")
                print(f"📁 Werkmap: {directory}")
                print(f"💡 Druk op Ctrl+C om de server te stoppen")
                print("=" * 60)
                
                try:
                    webbrowser.open(url)
                except Exception:
                    pass
                    
                httpd.serve_forever()
                break
        except OSError:
            continue
    else:
        print(f"Kon geen beschikbare poort vinden tussen {PORT} en {PORT + 20}.")
        sys.exit(1)

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\nServer gestopt. Veel succes met statistiek!")
