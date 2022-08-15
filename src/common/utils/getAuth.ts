export function getAuthRedirectUrl() {
  const spotifyUrl = "https://accounts.spotify.com/authorize";
  const redirectUri = "http://localhost:3000/";
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  console.log(clientId);
  const getScopes = ["playlist-read-private", "user-library-read"];

  return `${spotifyUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${getScopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
}
