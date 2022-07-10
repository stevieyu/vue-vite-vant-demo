<template>
  <div>ffmpeg</div>
  <input
    type="file"
    id="uploader"
    @change="transcode"
  >
  <button @click="cancel">
    Cancel
  </button>
</template>

<script setup>
import {ffmpeg as loadFfmpeg} from '@/helpers/RemoteLibraries';

let ffmpeg = null;
let fetchFile = null;

loadFfmpeg({log: true}).then(async ({ffmpeg: cf, fetchFile: ff}) => {
  ffmpeg = cf;
  fetchFile = ff;
  /* eslint-disable */
  // const md = ffmpeg.FS('mkdir', 'hls')
  // console.log('mkdir', md, ffmpeg.FS('readdir', '/'))
  // const lp = ffmpeg.FS('analyzePath', '/hls', true)
  // console.log('analyzePath', lp)
  // const id = ffmpeg.FS('isDir', md.mode)
  // console.log('isDir', id)
  // if(!ffmpeg.FS('isDir', 'hls')){
  //   ffmpeg.FS('mkdir', 'hls')
  // }
});

const transcode = async ({target: {files: {0: file}}}) => {
  const {name: fileName} = file;

  const fs = ffmpeg.FS
  fs('writeFile', fileName, await fetchFile(file));

  const runStr = `-i ${fileName} -c copy-f segment -segment_time 10 -segment_list_flags +live -segment_list hls-playlist.m3u8 hls-%d.ts`
  // const runStr = `-i ${fileName} -c copy -f dash -seg_duration 10 dash-playlist.mpd`
  await ffmpeg.run(...(runStr.split(' ')));
  const filesName = fs('readdir', '/').filter(i => i.match(/\.(ts|m3u8|m4s|mpd)$/i));
  // console.log('Complete transcoding', filesName, fs('readdir', '/'));

  const files = [];
  for (let fileName of filesName) {
    const data = fs('readFile', `${fileName}`);
    const file = new File([data.buffer], fileName);

    files.push(file)
  }

  // console.log('files', files)
};

const cancel = () => {
  try {
    ffmpeg.exit();
  } catch (e) {}
  ffmpeg = null;
};
</script>
