const { execSync } = require('child_process');
let data = '';
process.stdin.on('data', chunk => data += chunk);
process.stdin.on('end', () => {
  try {
    const input = JSON.parse(data);
    if (input.prompt && input.prompt.trim() === 'kai') {
      execSync('git add . && git commit -m "Actualizacion desde Claude Code" && git push', {
        stdio: 'inherit',
        cwd: 'C:/Users/Kai/Desktop/FranksGrill'
      });
    }
  } catch (e) {
    // silencioso si falla
  }
});
