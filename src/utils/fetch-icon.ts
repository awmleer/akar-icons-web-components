const cache: Record<string, string> = {};

// TODO: prevent duplicated request when rendering multiple icons with same name simultaneously

export async function fetchIcon(name: string) {
  if (!name) return '';
  if (cache[name]) {
    return cache[name];
  }
  const res = await fetch(`https://raw.githubusercontent.com/artcoholic/akar-icons/master/src/svg/${name}.svg`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
  });
  const data = await res.text();
  console.log(data);
  cache[name] = data.replace(/stroke="((?!none)[^"]+)"/g, 'stroke="currentColor"').replace(/fill="((?!none)[^"]+)"/g, 'fill="currentColor"');
  return cache[name];
}
