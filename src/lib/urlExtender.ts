import { bases } from '../constants/bases';

export const encodeUrl = (url: string) => {
  const base64 = Buffer.from(url).toString('base64');
  const base64arr = base64.split('');
  let output = '';

  for (let i = 0; i < base64arr.length; i += 1) {
    const index = bases.indexOf(base64arr[i]);
    output += index
      .toString(2)
      .padStart(9, '0')
      .replaceAll('0', 'o')
      .replaceAll('1', 'O');
  }

  return output;
};

export const decodeUrl = (path: string) => {
  const parsedPath = path.substring(1);
  const binary = parsedPath.replaceAll('o', '0').replaceAll('O', '1');
  const yardstick = /.{9}/g;

  const pieces: string[] = binary.match(yardstick) || [];
  const accumulated = pieces.length * 9;

  const modulo = binary.length % accumulated;
  if (modulo) pieces.push(binary.slice(accumulated));

  for (let i = 0; i < pieces.length; i += 1) {
    pieces[i] = bases[parseInt(pieces[i], 2)];
  }

  const decoded = Buffer.from(pieces.join(''), 'base64');

  return decoded;
};
