// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  if (str.length === 1) return str[0];
  return str[str.length - 1].concat(reverse(str.slice(0, str.length - 1)));
}

console.log(reverse('rithmschool'));
