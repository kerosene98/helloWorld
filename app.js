function main() {
  return 'Hello World';
}

if (typeof module !== 'undefined') {
  module.exports = { main };
}

if (typeof require !== 'undefined' && require.main === module) {
  console.log(main());
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    if (output) {
      output.textContent = main();
    }
  });
}
