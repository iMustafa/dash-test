module.exports = [
  `-re`,
  // `-i`, `rtmp://localhost/live/test`,
  `-i`, `utils/test.mp4`,
  `-pix_fmt`, `yuv420p`,
  `-map`, `0:v`,
  `-c:v`, `libx264`, `-tune`, `zerolatency`, `-profile:v`, `high`, `-preset`, `veryfast`, `-bf`, `0`, `-refs`, `3`, `-sc_threshold`, `0`,
  `-g`, `144`,
  `-keyint_min`, `144`,
  `-b:v`, `400k`,
  `-method`, `PUT`,
  `-seg_duration`, `6`,
  `-streaming`, `1`,
  `-http_persistent`, `1`,
  `-index_correction`, `1`,
  `-use_timeline`, `0`,
  `-media_seg_name`, `chunk-stream-$RepresentationID$-$Number%05d$.m4s`,
  `-init_seg_name`, `init-stream-$RepresentationID$.m4s`,
  `-window_size`, `5`,
  `-extra_window_size`, `10`,
  `-remove_at_exit`, `1`,
  `-adaptation_sets`, `id=0,streams=v id=1,streams=a`,
  `-f`, `dash`,
  `http://localhost:3104/manifest.mpd`
]