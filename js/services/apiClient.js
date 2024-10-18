export async function ApiClient(url) {
  try {
    const response = await fetch(url);
    const listCharacter = await response.json();
    return listCharacter;
  } catch (err) {
    console.log(err);
  }
}
