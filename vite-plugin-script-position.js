// vite-plugin-script-position.js - Needed to make sure script stuff goes to the right place
export function scriptPositionPlugin() {
    return {
      name: 'script-position',
      transformIndexHtml: {
        // Replace 'enforce: post' with 'order: post'
        order: 'post',
        // Replace the 'transform' function with 'handler'
        handler(html) {
          // Capture all scripts
          const scriptMatches = Array.from(
            html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)
          );
          
          // Remove scripts from current location
          let newHtml = html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/g, '');
          
          // Add them before closing body
          const scripts = scriptMatches.map(match => match[0]).join('\n');
          newHtml = newHtml.replace('</body>', `${scripts}\n</body>`);
          
          return newHtml;
        }
      }
    };
  }