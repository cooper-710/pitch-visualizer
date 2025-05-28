export async function loadPitchData() {
  const res = await fetch('src/assets/pitch_data.json');
  if (!res.ok) throw new Error('Failed to load pitch data');
  return res.json();
}
