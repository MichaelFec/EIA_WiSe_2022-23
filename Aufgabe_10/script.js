const input = document.getElementById('message');
const value = input?.value;
console.log(value); // 👉️ "Initial value"
if (input != null) {
    console.log(input.value); // 👉️ "Initial value"
}
input?.addEventListener('input', function (event) {
    const target = event.target;
    console.log(target.value);
});
//# sourceMappingURL=script.js.map