var playlist = {
  Slowdive: "Alison"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete artistName.playlist;
  return playlist;
}