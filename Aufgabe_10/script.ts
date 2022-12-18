

const input = document.getElementById('message') as HTMLInputElement | null;

const value = input?.value;
console.log(value) // 👉️ "Initial value"

if (input != null) {
  console.log(input.value); // 👉️ "Initial value"
}

input?.addEventListener('input', function (event) {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});


